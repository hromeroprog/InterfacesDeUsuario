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

  $(document).ready(function() {
    $('#calendar_news').evoCalendar({
        'format': 'MM dd, yyyy',
        'language': 'en',
        'theme': 'Midnight Blue',
        'titleFormat': 'MM',
        'eventHeaderFormat': 'MM dd',
        'firstDayOfWeek': 0, // Sun// 0-6 (Sun-Sat)
        'todayHighlight': true,
        'sidebarDisplayDefault': true,
        'sidebarToggler': true,
        'eventDisplayDefault': true,
        'eventListToggler': true,

    });


            // addCalendarEvent
$('#calendar_news').evoCalendar('addCalendarEvent', {
     id: 'kNybja6',
     name: 'Mom\'s Birthday',
     description: 'Lorem ipsum dolor sit..',
     date: 'October 27, 2020',
     type: 'birthday'
});
// add multiple events
$('#calendar_news').evoCalendar('addCalendarEvent', [
     {
          id: 'kNybja6',
          name: 'Mom\'s Birthday',
          date: 'October 27, 1965',
          type: 'birthday',
          everyYear: true // optional
     },
     {
          id: 'asDf87L',
          name: 'Graduation Day!',
          date: 'October 21, 2020',
          type: 'event'
     }
]);
});


//CAlendar events

$(document).ready(function() {
    $('#calendar_events').evoCalendar({
        'format': 'MM dd, yyyy',
        'language': 'en',
        'theme': 'Midnight Blue',
        'titleFormat': 'MM',
        'eventHeaderFormat': 'MM dd',
        'firstDayOfWeek': 0, // Sun// 0-6 (Sun-Sat)
        'todayHighlight': true,
        'sidebarDisplayDefault': true,
        'sidebarToggler': true,
        'eventDisplayDefault': true,
        'eventListToggler': true,

    });


            // addCalendarEvent
$('#calendar_events').evoCalendar('addCalendarEvent', {
     id: 'kNybja6',
     name: 'Mom\'s Birthday',
     description: 'Lorem ipsum dolor sit..',
     date: 'October 27, 2020',
     type: 'birthday'
});
// add multiple events
$('#calendar_events').evoCalendar('addCalendarEvent', [
     {
          id: 'kNybja6',
          name: 'Mom\'s Birthday',
          date: 'October 27, 1965',
          type: 'birthday',
          everyYear: true // optional
     },
     {
          id: 'asDf87L',
          name: 'Graduation Day!',
          date: 'October 21, 2020',
          type: 'event'
     }
]);
});

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
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

 window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }



