// Set the date we're counting down to
var countDownDate = new Date("Jul 8, 2023 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const forms = {
      one: "https://forms.gle/gq7Dt8JAuRHVmsiz8",
      double: "https://forms.gle/5nhXYGwweWFUjnJ28",
    };

    const inviteParams = new URLSearchParams(window.location.search).get(
      "invites"
    );
    document.getElementById("invites").href =
      inviteParams == "w"
        ? forms.one
        : inviteParams == "v"
        ? forms.double
        : "#";
  },
  false
);

function toggleBankData() {
  document.getElementsByClassName("bank-data")[0].classList.toggle("visible");
}

function copy(data, event) {
  navigator.clipboard.writeText(data);
  event.style.opacity = ".4";
}
