
function RegisterRunction() {
    var $registerForm = $("#register_form");
    if ($registerForm.valid()){
      document.getElementById("login_page").style.display = "none";
            document.getElementById("main_page").style.display = "block";
            saveCookies(); //in cookie js

            
    }
}

function registre(){
    document.getElementById('login_page').style.display='none';
    document.getElementById('main_page').style.display='block';
}

function ResetForm() {
  document.getElementById("register_form").reset();
}

function RolChange() {
  var x = document.getElementById("rol").value;
  var student = "student";

  if(x == student){
  document.getElementById('grade_box').style.display='block';
}
else{
    document.getElementById('grade_box').style.display='none';
}
}