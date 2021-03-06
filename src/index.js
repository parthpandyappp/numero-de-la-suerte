let date = document.getElementById("date");
let lucky_number = document.getElementById("lucky-number");
let display = document.getElementById("show");

function checkLuck() {
  console.log(date.value);
  const cleanDate = cleanUp(date.value);
  let sum = 0;

  for (let i in cleanDate) {
    sum = sum + Number(cleanDate[i]);
  }

  let isBirthDayLucky = sum % Number(lucky_number.value);

  showOutput(isBirthDayLucky);
}

function showOutput(isBirthDayLucky) {
  if (isBirthDayLucky) {
    console.log("Not lucky!");
    display.innerHTML =
      "<h1>Number " + lucky_number.value + " is not that much lucky for you." + "</h1>";
  } else {
    console.log("Lucky!");
    display.innerHTML =
      "<h1 class='shadow'>Number " + lucky_number.value + " is your Lucky number</h1>";
  }
}

function cleanUp(date) {
  return date.replaceAll("-", "");
}
