

$().ready(function(){

    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-z]+$/i.test( value );
    });

    $.validator.addMethod( "alphanumeric", function( value, element ) {
        return this.optional( element ) ||  /^[0-9a-z]+$/i.test( value );
    });
    
    $.validator.addMethod( "iquallength", function( value, element,param ) {
        var length = $.isArray( value ) ? value.length : this.getLength( value, element );
		return this.optional( element ) || length == param;
    });


    $.validator.addMethod( "nia_start", function( value, element ) {
        return this.optional( element ) ||  /^100+$/i.test( value );
    });

    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg !== value;
       }, "Value must not equal arg.");
      

    jQuery(document).ready(function ($) {
        $("#login_form").validate({
        
        rules:{
            password:{
                required:true,
                alphanumeric: true,
                maxlength:8
                //Falta formato
            },
            email: {
                required:true,
                email:true
            },
        },

        messages: {
            password:{
                required:"Password is required",
                alphanumeric:"Letters and numbers only please",
                maxlength:"Please enter VALID Password, max 8 characters"
            },
            email: {
                required:"Email address is required",
                email:"Enter a VALID email address"
            },
    } 
        });
    });
    

    jQuery(document).ready(function ($) {
        $("#register_form").validate({
        
        rules:{
            user: "required",
            nia: {
                required:true,
                digits:true,
                nia_start:true,
                iquallength:9

                
            },
            password:{
                required:true,
                alphanumeric: true,
                maxlength:8
                //Falta formato
            },
            confirm_password:{
                required:true,
                alphanumeric:true,
                maxlength:8,
                equalTo:"#register_password"
            },
            first_name : {
                required: true,
                lettersonly:true
            },
            last_name : {
                required: true,
                lettersonly:true
        },
            //falta la imagen format: extension "jpg" etc..

            file1:{
              extension: "jpg|png|gif|bmp|tiff"  
            },
            email: {
                required:true,
                email:true
            },

            date : {
                required: true,
                date:true
            },
            dni : {
                required:true
                //falta formato
            },

            rol:{
                valueNotEquals: "default" 
            },

            grade:{
                valueNotEquals: "default" 
            },

            //falta rol y grade box

            university: "required",

            //falta lenguage

            terms : "required"
        },

        messages: {
            user: "User is required",
            nia: {
                required:"NIA is required",
                digits:"Please enter VALID NIA, just numbers",
                nia_start:"NIA must start with 100",
                iquallength: "Please enter VALID NIA, just 9 characters"
                
            },
            password:{
                required:"Password is required",
                alphanumeric:"Letters and numbers only please",
                maxlength:"Please enter VALID Password, max 8 characters"
            },
            confirm_password:{
                required:"Password is required",
                alphanumeric:"Letters and numbers only please",
                maxlength:"Please enter VALID Password, max 8 characters",
                equalTo:"Please enter the same password as above"
            },
            first_name : {
                required:"First name is required",
                lettersonly:"Letters only please" 
                
            },
            last_name : {
                required: "Last name is required",
                lettersonly:"Letters only please" 
            },
            
            file1:{
                extension: "Image has to be jpg|png|gif|bmp|tiff"  
              },

            email: {
                required:"Email address is required",
                email:"Enter a VALID email address"
            },

            date :{
            required: "Birthdate is required" 
        },
            
            dni : {
                required:"Enter DNI is required"
                //formato
        },

        rol: {
            valueNotEquals:"Select a Rol is required"
        },

        grade:{
            valueNotEquals:"Select a Rol is required"
        },

        university: "University Name is required",

            //falta lenguage

            terms : "Please accept our Terms and Conditions"
        
    } 
        });
    });
});


