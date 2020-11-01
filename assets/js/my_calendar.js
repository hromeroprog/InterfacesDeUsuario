
  myEvents = [
    {
      id: "required-id-1",
      name: "New Year",
      date: "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
      type: "holiday",
      everyYear: true
    },
    {
      id: "required-id-2",
      name: "Valentine's Day",
      date: "Fri Feb 14 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
      type: "holiday",
      everyYear: true,
      color: "#222"
    },
    {
      id: "required-id-3",
      name: "Custom Date",
      badge: "08/03 - 08/05",
      date: ["August/03/2020", "August/05/2020"],
      description: "Description here",
      type: "event",
    },
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
    },
    {
      id: 'kNybja6',
      name: 'Mom\'s Birthday',
      description: 'Lorem ipsum dolor sit..',
      date: 'October 27, 2020',
      type: 'birthday'
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
        firstDayOfWeek: 0, // Sun// 0-6 (Sun-Sat)
        todayHighlight: true,
        sidebarDisplayDefault: true,
        sidebarToggler: true,
        eventDisplayDefault: true,
        eventListToggler: true,
        calendarEvents: myEvents,
      })
    });
