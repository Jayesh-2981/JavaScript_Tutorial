// Exercise 4 - Digital Clock

/*
Create a Digital Seconds clock using setInterval and Date object in JavaScript.
The Date object can be used to get the date time, hours, minutes and seconds which can then be updated using setInterval.
Try to keep the UI good looking
*/

// Solution =>

setInterval(() => {
  let date = new Date();

  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  let d = date.toLocaleDateString("en-us", options);
  time.innerHTML = d;
}, 1000);
