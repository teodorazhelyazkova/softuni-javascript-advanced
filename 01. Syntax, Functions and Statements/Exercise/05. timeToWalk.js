function timeToWalk(steps, footprint, speed) {
  let distanceMeters = steps * footprint;
  let speedMetersInSec = speed / 3.6;
  let time = distanceMeters / speedMetersInSec;
  let rest = Math.floor(distanceMeters / 500);

  let timeInMin = Math.floor(time / 60);
  let timeInSec = Number((time - (timeInMin * 60)).toFixed(0));
  let timeInH = Math.floor(time / 3600);
  timeInMin += rest;
  timeInMin += Math.floor(timeInMin / 60);
  timeInMin = timeInMin % 60;

  let formatedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
  let formatedM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
  let formatedS = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

  console.log(`${formatedH}:${formatedM}:${formatedS}`);
}

timeToWalk(2564, 0.70, 5.5);
