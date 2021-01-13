const daysEl = document.getElementById('day');
const hoursEl = document.getElementById('hour');
const minutesEl = document.getElementById('minute');
const secondsEl = document.getElementById('second');

const newYears = "12 February 2021";

function countDown() {
    const newYearDays = new Date(newYears);
    const currentDay = new Date();
    const totalSeconds = (newYearDays - currentDay) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;   
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}`: time;   
}
countDown();

setInterval(countDown,1000);