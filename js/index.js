
// Set the date we're counting down to
var countDownDate = new Date("Dec 27, 2025 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("weddingDays").innerHTML = days;
  document.getElementById("weddingHours").innerHTML = hours;
  document.getElementById("weddingMinutes").innerHTML = minutes;
  document.getElementById("weddingSeconds").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Easter egg created by perplexity
window.addEventListener('load', function () {
  let clickCount = 0;
  let time = Date.now();
  const easterEggImage = document.getElementById('weddingBoyfriend');

  easterEggImage.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default click behavior
    clickCount++;

    let fastTime = Date.now() - time;
    time = Date.now();

    if(fastTime < 100 )
    {
      alert("Romo, eres un cracko")
    }

    if (clickCount === 103) {
      window.location.href = 'https://duxy1996.github.io/Predator';
    }
  });
})
