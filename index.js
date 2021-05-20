const countdown = () => {
  const countDate = new Date("May 29, 2021 00:00:00").getTime();
  // console.log(countDate);
  const now = new Date().getTime();
  const timeLeft = countDate - now;

  //time measurement
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //calculate
  const textDay = Math.floor(timeLeft / day);
  const textHour = Math.floor((timeLeft % day) / hour);
  const textMinute = Math.floor((timeLeft % hour) / minute);
  const textSecond = Math.floor((timeLeft % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};


//to run multiple times
setInterval(countdown,1000);
