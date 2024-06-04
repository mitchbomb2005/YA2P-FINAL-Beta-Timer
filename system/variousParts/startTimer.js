let timerInterval;
let startTime;
let elapsedTime = 0;

window.startTimer = function() {  // Attach to window object to make it globally accessible
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10);
    }
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    const hundredths = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

    document.getElementById('timer').textContent =
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + ":" +
        (hundredths < 10 ? "0" : "") + hundredths;
}
