console.log("we are connected");

//Creating Vars for HTML
var currentDayEl = document.getElementById("currentDay");
var timeBlockELS = document.getElementsByClassName("time-block");
var timeSaveBtn = document.getElementsByClassName("saveBtn");

//Vars function
//var currentTime = moment().format("hh a");
var currentTime = moment().hour();

//display current day time using moment js
currentDayEl.textContent = moment().format("MMMM Do YYYY, h:mm:ss a");

//loop through allthe timeblock class
for (i = 0; i <= timeBlockELS.length - 1; i++) {
  // console.log("each hour in the timeblock", timeBlockELS[i]);
  var hourText = parseInt(timeBlockELS[i].children[0].getAttribute("id"));
  //console.log("hourText:", hourText, "currentTime: ", currentTime);
  //console.log("Alleelemnts in a row ", timeBlockELS[i].children[1]);

  //background color changing for past present and future
  if (hourText === currentTime) {
    timeBlockELS[i].children[1].setAttribute(
      "class",
      "description col-10 present"
    );
  } else if (hourText < currentTime) {
    timeBlockELS[i].children[1].setAttribute(
      "class",
      "description col-10 past"
    );
  } else {
    timeBlockELS[i].children[1].setAttribute(
      "class",
      "description col-10 future"
    );
  }
  // localStorage.getItem(hourText);
}

function displayplanner() {
  var lastEntry = localStorage.getItem("hourtext");

  if (lastEntry !== null) {
    $(".description col-10 present").innerHTML = lastEntry;
  } else {
    return;
  }
}

$(".saveBtn").on("click", function () {
  // console.log($(this), "button was clicked ");
  // console.log($(this).siblings(".description").val(), "desc is ");

  localStorage.setItem("hourText", $(this).siblings(".description").val());
});
