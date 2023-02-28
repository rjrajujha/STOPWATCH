//Current Time
let currentTime = document.getElementById("currenttime");

//Buttons
let startBtn = document.getElementById("start_btn");
let pauseBtn = document.getElementById("pause_btn");
let resetBtn = document.getElementById("reset_btn");
let castBtn = document.getElementById("cast_btn");

// Casts
let casts = document.getElementById("casts");
let castCount = 1;


let StopWatch = (command) => {

    //Time
    let time_ms = parseInt(currentTime.innerText.split(":")[3]);
    let time_sec = parseInt(currentTime.innerText.split(":")[2]);
    let time_min = parseInt(currentTime.innerText.split(":")[1]);
    let time_hour = parseInt(currentTime.innerText.split(":")[0]);

    let startTimer = () => {
        time_ms = time_ms + 1;

        if (time_ms === 1000) {
            time_ms = 0;
            time_sec = time_sec + 1;
        }

        if (time_sec === 60) {
            time_sec = 0;
            time_min = time_min + 1;
        }

        if (time_min === 60) {
            time_min = 0;
            time_hour = time_hour + 1;
        }
        currentTime.innerText = `${time_hour}:${time_min}:${time_sec}:${time_ms}`
    }

    function onCommand(cmd) {
        let myInterval = setInterval(startTimer, 1);
        if (cmd == "pause" || cmd == "reset") {
            clearInterval(myInterval);
        }
    }

    if (command === "start") {
        onCommand()
        console.log("Stopwatch Started");
    }

    if (command === "pause") {
        onCommand("pause")
        console.log("Stopwatch Paused")
    }

    if (command === "reset") {
        currentTime.innerText = `00:00:00:000`
        onCommand("reset")
        console.log("Stopwatch Reseted");
    }

}


startBtn.addEventListener("click", () => {
    StopWatch("start");
});

pauseBtn.addEventListener("click", () => {
    StopWatch("pause");
})

resetBtn.addEventListener("click", () => {
    StopWatch("reset");
})

castBtn.addEventListener("click", () => {

    const para = document.createElement("p");
    const node = document.createTextNode(`CAST ${castCount} : ${currentTime.innerText}`);

    para.appendChild(node);
    document.getElementById("casts").appendChild(para);

    console.log("Cast Appended");
    castCount++;
})