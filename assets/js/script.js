$(document).ready(function () {
  $(".student_button").click(function () {
    $(".list_students").show();
    $(".principal_page").hide();
    $(".list_forum").hide();
    $(".list_grades").hide();
    $(".refences").hide();
    $(".forum_topics .forum_topic").hide()
  });

  $(".mycourses_button").click(function () {
    $(".list_courses").show();
    $(".principal_page").hide();
    $(".list_forum").hide();
    $(".list_grades").hide();
    $(".refences").hide();
    $(".forum_topics .forum_topic").hide()
  });

  $(".forum_button").click(function () {
    $(".list_forum").show();
    $(".principal_page").hide();
    $(".list_students").hide();
    $(".list_grades").hide();
    $(".list_courses").hide();
    $(".refences").hide();
    $(".forum_topics .forum_topic").hide()
  });

  $(".grades_button").click(function () {
    $(".list_grades").show();
    $(".principal_page").hide();
    $(".list_forum").hide();
    $(".list_students").hide();
    $(".list_courses").hide();
    $(".refences").hide();
    $(".forum_topics .forum_topic").hide()
  });

  $(".main_button").click(function () {
    $(".principal_page").show();
    $(".list_students").hide();
    $(".list_forum").hide();
    $(".list_grades").hide();
    $(".list_courses").hide();
    $(".refences").hide();
    $(".forum_topics .forum_topic").hide()

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
    $(".forum_topics .forum_topic").hide()
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
    $(".forum_topics .forum_topic").hide()
  });

  $(".contact_button").click(function () {
    $(".contact-main").show();
    $(".container").hide();
    $(".copyright-main").hide();
    $(".privacy-main").hide();
    $(".forum_topics .forum_topic").hide()
  });

  $(".copyright_button").click(function () {
    $(".copyright-main").show();
    $(".container").hide();
    $(".contact-main").hide();
    $(".privacy-main").hide();
    $(".forum_topics .forum_topic").hide()
  });

  $(".privacy_button").click(function () {
    $(".privacy-main").show();
    $(".container").hide();
    $(".contact-main").hide();
    $(".copyright-main").hide();
    $(".forum_topics .forum_topic").hide()
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
    $(".list_forum").hide();

    var topic = $(this).children().first().text();
    var topic_id = "#" + topic.replaceAll(" ", "_");
    $(topic_id).show();
  });

  //post message
  $(".forum_topic .topic_discussion .form button").unbind().click(function () {
    var message = $(this).prev().val();
    var date = new Date($.now());
    //date format example MON, october 5th 2020, 19:40
    var formatted_date = getCorrectFormat(date);
    var image_source = "./assets/images/default-user.png";

    var author = getCookie("_name").toUpperCase() + " " + getCookie("_lastname").toUpperCase();
    var html_to_inyect = '<div class = "topic_message"><p>'+ message+'</p><img class = "author_pic" src="' + image_source+ '" alt="Imagen de DEFAULT"/><h3 class = "author">' + author + '</h3><h3 class = "date">' + formatted_date +'</h3></div>';

    var object_topic_message = $(this).parent();
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

function getCorrectFormat(date){
  var day_of_week = getWeekDay(date);
  var month = getMonth(date);
  var day_of_month = date.getDate();
  var ordinal = getOrdinal(day_of_month);
  var year = date.getFullYear();
  var hour = date.getHours();
  var minutes = date.getMinutes();

  var result = day_of_week + ", " + month + " " + day_of_month + ordinal + " " + year +", " + hour + ":" + minutes;
  return result;
}

function getOrdinal(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

function getWeekDay(date){
  var weekdays = new Array(
      "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
  );
  var day = date.getDay();
  return weekdays[day];
}

function getMonth(date){
  var months = new Array(
      "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"
  );
  var month = date.getMonth();
  return months[month];
}

// FIN FUNCIONES PARA EL FORMATO DE LA FECHA


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


