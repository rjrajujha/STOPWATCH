let startTime = 0;
let running = false;
let interval;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

startStopButton.addEventListener("click", toggleStartStop);
resetButton.addEventListener("click", reset);

function toggleStartStop() {
    if (!running) {
        startStopButton.textContent = "Stop";
        running = true;
        startTime = Date.now() - (startTime > 0 ? startTime : 0);
        interval = setInterval(updateDisplay, 10);
    } else {
        startStopButton.textContent = "Start";
        running = false;
        clearInterval(interval);
    }
}

function updateDisplay() {
    const elapsed = Date.now() - startTime;
    const time = new Date(elapsed);
    const minutes = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();
    const milliseconds = time.getUTCMilliseconds();
    display.textContent = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds, true)}`;
}

function reset() {
    clearInterval(interval);
    running = false;
    startStopButton.textContent = "Start";
    startTime = 0;
    display.textContent = "00:00:000";
}

function formatTime(value, isMilliseconds = false) {
    if (isMilliseconds) {
        return value.toString().padStart(3, "0");
    } else {
        return value.toString().padStart(2, "0");
    }
}