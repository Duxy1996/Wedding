

// Set constants
const MAX_CLICKS = 103;
const FAST_CLICK_THRESHOLD = 100; // milliseconds

// Set the date we're counting down to
var countDownDate = new Date("Dec 27, 2025 12:00:00").getTime();

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

/**
 * Opens a Telegram chat with a predefined message.
 *
 * The function first tries to open the Telegram desktop/mobile app
 * using the custom `tg://` protocol. If the app is not installed
 * or fails to open, it falls back to the web version after a short delay.
 */
function openTelegramChat() {
  // Encode the default message to make sure it’s safe for a URL
  var message = encodeURIComponent("For meal, I'm vegetarian");

  // Construct the Telegram web URL with the message
  var telegramUrl = 'https://t.me/duxy1996?start=' + message;

  // Try to open the Telegram native app using the custom URI scheme
  window.location.href = 'tg://resolve?domain=duxy1996&start=' + message;

  // Fallback: if the app is not installed, redirect to the web version after 500ms
  setTimeout(function() {
      window.location.href = telegramUrl;
  }, 500);
}

/**
 * Easter egg hidden in the wedding website.
 *
 * When the user clicks on the image with ID `weddingBoyfriend`,
 * it tracks the number of clicks and the speed between them.
 * - If two clicks are made very quickly (< 100 ms apart),
 *   a fun alert message is displayed.
 * - If the image is clicked exactly 103 times,
 *   the user is redirected to a hidden URL (`Predator` page).
 *
 * This is just for fun and not essential to the site’s functionality.
 */
window.addEventListener('load', function () {
  // Track how many times the image has been clicked
  let clickCount = 0;

  // Track the last click timestamp to measure speed between clicks
  let time = Date.now();

  // Get the target image element by its ID
  const easterEggImage = document.getElementById('weddingBoyfriend');

  // Add a click event listener to the image
  easterEggImage.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent any default click behavior

    // Increase click counter
    clickCount++;

    // Measure the time difference between consecutive clicks
    let fastTime = Date.now() - time;
    time = Date.now(); // Reset timer to the current click

    // If two clicks happen very fast (< 100 ms apart),
    // trigger a funny alert message
    if (fastTime < FAST_CLICK_THRESHOLD) {
      alert("Romo, eres un cracko");
    }

    // If the image has been clicked exactly 103 times,
    // redirect to a hidden URL (the easter egg surprise!)
    if (clickCount === MAX_CLICKS) {
      window.location.href = 'https://duxy1996.github.io/Predator';
    }
  });
});
