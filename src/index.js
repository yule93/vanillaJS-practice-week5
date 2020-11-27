import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const clock = document.querySelector(".dday-clock");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const nowDay = new Date();
  let elapsed = xmasDay.getTime() - nowDay.getTime();
  //elapsed -= NINE_HOURS_MILLISECONDS;   // if I live in UK, I need to use this line....

  const resultDay = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const resultHour = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
  const resultMin = Math.floor((elapsed / (1000 * 60)) % 60);
  const resultSec = Math.floor((elapsed / 1000) % 60);

  clock.innerHTML = `${resultDay}d ${
    resultHour < 10 ? `0${resultHour}` : resultHour
  }h ${resultMin < 10 ? `0${resultMin}` : resultMin}m ${
    resultSec < 10 ? `0${resultSec}` : resultSec
  }s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
