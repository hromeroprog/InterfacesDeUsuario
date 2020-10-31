
$(document).ready(function () {
  $('.login-info-box').fadeOut();
  $('.login-show').addClass('show-log-panel');

  $('.login-panel input[type="radio"]').on('change', function () {
    if ($('#log-login-show').is(':checked')) {
      $('.register-info-box').fadeOut();
      $('.login-info-box').fadeIn();

      $('.white-panel').addClass('right-log');
      $('.register-show').addClass('show-log-panel');
      $('.login-show').removeClass('show-log-panel');

    }
    else if ($('#log-reg-show').is(':checked')) {
      $('.register-info-box').fadeIn();
      $('.login-info-box').fadeOut();

      $('.white-panel').removeClass('right-log');

      $('.login-show').addClass('show-log-panel');
      $('.register-show').removeClass('show-log-panel');
    }
  });


  document.getElementById('rol').addEventListener('change', function (e) {
    if (e.target.value === "student") {
      $("#grade_box").show();
    }
    else {
      $("#grade_box").hide();
    }
  });

  /*
  let inputFile = document.getElementById('file-input');
  let fileNameField = document.getElementById('file-name');
  inputFile.addEventListener('change',function(event){
      let uploadedFileName = event.target.files[0].name;
      fileNameField.textContent = uploadedFileName;
  });
  */

  $('#reset_button').click(function () {
    $('#register_form')[0].reset();
  });

  $("register_form").submit(function () {
    alert("Submitted");
  });

  $("login_form").submit(function () {
    alert("Submitted");
  });



});