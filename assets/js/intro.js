
function RegisterFunction() {
    var $registerForm = $("#register_form");
    if ($registerForm.valid()){
            saveCookies(); //in cookie js  
            UsernameFunction();      
            document.getElementById("login_page").style.display = "none";
      document.getElementById("main_page").style.display = "block";
      document.getElementById("footer_main").style.display = "flex";  
    }
}

function LoginFunction(){
  var $loginForm = $("#login_form");
  if ($loginForm.valid()){
  if (checkLogin()){
    //MAs facil hacer funcion que compruebe estudiante o profesor
    document.getElementById("login_page").style.display = "none";
    document.getElementById("main_page").style.display = "block";
    document.getElementById("footer_main").style.display = "flex";
    UsernameFunction();
  }
  
  }
}

function LogOutFunction(){
  ResetForm();
  ResetLogin();
  document.getElementById("login_page").style.display = "block";
    document.getElementById("main_page").style.display = "none";
    document.getElementById("footer_main").style.display = "none";
}


function UsernameFunction(){
  var username = getCookie("_user");
  document.getElementById("user_name_menu").innerHTML = username;
}


function ResetForm() {
  document.getElementById("register_form").reset();
}

function ResetLogin() {
  document.getElementById("login_form").reset();
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