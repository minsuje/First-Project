if (document.body.animate) {
    let btnBookmark=document.querySelector('.btnBookmark');
    btnBookmark.addEventListener('click', bubblesPop);
}

function bubblesPop (e) {
    if(document.querySelector('.btnBookmark').classList.contains('checked')) return;
    if (e.clientX === 0 && e.clientY === 0) {
        const bbox = document.querySelector('#button').getBoundingClientRect();
        const x = bbox.left + bbox.width / 2;
        const y = bbox.top + bbox.height / 2;
        for (let i = 0; i < 30; i++) {
        createBubbles(x, y);
        }
    } else {
        for (let i = 0; i < 30; i++) {
        createBubbles(e.clientX, e.clientY);
        }
    }
}

function createBubbles (x, y) {
    const bubblebox = document.createElement('div');
    bubblebox.classList.add('bookmarkBubbles');
    document.body.appendChild(bubblebox);

    const size = Math.floor(Math.random() * 20 + 5);
    bubblebox.style.width = `${size}px`;
    bubblebox.style.height = `${size}px`;
    bubblebox.style.background = `rgb(255, ${Math.random() * 100 + 125}, 0)`;

    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;

    const animation = bubblebox.animate([
        {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        opacity: 1
        },
        {
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0
        }
    ], {
        duration: Math.random() * 1000 + 500,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 200
    });

    animation.onfinish = () => {
        bubblebox.remove();
    };
}

const swiper1 = new Swiper('.mainSlider', {
    navigation: {
        nextEl: '.mainSlider .swiper-button-next',
        prevEl: '.mainSlider .swiper-button-prev',
    },
    on: {
        slideChange: function () {
            $('.swiper-slide').each(function () {
                let youtubePlayer = $(this).find('iframe').get(0);
                if (youtubePlayer) {
                    youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            });
        },
    }
});

const swiper2 = new Swiper('.ingredients .featRecipe', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.ingredients .swiper-button-next',
        prevEl: '.ingredients .swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
    },
} );//관련레시피 : 본문
const swiper3 = new Swiper('#ingredients .featRecipe', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '#ingredients .swiper-button-next',
        prevEl: '#ingredients .swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
    },
} );//관련레시피 : 팝업

//뒤로가기 버튼
let $btnBack = document.querySelector('.btnBack');
$btnBack.addEventListener('click',function(e){
    window.history.back();
});

//처음(상단)으로 가기 버튼
let btnGroup = document.querySelector(".airBtns");
const el = document.querySelector(".detailHead");
const observer = new IntersectionObserver( 
    ([e]) =>btnGroup.classList.toggle("show", e.intersectionRatio < 1),
    { threshold: [1] }
);
observer.observe(el);

let rootElement = document.documentElement;
let scrollToTopBtn = document.querySelector(".btnTop");
function scrollToTop() {
    rootElement.scrollTo({ top: 0, behavior: "smooth" });
}
scrollToTopBtn.addEventListener("click", scrollToTop);


