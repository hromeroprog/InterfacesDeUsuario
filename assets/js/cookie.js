


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
    //myCookies["_uage"] = document.getElementById("age").value.toString();

    //Start Reuseable Section
   // document.cookie = "";
    //var expiresAttrib = new Date(Date.now()+60*1000).toString();
    var cookieString = "";

    var date = new Date();
    date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();

    for (var key in myCookies) {
        //  cookieString = key+"="+myCookies[key]+expires+"; path=/";
        cookieString = key + "=" + myCookies[key] + expires;
        document.cookie = cookieString;
    }
    //End Reuseable Section
    document.getElementById("out").innerHTML = document.cookie;
}

function loadCookies() {
    //Start Reuseable Section
    myCookies = {};
    var kv = document.cookie.split(";");
    for (var id in kv) {
        var cookie = kv[id].split("=");
        myCookies[cookie[0].trim()] = cookie[1];
    }
    //End Reuseable Section
    document.getElementById("register_user").value = myCookies["_user"];
    document.getElementById("register_nia").value = myCookies["_nia"];
    document.getElementById("register_password").value = myCookies["_password"];
    document.getElementById("register_first_name").value = myCookies["_name"];
    document.getElementById("register_last_name").value = myCookies["_lastname"];
    document.getElementById("register_email").value = myCookies["_email"];
    document.getElementById("register_dni").value = myCookies["_dni"];
    document.getElementById("register_date").value = myCookies["_date"];
    document.getElementById("rol").value = myCookies["_rol"];
    document.getElementById("grade").value = myCookies["_grade"];
    document.getElementById("language").value = myCookies["_language"];

    //document.getElementById("user").value = myCookies["_user"];
    //document.getElementById("age").value = myCookies["_uage"];
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    // document.cookie = name+"="+value+expires+"; path=/";
    document.cookie = name + "=" + value + expires;
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function EraseAllCookie() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var kv = decodedCookie.split(';');
    for (var id in kv) {
        var cookie = kv[id].split("=");
        createCookie(cookie[0].trim(), "", -10);
    }
}

function eraseCookie(name) {
    createCookie(name, "", -1);
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

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}

function checkLogin() {
    var email = getCookie("_email");
    var password = getCookie("_password");
    var newemail = document.getElementById("login_email").value;
    var newpassword = document.getElementById("login_password").value;

    if ((newemail == email) && (newpassword == password)){
        return true;
    } else {
        document.getElementById("user_confirmation").innerHTML = "Wrong email or password"+email+password;
        return false;
        }
    
}

function checkCookieStudent() {
    var role = getCookie("_rol");
    if (role == "student") {
        return true;
    } else {
        return false;
    }
}

function checkCookieProfesor() {
    var role = getCookie("_rol");
    if (role == "teacher") {
        return true;
    } else {
        return false;
    }
}

$(document).ready(function () {
    if ($("#myform").valid()) {
        saveCookies();
    }
});