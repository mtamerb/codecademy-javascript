let raceNumber = Math.floor(Math.random() * 1000);
let isEarly;
let racerAge = 19;

racerAge < 18 ? (isEarly = true) : (isEarly = false);

if (racerAge > 18 && isEarly === true) {
    raceNumber += 1000;
    console.log('Race at 9:30');
    console.log('race number : ' + raceNumber);
}
if (racerAge > 18 && isEarly === false) {
    console.log('Race at 11:00');
    console.log('race number : ' + raceNumber);
}
if (racerAge < 18) {
    console.log('Race at 12:30');
    console.log('race number : ' + raceNumber);
}
if (racerAge === 18) {
    console.log('See the registration desk !');
}


