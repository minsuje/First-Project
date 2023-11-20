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


// 북마크 클릭 : 색 변하게
let blank = document.querySelectorAll('.bi-bookmark')
let fill = document.querySelectorAll('.bi-bookmark-fill')

blank.forEach((el) => {
    // console.log(el)
    el.addEventListener('click', function () {
        // console.log(el.nextSibling.nextSibling);
        el.nextSibling.nextSibling.classList.add('active')

    })
})

fill.forEach((el) => {
    el.addEventListener('click', function () {
        el.classList.remove('active')
    })
})


// 북마크 클릭 : 저장한 레시피로 추가
let bookmarkBox = document.querySelector('.bookmarkBox')


blank.forEach((el) => {
    el.addEventListener('click', function () {
        // console.log(el.parentNode.parentNode);
        const parent = el.parentNode.parentNode;
        const clone = parent.cloneNode(true);
        clone.classList.add('col-md-3')
        bookmarkBox.prepend(clone);
    })
})


fill.forEach((el) => {
    el.addEventListener('click', function () {
        el.classList.remove('active')
        // console.log(el.parentNode.parentNode);
        const parent = el.parentNode.parentNode;
        // console.log(parent.classList[0])

        // console.log(bookmarkBox.querySelector(parent.classList[0]))


        // console.log(bookmarkBox.children)
        // for(let i = 0; i < bookmarkBox.children.length; i++) {
        //     console.log(bookmarkBox.children[i].classList.contains(parent.classList[0]))
        // }
        // const child = bookmarkBox.querySelector(`.bookmarkBox > ${parent.classList[0]}`)
        // console.log(child)
    })
})



// let bookmarRow = document.querySelector('.')

// document.querySelector('.a #no').addEventListener('click', () => document.querySelector('.b #no').style.display = 'none');
