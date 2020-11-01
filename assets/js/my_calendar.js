
  myEvents_News = [
    {
      id: "required-id-1",
      name: "New videos uploaded",
      date: "Tue Nov 10 2020 16:30:31 GMT+0100 (Central European Time)",
      type: "event",
    },
    {
      id: "required-id-2",
      name: "New topic added",
      date: "Mon Nov 16 2020 10:21:19 GMT+0100 (Central European Time)",
      type: "event",
      color: "#ffc107"
    },
    {
      id: "required-id-3",
      name: "New messages in the forum",
      date: "Thu Nov 19 2020 20:54:03 GMT+0100 (Central European Time)",
      type: "event",
      color: "#3ca8ff"
    }
    // more events here
  ],

  myEvents_Events = [
    {
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
    // more events here
  ],

    $(document).ready(function () {
      $('#calendar_news').evoCalendar({
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
        calendarEvents: myEvents_News,
      })
    });

    $(document).ready(function () {
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
