$(document).ready(function () {
  $(".student_button").click(function () {
    $(".list_students").show();
    $(".principal_page").hide();
    $(".list_forum").hide();
    $(".list_grades").hide();
    $(".refences").hide();
  });

  $(".mycourses_button").click(function () {
    $(".list_courses").show();
    $(".principal_page").hide();
    $(".list_forum").hide();
    $(".list_grades").hide();
    $(".refences").hide();
  });

  $(".forum_button").click(function () {
    $(".list_forum").show();
    $(".principal_page").hide();
    $(".list_students").hide();
    $(".list_grades").hide();
    $(".list_courses").hide();
    $(".refences").hide();
  });

  $(".grades_button").click(function () {
    $(".list_grades").show();
    $(".principal_page").hide();
    $(".list_forum").hide();
    $(".list_students").hide();
    $(".list_courses").hide();
    $(".refences").hide();
  });

  $(".main_button").click(function () {
    $(".principal_page").show();
    $(".list_students").hide();
    $(".list_forum").hide();
    $(".list_grades").hide();
    $(".list_courses").hide();
    $(".refences").hide();

  });

  $(".logo").click(function () {
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
  });


  $(".reference_button").click(function () {
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
  });

  $(".contact_button").click(function () {
    $(".contact-main").show();
    $(".container").hide();
    $(".copyright-main").hide();
    $(".privacy-main").hide();
  });

  $(".copyright_button").click(function () {
    $(".copyright-main").show();
    $(".container").hide();
    $(".contact-main").hide();
    $(".privacy-main").hide();
  });

  $(".privacy_button").click(function () {
    $(".privacy-main").show();
    $(".container").hide();
    $(".contact-main").hide();
    $(".copyright-main").hide();
  });


  //EXPORT TO EXCEL
  $("#export_grades_student").unbind().click(function () {
    $("#grades_student .table_grades").table2excel({
      exclude: ".noExl",
      name: "Worksheet Name",
      filename: "theory_of_errors_grades_studentFormat",
      fileext: ".xls"
    });
  });

  $("#export_grades_teacher").unbind().click(function () {
    $("#grades_teacher .table_grades").table2excel({
      exclude: ".noExl",
      name: "Worksheet Name",
      filename: "theory_of_errors_grades_teacherFormat",
      fileext: ".xls"
    });
  });

  //EMAIL STUDENT
  $(".student .message i").unbind().click(function () {
    var email = $(this).parent().prev().text();
    var emailto = "mailto:" + email;
    window.location = emailto;
  });

  //FORUM
  //switch page
  $(".table_forum tbody tr").unbind().click(function () {
    var topic = $(this).children().first().text();
    var topic_id = "#" + topic.replace(" ", "_");
    $(".list_forum").hide();
    $(topic_id).show();
  });
});

$(document).ready(function () {
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
  btn.onclick = function () {
    modal.style.display = "block";
  }
  btn1.onclick = function () {
    modal1.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
  span1.onclick = function () {
    modal1.style.display = "none";
  }


  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }

    if (event.target == modal1) {
      modal1.style.display = "none";

    }
  });

});
