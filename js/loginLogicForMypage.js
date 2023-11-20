// 클래스명
// login-id
// login-pw
// login-button

// id, pw 로컬스토리지에 저장
window.localStorage.setItem("id", "aaaa");
window.localStorage.setItem("pw", "1111");
// 로그인 상태 로컬스토리지에 저장
// window.localStorage.setItem("isLoggedin", false);
if(JSON.parse(window.localStorage.getItem('isLoggendin'))){
  $('.login-text')[0].innerHTML = '<a href="/myPage2.html"><i class="bi bi-person-circle" style="font-size: 1.2rem;"></i></a>';
}


function cleanLoginInput () {
    $(".login-id").val("")
    $(".login-pw").val("")
}

$(".login-button").click(function () {

    if ($(".login-id").val().length === 0) {
        cleanLoginInput()
        return alert('아이디를 입력하세요!')
    }

    if ($(".login-pw").val().length === 0) {
        cleanLoginInput()
        return alert('비밀번호를 입력하세요!')
    }
  if ($(".login-id").val() !== window.localStorage.getItem('id')) {
    // .login-id의 value와 아이디가 아니라면
    
    // id를 입력하지 않았다면

    cleanLoginInput()
    return alert("아이디가 다릅니다.");
  }

  // 비밀번호가 아니라면
  if ( $(".login-pw").val() !== window.localStorage.getItem('pw')) {
    
    cleanLoginInput()
    return alert("아이디 혹은 비밀번호가 다릅니다.");
  }

  // 로그인 시
  window.localStorage.setItem("isLoggedin", true);
  cleanLoginInput()
  $('#exampleModal').removeClass('show');
  $('#exampleModal').css('display','none');
  $('#exampleModal').attr('aria-hidden','true');
  $('#exampleModal').removeAttr('role');
  $('#exampleModal').removeAttr('arid-modal');
  $('.modal-backdrop').remove();
  $('body').removeClass('modal-open');
  $('body').css('overflow', 'visible');
  $('.login-text')[0].innerHTML = '<i class="bi bi-person-circle" style="font-size: 1.2rem;"></i>';
  location.replace('/myPage2.html');

});