$(function(){
    $('.btnTWX').click(function(e){
        let linkUrl = window.location.href;
        e.preventDefault();
        window.open(
            `https://twitter.com/intent/tweet?text=${linkUrl}`,'','width=500,height=500'
        )
    });
    $('.btnFB').click(function(e){
        let linkUrl = window.location.href;
        e.preventDefault();
        window.open( 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(linkUrl),'','width=500,height=500' );
    });
    $('.btnCopy').click(function(e){
        var url = '';
        var textarea = document.createElement("textarea");
        e.preventDefault();
        document.body.appendChild(textarea);
        url = window.document.location.href;
        textarea.value = url;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("URL이 복사되었습니다.")
    });
    $('.btnPrint').click(function(e){
        e.preventDefault();
        window.print();
    });
    $('.btnBookmark').click(function(e){
        e.preventDefault();
        $(this).toggleClass('checked')
    });

    //댓글 등록
    let $replyCount=$('.detailFoot .head em');
    let replyCount=parseInt($replyCount.text());
    $(document).on('click','.btnReplyWrite',function(e){
        let text= $('#replyText').val();
        let idxId=$('.replyList li').eq(0).data('replyId')+1;
        let username='홍길동';//임시
        let now=new Date();
        let date=`${
                now.getFullYear()}-${
                now.getMonth() < 10 ? '0'+now.getMonth() : now.getMonth()}-${
                now.getDate() < 10 ? '0'+now.getDate() : now.getDate()
            }`;
        let html = `
            <li class="replyDep1" data-reply-id="${idxId}">
                <div class="userInfo">
                    <span class="thumb me-1" style="background-image: url('../imgs/noimage.png')"></span>
                    <span class="name">${username}</span>
                    <span class="date">${date}</span>
                </div>
                <div class="comment mt-2 ps-2">
                    ${idxId} ${text}
                </div>
                <div class="moreBtns">
                    <span><i class="bi bi-three-dots"></i></span>
                    <button class="btnModify" aria-label="수정"><i class="bi bi-pencil"></i></button>
                    <button class="btnDelete" aria-label="삭제" data-bs-target="#replyDeleteConfirm" data-bs-toggle="modal" data-reply-id=${idxId}><i class="bi bi-trash"></i></button>
                </div>
            </li>`;
        replyCount++;
        $replyCount.text(replyCount);
        $('.replyList').prepend(html);
        $('#replyText').val('');
    });
    //임시 : 댓글 구분용
    $('.replyDep1').each(function(i){
        let id=$('.replyDep1 .comment').length-i;
        $('.comment',this).prepend(id+' ');
        $(this).attr('data-reply-id',id);
        $('.btnDelete',this).attr('data-reply-id',id);
        if($(this).nextAll('.replyDep2').length){
            $(this).nextAll('.replyDep2').each(function(ii,dep2){
                $('.comment',dep2).prepend(id+'-'+(ii+1)+' ');
            })
        }
    });
    //댓글 : 수정 버튼
    $(document).on('click','.btnModify',function(e){
        let $self= $(this).closest('li');
        let text= $('.comment',$self).html().replace(/(\n\s+)/gi, ' ').trim();
        !$('.comment',$self).next('.replyTextareaWrap').length && 
        $('.comment',$self).after(`
            <div class='replyTextareaWrap replyInput mt-3'><textarea id="replyTextarea">${text}</textarea><button class="btn btn-secondary" onclick="(function(e){
                $('.replyTextareaWrap').remove();
            })(this);">취소</button><button class="btn btn-wa-primary" onclick="(function(e){
                let data=$('#replyTextarea').val();
                $(e).closest('li').find('.comment').text(data);
                $('.replyTextareaWrap').remove();
            })(this);">수정</button></div>
        `);
    });
    //댓글 삭제 버튼
    let $btnDelete;
    $(document).on('click','.btnDelete',function(e){
        $btnDelete = $(this);
    });
    //댓글 삭제 확인 버튼
    $(document).on('click','#replyDeleteConfirm .btn-wa-primary',function(e){
        let id = $btnDelete.data('reply-id');
        let $dep2All = $(`.replyDep1[data-reply-id=${id}]`).nextAll('.replyDep2');
        let $self= $btnDelete.closest('li');
        if($dep2All.length){
            replyCount=(replyCount-$dep2All.length)-1;
            $dep2All.each(function(i,el){
                el.remove();
            });
        }else{
            replyCount--;
        }
        $self.remove();        
        $replyCount.text(replyCount);
    });

    //팝업: 재료
    $('.ingredients p a').click(function(e){
        e.preventDefault();
        let tit=$(this).prev().text().split("(")[0];//더미 타이틀 가저오기
        $('#ingredients .modal-title').text(tit);//더미 타이틀 삽입
    });
    //팝업: 계량방법 
    $('.weightBtns input').click(function(e){
        let idx = this.id.split('btnradio')[1]-1;
        $('.weight_con').hide();
        if($(this).is(":checked")){
            $('.weight_con').eq(idx).show();
        }
    });
});