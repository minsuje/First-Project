function handleClick(el) {
    console.log(el.nextElementSibling)
    const next = el.nextElementSibling;
    next.classList.toggle('hiddenWr');
    console.log($(this).next('.hiddenWr').toggle())
}

// 팝업
let popup = document.querySelector('.popup');
let addNotice = document.querySelector('.addNotice');
let cancel = document.querySelector('#cancel');

function togglePopup() {
    popup.classList.toggle("show-popup");
}

function showPopup() {
    $('.popup').css('opacity', '1');
    $('.popup').css('visibility', 'visible');
}

$('.addNotice').click(function() {
    $('.popup').css('opacity', '1');
    $('.popup').css('visibility', 'visible');
})

$('#cancel').click(function() {
    $('.popup').css('opacity', '0');
    $('.popup').css('visibility', 'hidden');
})

// sectionBox 토글

let sectionBox = document.querySelector('.sectionBox');
let sectionBox2 = document.querySelector('.sectionBox2');


function changeSections(){
    sectionBox.style.display = 'none';
    sectionBox2.style.display = 'block';
}
function changeSections2(){
    sectionBox.style.display = 'block';
    sectionBox2.style.display = 'none';
}

// 각 sectionBox 종류에 따라 submit

$('#submit').click(function(){
    let li = document.createElement('li');
    let day = new Date();
    let time = `${day.getFullYear()} - ${day.getMonth()+1} - ${day.getDate()}`;
    console.log(time);
    let headTitle = document.getElementById('headTitle').value;
    let newMessage = document.getElementById('newMessage').value;
    let ul;
    if (sectionBox.style.display == 'block') {
        ul = document.getElementById('noticeId');
        li.innerHTML = `<button type="button" class="serviceItems" onclick="handleClick(this)">
    <p>주요 공지</p>
    <div class="serviceItemsStyle">
        <p> ${headTitle} </p>
        <p>${time}</p>
    </div>
</button>
<div class="hiddenWr">
    <p>${newMessage}</p>
</div>`;
ul.prepend(li);

    } else if(sectionBox.style.display == 'none'){
        ul = document.getElementById('faqId');
        li.innerHTML = `<button type="button" class="serviceItems" onclick="handleClick(this)">
    <p>FAQ</p>
    <div class="serviceItemsStyle">
        <p> ${headTitle} </p>
        <p>${time}</p>
    </div>
</button>
<div class="hiddenWr">
    <p>${newMessage}</p>
</div>`;
ul.prepend(li);
    }
    document.getElementById('headTitle').value = '';
    document.getElementById('newMessage').value = '';

    $('.popup').css('opacity', '0');
    $('.popup').css('visibility', 'hidden');
})

//  공지사항, FAQ 선택

let topic1 = document.querySelector('.topic1');
let topic2 = document.querySelector('.topic2');

$('.topics').click(function(){
    topic1.style.borderBottom = 'none';
    topic2.style.borderBottom = 'none';
    this.style.borderBottom = '1px solid rgb(36, 36, 36)';
})

