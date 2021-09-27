var dateEl = document.querySelector("#currentDay");
var time = document.querySelector(".time-block").innerText.replace("AM", ":00am").replace("PM", ":00pm");
var descriptionEl = document.querySelector(".col-10");

console.log(time);

dateEl.textContent = moment().format("dddd, MMMM D, YYYY");

// var determineRelativeTime = function() {
//     var currentTime = moment().format('h');
    
//     console.log("Hour of Current time is: " + currentTime);
 
// };

console.log(moment().format('h'));

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

//determineRelativeTime();

auditTask();
