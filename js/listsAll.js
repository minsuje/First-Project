let slideIndex;
let card;
let index = 18;
let imgUrl;

const url = new URL(location); // URLSearchParams 객체
const urlParams = url.searchParams; // URLSearchParams.get()
let result = urlParams.get('cate');// 3의 결과

if (result == 1) {
  $('.food-slide-title h5')[0].textContent= '양식 레시피';
  $('.card-group2').addClass('order1');
} else if (result == 2) {
  $('.food-slide-title h5')[0].textContent= '중식 레시피';
  $('.card-group3').addClass('order1');
} else if (result == 3) {
  $('.food-slide-title h5')[0].textContent= '일식 레시피';
  $('.card-group4').addClass('order1');
}



function removeModals () {
  $('.modal-card').remove();
  $('.curtain').removeClass('visible');
  $('.add-modal-card').removeClass('visible')
  $('body').removeClass('overflow-hidden');
}


$(document).on("click", ".food-card img" ,function() {
  card = this.parentNode;
  $('body').addClass('overflow-hidden');
  $('.curtain').addClass('visible');
  $('body').append(`
  <div class="card modal-card" style="scale: 97%">
    <img src=${card.children[0].src} class="card-img-top" alt="image-of-food">  
    <div class="card-body" style="display: block;">
    <div class="likes"><div><button class="like-btn"><i class="bi bi-hand-thumbs-up"></i></button> <span>${card.dataset.numberoflikes}</span></div>
       </div>
      <h4 class="card-title">${card.children[1].children[0].textContent}</h4>
      <p class="card-ingredient" style="white-space: pre-wrap;">${card.children[1].children[1].textContent}</p>
      <p class="card-text" style="white-space: pre-wrap;">${card.children[1].children[2].textContent} </p>
    </div>
  </div>`)
  if (card.dataset.mylike == '1') {
    $($('.like-btn')[0].children[0]).addClass('blue');
  }

  $('.modal-card').animate(
    {scale: '100%'}, 100, 'linear')
})

$(document).on('click', '.like-btn', function() {
  if (JSON.parse(window.localStorage.getItem('isLoggedin'))) {
    if (card.dataset.mylike < 1) {
  card.dataset.numberoflikes = parseInt(card.dataset.numberoflikes) + 1;
  $('.likes span')[0].textContent = card.dataset.numberoflikes;
  $('.like-list').append(`<li><button class="find-card-btn"><span class="invisible">${card.dataset.index}</span> <span>${card.children[1].children[0].textContent}</span></button></li>`)
  card.dataset.mylike = parseInt(card.dataset.mylike) + 1;
  $($('.like-btn')[0].children[0]).addClass('blue');

}
}
})

$('.container-of-like').click(function() {
  $('.like-list').toggleClass('visible');
  $(this).toggleClass('blue');
})

$(document).on('click', '.find-card-btn', function() {
    for (const card of $('.food-card')) {
      if (this.children[0].textContent === card.dataset.index ) {
        $('body').addClass('overflow-hidden');
        $('.curtain').addClass('visible');
        $('body').append(`
        <div class="card modal-card" style="scale: 97%">
          <img src=${card.children[0].src} class="card-img-top" alt="image-of-food">  
          <div class="card-body" style="display: block;">
          <div class="likes"><div><button class="like-btn"><i class="bi bi-hand-thumbs-up"></i></button> <span>${card.dataset.numberoflikes}</span></div>
            </div>
            <h4 class="card-title">${card.children[1].children[0].textContent}</h4>
            <p class="card-ingredient" style="white-space: pre-wrap;">${card.children[1].children[1].textContent}</p>
            <p class="card-text" style="white-space: pre-wrap;">${card.children[1].children[2].textContent} </p>
          </div>
        </div>`)
        $($('.like-btn')[0].children[0]).addClass('blue');

        $('.modal-card').animate(
          {scale: '100%'}, 100, 'linear')
        break;
      }
    }
  
})

$(document).on('click', '.search-btn', function() {

  for (const card of $('.food-card')) {
    
    if ($('.search-input')[0].value === card.children[1].children[0].textContent) {
      $('body').addClass('overflow-hidden');
      $('.curtain').addClass('visible');
      $('body').append(`
      <div class="card modal-card" style="scale: 97%">
        <img src=${card.children[0].src} class="card-img-top" alt="image-of-food">  
        <div class="card-body" style="display: block;">
        <div class="likes"><div><button class="like-btn"><i class="bi bi-hand-thumbs-up"></i></button> <span>${card.dataset.numberoflikes}</span></div>
          </div>
          <h4 class="card-title">${card.children[1].children[0].textContent}</h4>
          <p class="card-ingredient" style="white-space: pre-wrap;">${card.children[1].children[1].textContent}</p>
          <p class="card-text" style="white-space: pre-wrap;">${card.children[1].children[2].textContent} </p>
        </div>
      </div>`)
      if (card.dataset.mylike == 1) {
        $($('.like-btn')[0].children[0]).addClass('blue');
      }

      $('.modal-card').animate(
        {scale: '100%'}, 100, 'linear')

      $('.search-input').val("")
      $('.searchBox').removeClass('active')
      return
    }
    
  }
  $('.search-input').val("")
  alert('매칭하는 레시피가 없습니다.')
})

$('.curtain').click(function () {
    removeModals();
})

function searchInputVisible() {
  $('.search-input').toggleClass('visible')
}

function previewFile() {
  let file = document.getElementById('inputImg').files[0];
  let reader = new FileReader();

  if (file) {
      reader.readAsDataURL(file);

}

  reader.onload = function () {
      imgUrl = reader.result;  
  };
}

$(document).on('click', '.add-card-btn', function() {
  $('.add-modal-card').addClass('visible')
  $('.curtain').addClass('visible');
  $('body').addClass('overflow-hidden');
  slideIndex = this.dataset.countryindex;

  $(document).on('click', '.confirm-add-card-btn', function() {
    if ($('#modal-name').val().length > 0 &&  $('#modal-ingredient').val().length > 0 && $('#modal-text').val().length > 0 ) {
    $(`.all-lists-grid-container`).append(`
    <div class="card food-card" data-mylike="0" data-index="${index++}" data-numberoflikes="0">
      <img
        src= ${imgUrl}
        class="card-img-top"
        alt="image-of-food"
      />

      <div class="card-body">
        <a href="./detail.html" class="card-title">${$('#modal-name').val()}<i class="bi bi-arrow-right"></i></a>
        <p class="card-ingredient">준비재료: ${$('#modal-ingredient').val()}</p>
        <p class="card-text">${$('#modal-text').val()}
        </p>
      </div>
    </div>
  `)
  $('#modal-img').val("")
  $('#modal-name').val("")
  $('#modal-ingredient').val("")
  $('#modal-text').val("")

  removeModals();
    }
  })
})

  
  $(document).on('mouseenter', '.food-card', function() {
    if (window.innerWidth <= 768) {
        $(this).animate(
            {scale: '105%'}, 200, 'swing')
            return
      }
   
    $(this).animate(
      {scale: '110%'}, 200, 'swing')
      
  })
  
  $(document).on('mouseleave', '.food-card', function() {
    $(this).animate(
      {scale: '100%'}, 200, 'swing')
  })
  








