
// 동영상 레시피 캐러셀
let items = document.querySelectorAll('.four .carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


// // 북마크
// let blank = document.querySelectorAll('.bi-bookmark')
// let bookmarkBox = document.querySelector('.bookmarkBox')


// // 북마크 추가
// blank.forEach((el) => {
//     el.addEventListener('click', function () {
//         // console.log(el.nextSibling.nextSibling);
//         // blanck 에서 fill로 아이콘 바뀜
//         el.nextSibling.nextSibling.classList.add('active')

//         // 저장한 레시피로 복제해서 추가
//         const parent = el.parentNode.parentNode;
//         const clone = parent.cloneNode(true);
//         clone.classList.remove('col-md-4')
//         clone.classList.add('col-md-3')
//         clone.classList.add('col-6')
//         bookmarkBox.prepend(clone)

//         let toBlank = el.nextSibling.nextSibling; // 바깥 콘텐츠에 붙어있는 북마크-fill

//         // 북마크 해제
//         let fill = document.querySelectorAll('.bi-bookmark-fill')
//         fill.forEach((el) => {
//             el.addEventListener('click', function () {
//                 el.classList.remove('active')  // 복제 콘텐츠 북마크-fill 해제
//                 toBlank.classList.remove('active') // 바깥 콘텐츠에 붙어있는 북마크-fill 해제

//                 // 콘텐츠 삭제
//                 let inactiveBookmark = el.parentNode.parentNode  // 복제 콘텐츠
//                 inactiveBookmark.classList.add('inactive')
//                 clone.classList.add('inactive')
//             }) 
//         })


//     })
// })



// 북마크
let blank = document.querySelectorAll('.bi-bookmark')
let bookmarkBox = document.querySelector('.bookmarkBox')


// 북마크 추가
blank.forEach((el) => {
    el.addEventListener('click', function () {
        // console.log(el.nextSibling.nextSibling);
        // blanck 에서 fill로 아이콘 바뀜
        el.nextSibling.nextSibling.classList.add('active')
        const origianlFill = el.nextSibling.nextSibling

        // 선택 레시피 콘텐츠 복제
        const parent = el.parentNode.parentNode;
        const clone = parent.cloneNode(true);
        // 반응형 사이즈 조절을 위해 부트스트랩 중단점 추가
        clone.classList.remove('col-md-4')
        clone.classList.add('col-md-3', 'col-6')

        // 저장한 레시피 목록으로 추가
        bookmarkBox.prepend(clone)

        // 원본 레시피 콘텐츠에서 북마크 해제시
        // 저장한 레시피 목록에서 복제된 콘텐츠 삭제
        origianlFill.addEventListener('click', function () {
            origianlFill.classList.remove('active')
            clone.remove()
        })

        // 저장한 레시피 목록 안의 복제 콘텐츠에서 북마크 해제 클릭
        const cloneBookmarkFill = clone.querySelector('.bi-bookmark-fill');
        cloneBookmarkFill.addEventListener('click', function () {

            // 복제 콘텐츠 북마크 해제
            cloneBookmarkFill.classList.remove('active');

            // 원본 콘텐츠 북마크 해제
            origianlFill.classList.remove('active');

            // 저장한 레시피 목록에서 콘텐츠 삭제
            clone.remove();
        });
    })
})


// 이달의 레시피
let kFood = document.querySelector('.kFood');
let wFood = document.querySelector('.wFood');
let cFood = document.querySelector('.cFood');
let jFood = document.querySelector('.jFood');

let korean = document.querySelector('.korean');
let western = document.querySelector('.western');
let china = document.querySelector('.china');
let japan = document.querySelector('.japan');

kFood.addEventListener('click', function () {
    kFood.classList.add('active')
    wFood.classList.remove('active')
    cFood.classList.remove('active')
    jFood.classList.remove('active')
    korean.classList.add('active')
    western.classList.remove('active')
    china.classList.remove('active')
    japan.classList.remove('active')
});

wFood.addEventListener('click', function () {
    wFood.classList.add('active')
    cFood.classList.remove('active')
    jFood.classList.remove('active')
    kFood.classList.remove('active')
    western.classList.add('active')
    china.classList.remove('active')
    japan.classList.remove('active')
    korean.classList.remove('active')
});

cFood.addEventListener('click', function () {
    cFood.classList.add('active')
    kFood.classList.remove('active')
    wFood.classList.remove('active')
    jFood.classList.remove('active')
    china.classList.add('active')
    korean.classList.remove('active')
    western.classList.remove('active')
    japan.classList.remove('active')
});

jFood.addEventListener('click', function () {
    jFood.classList.add('active')
    kFood.classList.remove('active')
    wFood.classList.remove('active')
    cFood.classList.remove('active')
    japan.classList.add('active')
    korean.classList.remove('active')
    western.classList.remove('active')
    china.classList.remove('active')
});
