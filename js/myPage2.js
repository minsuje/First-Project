// 프로필 이미지 클릭해서 변경
function changeImg() {
    document.getElementById('inputImg').click();
}

$('.logout-btn').click(function() {
    window.localStorage.setItem('isLoggedin', false);
})
if (JSON.parse(window.localStorage.getItem('isLoggedin'))){
    $('.login-text')[0].innerHTML = '<a href="/myPage2.html"><i class="bi bi-person-circle" style="font-size: 1.2rem;"></i></a>';
  }

function previewFile() {
    let preview = document.getElementById('previewImg');
    let file = document.getElementById('inputImg').files[0];
    let reader = new FileReader();

    reader.onload = function () {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = '/Profile_icon.png';
    }
}

// 좋아요 횟 수 증가

function Good(){
    let count = document.getElementById('count')
    let val = count.innerText;
    
    console.log(count.innerText);

    val++
    count.innerText = val;
}

// 슬라이드
let newMove = 0;
function nextSlidesNew() {
    newMove += 210;
    let container = document.getElementsByClassName('newSlides')[0];
    container.style.right = newMove + 'px';
    console.log(newMove);
    console.log(container.style.right = newMove + 'px');
    if(newMove >= 840)
    {
        newMove = -210;
    }
}
function prevSlidesNew() {
    if(newMove > 0){
        newMove -= 210;
        let container = document.getElementsByClassName('newSlides')[0];
        container.style.right = newMove + 'px';
    }

}

// bestSlides

let bestMove = 0;
function nextSlidesBe() {
    bestMove += 210;
    let bestContainer = document.querySelectorAll('.bestSlides li');
    let container = document.getElementsByClassName('bestSlides')[0];
    container.style.right = bestMove + 'px';

    if(bestMove >= 840)
    {
        bestMove = -210;
    }
}

function prevSlidesBe() {
    if(bestMove > 0){
        bestMove -= 210;
        let container = document.getElementsByClassName('bestSlides')[0];
        container.style.right = bestMove + 'px';
    }
}

//recentSlides
let recentMove = 0;
function nextSlidesRe() {
    recentMove += 210;
    let container = document.getElementsByClassName('recentSlides')[0];
    container.style.right = recentMove + 'px';
    console.log(recentMove);
    console.log(container.style.right = recentMove + 'px');
    if(recentMove >= 840)
    {
        recentMove = -210;
    }
}
function prevSlidesRe() {
    if(recentMove > 0){
        recentMove -= 210;
        let container = document.getElementsByClassName('recentSlides')[0];
        container.style.right = recentMove + 'px';
    }

}