let toggle = document.querySelector('.more');
let icon = document.querySelector('.icon')
let menu = document.querySelector('.menu');
let login = document.querySelector('.login');

let search = document.querySelector('.search')
let searchBox = document.querySelector('.searchBox')

let back = document.querySelector('.back');

toggle.addEventListener('click', function () {
    menu.classList.toggle('active');
    // login.style.display = 'none';
    search.classList.toggle('inactive');
    login.classList.toggle('inactive');

})
search.addEventListener('click', function () {
    searchBox.classList.toggle('active');
    if (window.innerWidth <= 768) {

        $('body').toggleClass('overflow-hidden')
    }
    // login.classList.toggle('inactive');
    // toggle.classList.toggle('inactive');
})

back.addEventListener('click', function () {
    searchBox.classList.remove('active');
    $('body').removeClass('overflow-hidden')
})
