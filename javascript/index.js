function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonTimeElement = londonElement.querySelector(".time");
    let londonDateElement = londonElement.querySelector(".date");
    let londonTime = moment();
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime
      .tz("Europe/London")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let newyorkElement = document.querySelector("#new-york");
  if (newyorkElement) {
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTime = moment();
    newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTime
      .tz("America/New_York")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTime = moment();
    johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
    johannesburgTimeElement.innerHTML = johannesburgTime
      .tz("Africa/Johannesburg")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city"><div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div></div><a href="/">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
