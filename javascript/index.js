function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTime = moment();
  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");

  let newyorkElement = document.querySelector("#new-york");
  let newyorkTimeElement = newyorkElement.querySelector(".time");
  let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTime = moment();
  newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
  newyorkTimeElement.innerHTML = newyorkTime
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");

  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTime = moment();
  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime
    .tz("Africa/Johannesburg")
    .format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
