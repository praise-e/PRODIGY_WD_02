
let ms = document.getElementById("ms");
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minute");
let hour = document.getElementById("hour");
let display = document.getElementById("display");
let lappedCounts = document.getElementById("lapped");


let msCount = 0;
let secondCount = 0;
let minuteCount = 0;
let hourCount = 0;
let interval;

let startBtn = document.querySelector(".start");
let pauseBtn = document.querySelector(".pause");
let resetBtn = document.querySelector(".reset");
let lapBtn = document.querySelector(".lap");

startBtn.addEventListener("click", () => {
    interval = setInterval(() => {
        msCount++;
        if (msCount === 100) {
            msCount = 0;
            secondCount++;

            if (secondCount === 60) {
                secondCount = 0;
                minuteCount++;

                if (minuteCount === 60) {
                    minuteCount = 0;
                    hourCount++;
                }
            }
        }
        ms.innerHTML = `${msCount.toString().padStart(2, "0")}`;
        seconds.innerHTML = `${secondCount.toString().padStart(2, "0")}`;
        minutes.innerHTML = `${minuteCount.toString().padStart(2, "0")}`;
        hour.innerHTML = `${hourCount.toString().padStart(2, "0")}`;
        startBtn.style.display = "none";
        pauseBtn.style.display = "inline-block";
        resetBtn.style.display = "inline-block";
        lapBtn.style.display = "inline-block";

    }, 10);

})

pauseBtn.addEventListener("click", () => {
    clearInterval(interval);
    pauseBtn.style.display = "none";
    startBtn.style.display = "inline-block";
    startBtn.innerHTML = "Resume";

});
let count = 0;
resetBtn.addEventListener("click", () => {
    clearInterval(interval);

    msCount = 0;
    secondCount = 0;
    minuteCount = 0;
    hourCount = 0;
    ms.innerHTML = `${msCount.toString().padStart(2, "0")}`;
    seconds.innerHTML = `${secondCount.toString().padStart(2, "0")}`;
    minutes.innerHTML = `${minuteCount.toString().padStart(2, "0")}`;
    hour.innerHTML = `${hourCount.toString().padStart(2, "0")}`;
    startBtn.innerHTML = "Start";
    lappedCounts.innerHTML = " ";
    startBtn.style.display = "inline-block";
        pauseBtn.style.display = "none";
        resetBtn.style.display = "none";
        lapBtn.style.display = "none";
        count = 0;
});


lapBtn.addEventListener("click", () => {
    count++;
    lapBtn.disabled = false;
    let li = document.createElement("li");
    lappedCounts.appendChild(li);
    li.innerHTML = `Lap ${count} - ${hourCount.toString().padStart(2, "0")} : ${minuteCount.toString().padStart(2, "0")} : ${secondCount.toString().padStart(2, "0")} : ${msCount.toString().padStart(2, "0")}`
})