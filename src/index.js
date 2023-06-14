function getNy() {
  let newYorkElement = document.querySelector("#newYork");
  if (newYorkElement) {
    let newYorkDateElement = document.querySelector("#nYDate");

    let newYorkTimeElement = document.querySelector("#nYTime");

    let nYTime = moment().tz("America/New_York");

    newYorkElement.innerHTML = "New York 🇺🇸";

    newYorkDateElement.innerHTML = nYTime.format("dddd, MMMM DD, YYYY");

    newYorkTimeElement.innerHTML = nYTime.format("h:mm:ss A");
  }
}

function getLa() {
  let laElement = document.querySelector("#lA");
  if (laElement) {
    let laDateElement = document.querySelector("#laDate");

    let laTimeElement = document.querySelector("#laTime");

    let laTime = moment().tz("America/Los_Angeles");

    laElement.innerHTML = "Los Angeles 🇺🇸";

    laDateElement.innerHTML = laTime.format("dddd, MMMM DD, YYYY");

    laTimeElement.innerHTML = laTime.format("h:mm:ss A");
  }
}

function getTokyo() {
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = document.querySelector("#tokyoDate");

    let tokyoTimeElement = document.querySelector("#tokyoTime");

    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoElement.innerHTML = "Tokyo 🇯🇵";

    tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM DD, YYYY");

    tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss A");
  }
}

getTokyo();
getLa();
getNy();
updateTime();

let selectedCity = null;

function updateCity(event) {
  selectedCity = event.target.value;
  if (selectedCity === "current") {
    selectedCity = moment.tz.guess();
  }
  if (selectedCity === "select") {
    alert("please select a city in the drop down");
  }
}

function updateSelectedCity() {
  if (!selectedCity) return;

  let cityName = selectedCity.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(selectedCity);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div id="cities">
          <div class="row cityDisplay">
            <div class="col city">${cityName}</div>
            <div class="col time">${cityTime.format("h:mm:ss A")}</div>
            <span class="date">${cityTime.format("dddd, MMMM DD, YYYY")}</span>
          </div>
    </div> <a href="/">all cities</a>
  `;
  if (selectedCity === "select") {
    citiesElement.innerHTML = "Please select a city from ☝️";
  }
}

function selectDropDown() {
  let citySelectElement = document.querySelector("#citySelector");

  citySelectElement.addEventListener("change", updateCity);
}

function updateTime() {
  setInterval(getLa, 1000);
  setInterval(getNy, 1000);
  setInterval(getTokyo, 1000);
  setInterval(updateSelectedCity, 1000);
}

selectDropDown();
