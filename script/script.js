//Login va cambiando de login a register
$(document).ready(function() {

    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');

    $("#log-login-show").click(function() {

        $('.register-info-box').fadeOut();
        $('.login-info-box').fadeIn();

        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');

    });

    $("#log-login-show-movil").click(function() {

        $('.register-info-box').fadeOut();
        $('.login-info-box').fadeIn();

        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');

    });

    $("#log-reg-show").click(function() {

        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();

        $('.white-panel').removeClass('right-log');

        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');

    });
    $("#log-reg-show-movil").click(function() {

        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();

        $('.white-panel').removeClass('right-log');

        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');

    });
});

//Operaciones para entrar en la pagina
//Registrarse en la pagina web
function RegisterFunction() {
    var $registerForm = $("#register_form");
    if ($registerForm.valid()) {
        saveCookies();
        UsernameFunction();
        RolFunction();
        ResetForm();
        ResetLogin();
        document.getElementById("log-login-show").checked = true;
        document.getElementById("login_page").style.display = "none";
        document.getElementById("main_page").style.display = "block";
        document.getElementById("footer_main").style.display = "flex";

    }
}

//Entrar en la pagina por el login
function LoginFunction() {
    var $loginForm = $("#login_form");
    if ($loginForm.valid()) {
        if (checkLogin()) {
            document.getElementById("login_page").style.display = "none";
            document.getElementById("main_page").style.display = "block";
            document.getElementById("footer_main").style.display = "flex";
            UsernameFunction();
            RolFunction();
            ResetForm();
            ResetLogin();
        }

    }
}

//Salir de la pagina al formulario
function LogOutFunction() {
    if (confirm('Are you sure you want to Logout?')) {
        window.location.reload();
    }
}

//Saber que rol es
function RolFunction() {
    var rol = getCookie("_rol");
    var student = "student";
    if (student == rol) {
        document.getElementById("my_students").style.display = "none";
        document.getElementById("my_students_movil").style.display = "none";
        document.getElementById("grades_teacher").style.display = "none";
    } else {
        document.getElementById("my_courses").style.display = "none";
        document.getElementById("my_courses_movil").style.display = "none";
        document.getElementById("grades_student").style.display = "none";
    }

}

//Poner el nombre del usuario en el menu y en las notas
function UsernameFunction() {
    var username = getCookie("_user");
    document.getElementById("user_name_menu").innerHTML = username;
    document.getElementById("user_grade").innerHTML = username;
}

//Borrar todo el form del registro
function ResetForm() {
    document.getElementById("register_form").reset();
}

//Borrar todo el form del login
function ResetLogin() {
    document.getElementById("login_form").reset();
}

//Aparezca el grade si se elige ser estudiante
function RolChange() {
    var x = document.getElementById("rol").value;
    var student = "student";

    if (x == student) {
        document.getElementById('grade_box').style.display = 'block';
    } else {
        document.getElementById('grade_box').style.display = 'none';
    }
}

//El burguer para el movil
function MenuMovil() {
    var hamburger = document.querySelector(".hamburger");
    var x = document.getElementById("nav-bar-movil");

    if (hamburger.classList.contains('is-active')) {
        x.style.display = "none";
        hamburger.classList.remove('is-active');
    } else {
        hamburger.classList.add("is-active");
        x.style.display = "block";
    }

};

