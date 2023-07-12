const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const eventCCXP = "01 dec 2023";

const countDown = () => {
    const eventDate = new Date(eventCCXP);
    const today = new Date();

    const secTotal = (eventDate - today)/1000;

    const finalDays = Math.floor(secTotal / 60 / 60 / 24);

    const finalHours = Math.floor(secTotal / 60 / 60) % 24;

    const finalMinutes = Math.floor(secTotal / 60) % 60;

    const finalSeconds = Math.floor(secTotal) % 60;

    day.innerHTML = `${finalDays}D`;
    hours.innerHTML = `${timeFormat(finalHours)}H`;
    minutes.innerHTML = `${timeFormat(finalMinutes)}M`;
    seconds.innerHTML = `${timeFormat(finalSeconds)}S`;

}

const timeFormat = (time) => {
    return time < 10? `0${time}` : time;
}

countDown()
setInterval(countDown, 1000)
