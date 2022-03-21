console.log("we are connected");

//Creating Vars for HTML
var currentDayEl = document.getElementById("currentDay");
var timeBlockELS = document.getElementsByClassName("time-block");

//Vars function
var currentTime = moment().format("hh a");

//display current day time using moment js
currentDayEl.textContent = moment().format("MMMM Do YYYY, h:mm:ss a");

//loop through allthe timeblock class
for (i = 0; i <= timeBlockELS.length - 1; i++) {
  // console.log("each hour in the timeblock", timeBlockELS[i]);
  var hourText = timeBlockELS[i].firstElementChild.innerHTML;

  console.log(hourText, currentTime);
  //background color changing for past present and future
  if (hourText === currentTime) {
    timeBlockELS[i].setAttribute("class", "row time-block present");
  } else {
    timeBlockELS[i].setAttribute("class", "row time-block past");
  }
}
