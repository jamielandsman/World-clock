function getNy() {
  let newYorkElement = document.querySelector("#newYork");

  let newYorkDateElement = document.querySelector("#nYDate");

  let newYorkTimeElement = document.querySelector("#nYTime");

  let nYTime = moment().tz("America/New_York");

  newYorkElement.innerHTML = "New York 🇺🇸";

  newYorkDateElement.innerHTML = nYTime.format("dddd, MMMM DD, YYYY");

  newYorkTimeElement.innerHTML = nYTime.format("h:mm:ss A");
}

function getLa() {
  let laElement = document.querySelector("#lA");

  let laDateElement = document.querySelector("#laDate");

  let laTimeElement = document.querySelector("#laTime");

  let laTime = moment().tz("America/Los_Angeles");

  laElement.innerHTML = "Los Angeles 🇺🇸";

  laDateElement.innerHTML = laTime.format("dddd, MMMM DD, YYYY");

  laTimeElement.innerHTML = laTime.format("h:mm:ss A");
}

function getTokyo() {
  let tokyoElement = document.querySelector("#tokyo");

  let tokyoDateElement = document.querySelector("#tokyoDate");

  let tokyoTimeElement = document.querySelector("#tokyoTime");

  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoElement.innerHTML = "Tokyo 🇯🇵";

  tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM DD, YYYY");

  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss A");
}

function updateTime() {
  setInterval(getLa, 1000);
  setInterval(getNy, 1000);
  setInterval(getTokyo, 1000);
}

getTokyo();
getLa();
getNy();
updateTime();
