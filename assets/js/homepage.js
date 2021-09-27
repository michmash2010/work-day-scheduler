var dateEl = document.querySelector("#currentDay");
var time = document.querySelector(".time-block").innerText.replace("AM", ":00am").replace("PM", ":00pm");
var descriptionEl = document.querySelector(".col-10");

console.log(time);

dateEl.textContent = moment().format("dddd, MMMM D, YYYY");

console.log("Hour of Current time is: " + moment().format('h'));

// Below function partially works, but only on the first instance of the 
// descriptionEl, so the past/present/future classes are hardcoded 
// in index.html for now.  Does it need for the rows to be dynamically created?
var auditTask = function(time) {
    if (moment().isAfter(time), 'hour') {
        $(descriptionEl).addClass("past");
        console.log("Past, moment is after time");
    }
    else if (moment().isBefore(time), 'hour') {
        console.log("Future, moment is before time");
    }
    else {
        console.log("Present");
    }
};

auditTask();






