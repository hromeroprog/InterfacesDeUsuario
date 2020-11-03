
function RegisterFunction() {
  var $registerForm = $("#register_form");
  if ($registerForm.valid()) {
    saveCookies(); //in cookie js  
    UsernameFunction();
    RolFunction();
    document.getElementById("login_page").style.display = "none";
    document.getElementById("main_page").style.display = "block";
    document.getElementById("footer_main").style.display = "flex";
  }
}

function LoginFunction() {
  var $loginForm = $("#login_form");
  if ($loginForm.valid()) {
    if (checkLogin()) {
      //MAs facil hacer funcion que compruebe estudiante o profesor
      document.getElementById("login_page").style.display = "none";
      document.getElementById("main_page").style.display = "block";
      document.getElementById("footer_main").style.display = "flex";
      UsernameFunction();
      RolFunction();
    }

  }
}

function LogOutFunction() {
  if (confirm('Are you sure you want to Logout?')) {
    window.location.reload();
  }
}

function RolFunction() {
  var rol = getCookie("_rol");
  var student = "student";
  if (student == rol) {
    document.getElementById("my_students").style.display = "none";
    document.getElementById("my_students_movil").style.display = "none";
    document.getElementById("grades_teacher").style.display = "none";
  }
  else {
    document.getElementById("my_courses").style.display = "none";
    document.getElementById("my_courses_movil").style.display = "none";
    document.getElementById("grades_student").style.display = "none";
  }

}


function UsernameFunction() {
  var username = getCookie("_user");
  document.getElementById("user_name_menu").innerHTML = username;
  document.getElementById("user_grade").innerHTML = username;
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

  if (x == student) {
    document.getElementById('grade_box').style.display = 'block';
  }
  else {
    document.getElementById('grade_box').style.display = 'none';
  }
}


function MenuMovil() {
  var hamburger = document.querySelector(".hamburger");
  var x = document.getElementById("nav-bar-movil");

  if (hamburger.classList.contains('is-active')) {
    x.style.display = "none";
    hamburger.classList.remove('is-active');
  }

  else {
    hamburger.classList.add("is-active");
    x.style.display = "block";
  }

};

/*Si se selecciona la pantalla desaparece el menu*/
window.addEventListener('click', function (e) {
  var nav_movil = document.getElementById("nav-bar-movil");
  var hamburger = document.querySelector(".hamburger");
  var hamburger_inner = document.querySelector(".hamburger-inner");
  var myLinks = document.getElementById("myLinks");
  if ((e.target.parentNode != hamburger) && (e.target != hamburger) && (e.target != hamburger_inner) && (e.target.parentNode != myLinks)) {
    nav_movil.style.display = "none";
    hamburger.classList.remove('is-active');
  }
});

/*Si se agranda la pantalla con el menu movil abierto este desaparece*/ 
window.addEventListener('resize', function (e) {
  var w = document.documentElement.clientWidth;
  var nav_movil = document.getElementById("nav-bar-movil");
  var hamburger = document.querySelector(".hamburger");
if(w >= "601"){
  nav_movil.style.display = "none";
  hamburger.classList.remove('is-active');
}

});


