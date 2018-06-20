function init ( )
{
  timeDisplay = document.createTextNode ( "" );
  document.getElementById("clock").appendChild ( timeDisplay );
}

function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " ";

  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;}
  
  

  //DATE

(function () {

  var current = new Date();

  var hours_hand = document.getElementById('hours'),
    minutes_hand = document.getElementById('minutes'),
    seconds_hand = document.getElementById('seconds'),
    date = document.getElementById('date');

  var DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function display_date(moment) {

    var dayOfWeek = moment.getDay(),
      month = moment.getMonth(),
      year = moment.getFullYear(),
      day = moment.getDate();

    dayOfWeek = DaysOfWeek[dayOfWeek];
    month = Months[month];

    switch (day) {
      case 1:
        day = day + "st";
        break;
      case 2:
        day = day + "nd";
        break;
      case 3:
        day = day + "rd";
        break;
      case 21:
        day = day + "st";
        break;
      case 22:
        day = day + "nd";
        break;
      case 23:
        day = day + "rd";
        break;
      case 31:
        day = day + "st";
        break;
      default:
        day = day + "th";
    }

    var currentDate = dayOfWeek + ", " + month + " " + day + " " + year;

    date.innerHTML = currentDate;
  }

  display_date(current);

  clock(current);

  window.setInterval(function () {

    var now = new Date();

    clock(now);
    display_date(now);

  }, 1000);

}());