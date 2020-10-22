$(document).ready(function(){
    $(".student_button").click(function(){
        $(".list_students").show();
        $(".principal_page").hide();
        $(".list_forum").hide();
        $(".list_grades").hide();
    });

    $(".forum_button").click(function(){
        $(".list_forum").show();
        $(".principal_page").hide();
        $(".list_students").hide();
        $(".list_grades").hide();
    });

    $(".grades_button").click(function(){
        $(".list_grades").show();
        $(".principal_page").hide();
        $(".list_forum").hide();
        $(".list_students").hide();
      });

      $(".main_button").click(function(){
        $(".principal_page").show();
        $(".list_students").hide();
        $(".list_forum").hide();
        $(".list_grades").hide();
      });
  });

