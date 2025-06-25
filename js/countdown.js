// set your target date here:
const targetDate = new Date("2025-07-26T10:00:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "The tournament has started!";
    clearInterval(timerInterval);
    return;
  }

  const days  = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const mins  = Math.floor((diff % (1000*60*60)) / (1000*60));
  const secs  = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById("days").textContent  = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("mins").textContent  = String(mins).padStart(2, '0');
  document.getElementById("secs").textContent  = String(secs).padStart(2, '0');
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();  // initial call
