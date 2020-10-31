
$().ready(function () {

    var $registerForm = $("#register_form");

    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    });

    $.validator.addMethod("alphanumeric", function (value, element) {
        return this.optional(element) || /^[0-9a-z]+$/i.test(value);
    });

    $.validator.addMethod("iquallength", function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length == param;
    });

    $.validator.addMethod("nia_start", function (value, element) {
        return this.optional(element) || /^100.*$/i.test(value);
    });

    $.validator.addMethod("dnivalid", function (value, element) {
        return this.optional(element) || /^[0-9]{8}[A-Z]{1}$/i.test(value);
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
                    email: true
                },

                date: {
                    required: true,
                },

                dni: {
                    required: true,
                    dnivalid:true
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
                    email: "Your email address must be in the format of name@domain.extension"
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





