document.addEventListener("DOMContentLoaded", function () {
  function updateClock() {
    const currentTime = new Date();

    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");

    document.getElementById("hrs").textContent = hours;
    document.getElementById("min").textContent = minutes;
    document.getElementById("sec").textContent = seconds;
  }

  setInterval(updateClock, 1000);

  updateClock();
});