/*Si se selecciona la pantalla desaparece el menu*/
window.addEventListener('click', function(e) {
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
window.addEventListener('resize', function(e) {
    var w = document.documentElement.clientWidth;
    var nav_movil = document.getElementById("nav-bar-movil");
    var hamburger = document.querySelector(".hamburger");
    if (w >= "601") {
        nav_movil.style.display = "none";
        hamburger.classList.remove('is-active');
    }

});

//Operaciones de cookie
var myCookies = {};

function saveCookies() {
    myCookies["_user"] = document.getElementById("register_user").value;
    myCookies["_nia"] = document.getElementById("register_nia").value;
    myCookies["_password"] = document.getElementById("register_password").value;
    myCookies["_name"] = document.getElementById("register_first_name").value;
    myCookies["_lastname"] = document.getElementById("register_last_name").value;
    myCookies["_email"] = document.getElementById("register_email").value;
    myCookies["_dni"] = document.getElementById("register_dni").value;
    myCookies["_date"] = document.getElementById("register_date").value;
    myCookies["_rol"] = document.getElementById("rol").value;
    myCookies["_grade"] = document.getElementById("grade").value;
    myCookies["_language"] = document.getElementById("language").value;

    var cookieString = "";
    var date = new Date();
    date.setTime(date.getTime() + (4 * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();

    for (var key in myCookies) {
        cookieString = key + "=" + encodeURIComponent(myCookies[key]) + expires + "; path=/";
        document.cookie = cookieString;
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Comprobar que el login es correcto
function checkLogin() {
    var email = getCookie("_email");
    var password = getCookie("_password");
    var newemail = document.getElementById("login_email").value;
    var newpassword = document.getElementById("login_password").value;

    if ((newemail == email) && (newpassword == password)) {
        return true;
    } else if ((newemail == email) && (newpassword != password)) {
        document.getElementById("user_confirmation").innerHTML = "Wrong password";
        return false;
    } else if ((newemail != email)) {
        document.getElementById("user_confirmation").innerHTML = "Email " + newemail + " is not registered";
        return false;
    }
}

//Calendario

//Eventos de New Events
myEvents_Events = [{
            id: "required-id-01",
            name: "Assignment due date",
            date: "Fri Nov 27 2020 23:59:00 GMT+0100 (Central European Time)",
            type: "event",
        },
        {
            id: "required-id-02",
            name: "Group meeting",
            date: "Tue Dec 15 2020 11:30:00 GMT+0100 (Central European Time)",
            type: "event",
            color: "#ffc107"
        },
        {
            id: "required-id-03",
            name: "Exam topic 1",
            date: "Mon Nov 30 2020 9:00:00 GMT+0100 (Central European Time)",
            type: "event",
            color: "#3ca8ff"
        }
    ],

    $(document).ready(function() {
        $('#calendar_events').evoCalendar({
            format: 'MM dd, yyyy',
            language: 'en',
            theme: 'Midnight Blue',
            titleFormat: 'MM',
            eventHeaderFormat: 'MM dd',
            firstDayOfWeek: 0, // Sun//
            todayHighlight: true,
            sidebarDisplayDefault: true,
            sidebarToggler: true,
            eventDisplayDefault: true,
            eventListToggler: true,
            calendarEvents: myEvents_Events,
        })
    });


//Validacion del form Jquery

$().ready(function() {

    var $registerForm = $("#register_form");

    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    });

    $.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[0-9a-z]+$/i.test(value);
    });

    $.validator.addMethod("iquallength", function(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length == param;
    });

    $.validator.addMethod("nia_start", function(value, element) {
        return this.optional(element) || /^100.*$/i.test(value);
    });

    $.validator.addMethod("dnivalid", function(value, element) {
        return this.optional(element) || /^[0-9]{8}[A-Z]{1}$/i.test(value);
    });


    $.validator.addMethod("email_register", function(value, element) {
        var email_register = getCookie("_email");
        //  var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || value != email_register;
    });

    if ($registerForm.length) {

        $registerForm.validate({
            rules: {
                user: "required",

                nia: {
                    required: true,
                    digits: true,
                    nia_start: true,
                    iquallength: 9
                },

                password: {
                    required: true,
                    alphanumeric: true,
                    maxlength: 8
                },

                confirm_password: {
                    required: true,
                    alphanumeric: true,
                    maxlength: 8,
                    equalTo: "#register_password"
                },

                first_name: {
                    required: true,
                    lettersonly: true
                },

                last_name: {
                    required: true,
                    lettersonly: true
                },

                email: {
                    required: true,
                    email: true,
                    email_register: true
                },

                date: {
                    required: true,
                },

                dni: {
                    required: true,
                    dnivalid: true
                },

                rol: {
                    required: true
                },

                grade: {
                    required: true
                },

                university: "required",

                terms: "required"
            },
            messages: {
                user: "User is required",

                nia: {
                    required: "NIA is required",
                    digits: "Please enter VALID NIA, just numbers",
                    nia_start: "NIA must start with 100",
                    iquallength: "Please enter VALID NIA, just 9 characters"
                },

                password: {
                    required: "Password is required",
                    alphanumeric: "Letters and numbers only please",
                    maxlength: "Please enter VALID Password, max 8 characters"
                },

                confirm_password: {
                    required: "Password is required",
                    alphanumeric: "Letters and numbers only please",
                    maxlength: "Please enter VALID Password, max 8 characters",
                    equalTo: "Please enter the same password as above"
                },

                first_name: {
                    required: "First name is required",
                    lettersonly: "Letters only please"
                },

                last_name: {
                    required: "Last name is required",
                    lettersonly: "Letters only please"
                },

                email: {
                    required: "Email address is required",
                    email: "Your email address must be in the format of name@domain.extension",
                    email_register: "Email is already registered"
                },

                date: {
                    required: "Birthdate is required"
                },

                dni: {
                    required: "Enter DNI is required",
                    dnivalid: "Your dni must be in the format 12345678A"
                },

                rol: {
                    required: "Select a Rol is required"
                },

                grade: {
                    required: "Select a Rol is required"
                },

                university: "University Name is required",

                terms: "Please accept our Terms and Conditions"
            },
        })
    };

    var $loginForm = $("#login_form");

    if ($loginForm.length) {
        $loginForm.validate({
            rules: {
                password: {
                    required: true,
                    alphanumeric: true,
                    maxlength: 8
                },

                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                password: {
                    required: "Password is required",
                    alphanumeric: "Letters and numbers only please",
                    maxlength: "Please enter VALID Password, max 8 characters"
                },

                email: {
                    required: "Email address is required",
                    email: "Enter a VALID email address"
                },
            }
        });

    }

});

//Main que va cambiando segun los botones de la pagina
$(document).ready(function() {
    $(".student_button").click(function() {
        $(".list_students").show();
        $(".principal_page").hide();
        $(".list_forum").hide();
        $(".list_grades").hide();
        $(".refences").hide();
        $(".forum_topics .forum_topic").hide()
        $(".forum_topics .forum_topic .topic_discussion .form").hide();

    });

    $(".mycourses_button").click(function() {
        $(".list_courses").show();
        $(".principal_page").hide();
        $(".list_forum").hide();
        $(".list_grades").hide();
        $(".refences").hide();
        $(".forum_topics .forum_topic").hide()
        $(".forum_topics .forum_topic .topic_discussion .form").hide();
    });

    $(".forum_button, .forum_topic_back").click(function() {
        $(".list_forum").show();
        $(".principal_page").hide();
        $(".list_students").hide();
        $(".list_grades").hide();
        $(".list_courses").hide();
        $(".refences").hide();
        $(".forum_topics .forum_topic").hide()
        $(".forum_topics .forum_topic .topic_discussion .form").hide();
    });

    $(".grades_button").click(function() {
        $(".list_grades").show();
        $(".principal_page").hide();
        $(".list_forum").hide();
        $(".list_students").hide();
        $(".list_courses").hide();
        $(".refences").hide();
        $(".forum_topics .forum_topic").hide()
        $(".forum_topics .forum_topic .topic_discussion .form").hide();
    });

    $(".main_button").click(function() {
        $(".principal_page").show();
        $(".list_students").hide();
        $(".list_forum").hide();
        $(".list_grades").hide();
        $(".list_courses").hide();
        $(".refences").hide();
        $(".forum_topics .forum_topic").hide()
        $(".forum_topics .forum_topic .topic_discussion .form").hide();

    });

    $(".logo,#bug_report").click(function() {
        $(".principal_page").show();
        $(".container").show();
        $(".list_students").hide();
        $(".list_forum").hide();
        $(".list_grades").hide();
        $(".list_courses").hide();
        $(".refences").hide();
        $(".contact-main").hide();
        $(".copyright-main").hide();
        $(".privacy-main").hide();
        $(".forum_topics .forum_topic").hide()
        $(".forum_topics .forum_topic .topic_discussion .form").hide();
    });


    $(".reference_button").click(function() {
        $(".refences").show();
        $(".container").show();
        $(".list_students").hide();
        $(".list_forum").hide();
        $(".list_grades").hide();
        $(".list_courses").hide();
        $(".principal_page").hide();
        $(".contact-main").hide();
        $(".copyright-main").hide();
        $(".privacy-main").hide();
        $(".forum_topics .forum_topic").hide()
        $(".forum_topics .forum_topic .topic_discussion .form").hide();
    });

    $(".contact_button").click(function() {
        $(".contact-main").show();
        $(".container").hide();
        $(".copyright-main").hide();
        $(".privacy-main").hide();
        $(".forum_topics .forum_topic").hide()
        $(".forum_topics .forum_topic .topic_discussion .form").hide();
    });

    $(".copyright_button").click(function() {
        $(".copyright-main").show();
        $(".container").hide();
        $(".contact-main").hide();
        $(".privacy-main").hide();
        $(".forum_topics .forum_topic").hide()
        $(".forum_topics .forum_topic .topic_discussion .form").hide();
    });

    $(".privacy_button").click(function() {
        $(".privacy-main").show();
        $(".container").hide();
        $(".contact-main").hide();
        $(".copyright-main").hide();
        $(".forum_topics .forum_topic").hide()
        $(".forum_topics .forum_topic .topic_discussion .form").hide();
    });


    //EXPORT TO EXCEL
    $("#export_grades_student").unbind().click(function() {
        $("#grades_student .table_grades").table2excel({
            exclude: ".noExl",
            name: "Worksheet Name",
            filename: "theory_of_errors_grades_studentFormat",
            fileext: ".xls"
        });
    });

    $("#export_grades_teacher").unbind().click(function() {
        $("#grades_teacher .table_grades").table2excel({
            exclude: ".noExl",
            name: "Worksheet Name",
            filename: "theory_of_errors_grades_teacherFormat",
            fileext: ".xls"
        });
    });

    //EMAIL STUDENT
    $(".student .message i").unbind().click(function() {
        var email = $(this).parent().prev().text();
        var emailto = "mailto:" + email;
        window.location = emailto;
    });

    //FORUM
    //switch page
    $(".table_forum tbody tr").unbind().click(function() {
        $(".list_forum").hide();

        var topic = $(this).children().first().text();
        var topic_id = "#" + topic.replaceAll(" ", "_");
        $(topic_id).show();
    });

    //show message poster
    $(".forum_topic .new_post").unbind().click(function() {
        $(this).parent().children("div.topic_discussion").children("div.form").fadeToggle();
    });

    //post message
    $(".forum_topic .topic_discussion .form button").unbind().click(function() {
        var message = $(this).prev().val();
        var date = new Date($.now());
        //date format example MON, october 5th 2020, 19:40
        var formatted_date = getCorrectFormat(date);
        var image_source = "./images/default-user.png";

        var author = getCookie("_name").toUpperCase() + " " + getCookie("_lastname").toUpperCase();
        var html_to_inyect = '<div class = "topic_message"><p>' + message + '</p><img class = "author_pic" src="' + image_source + '" alt="Imagen de DEFAULT"/><h3 class = "author">' + author + '</h3><h3 class = "date">' + formatted_date + '</h3></div>';

        var object_topic_message = $(this).parent();
        $(this).prev().val("");
        $(object_topic_message).after(html_to_inyect);

        //cambiar "ultima fecha del topic"
        var changed_post = $(this).parent().parent().parent().attr('id');
        var changed_topic_id = "#" + changed_post + "_TOPIC";
        $(changed_topic_id).children().last().html(formatted_date);

        //cambiar "numero de mensajes del topic"
        var topic_messages = $(changed_topic_id).children("td.num-message");
        var num_messages = parseInt(topic_messages.text());
        num_messages++;
        topic_messages.html(num_messages);
    });
});

//FUNCIONES PARA EL FORMATO DE LA FECHA
function getCorrectFormat(date) {
    var day_of_week = getWeekDay(date);
    var month = getMonth(date);
    var day_of_month = date.getDate();
    var ordinal = getOrdinal(day_of_month);
    var year = date.getFullYear();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    if (parseInt(minutes) < 10) {
        minutes = "0" + minutes;
    }
    var result = day_of_week + ", " + month + " " + day_of_month + ordinal + " " + year + ", " + hour + ":" + minutes;
    return result;
}

function getOrdinal(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

function getWeekDay(date) {
    var weekdays = new Array(
        "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
    );
    var day = date.getDay();
    return weekdays[day];
}

function getMonth(date) {
    var months = new Array(
        "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"
    );
    var month = date.getMonth();
    return months[month];
}

// FIN FUNCIONES PARA EL FORMATO DE LA FECHA

//Modal Calendar
$(document).ready(function() {
    // Get the modal
    var modal = document.getElementById("myModal");
    var modal1 = document.getElementById("myModal1");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    var btn1 = document.getElementById("myBtn1");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span1 = document.getElementsByClassName("close")[1];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }
    btn1.onclick = function() {
        modal1.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    span1.onclick = function() {
        modal1.style.display = "none";
    }


    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }

        if (event.target == modal1) {
            modal1.style.display = "none";

        }
    });



});