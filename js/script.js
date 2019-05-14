function clock() {
  let currentTime = new Date();
  let time = currentTime.toLocaleTimeString();
  document.getElementById("clock").innerHTML = time;
  setTimeout(clock, 500);
}

function date() {
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let date = currentDate.toLocaleDateString("en-GB", dateOptions);
  document.getElementById("date").innerHTML = date;
}


function onPageLoad() {
  clock();
  date(); 
}
