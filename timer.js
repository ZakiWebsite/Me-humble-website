const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date('July 20 2026 07:00:00').getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days =  Math.abs(Math.floor(distance / 1000 / 60 /60 / 24));
    const hours = Math.abs(Math.floor(distance / 1000 / 60 / 60) % 24);
    const minutes = Math.abs(Math.floor(distance / 1000 / 60) % 60);
    const seconds = Math.abs(Math.floor(distance / 1000) % 60);

    console.log(days + ':' + hours + ':' + minutes + ':' + seconds);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;


}

setInterval(timer, 1000);