

let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerAge = 27;

if (runnerAge >= 18 && registeredEarly === true) {
  raceNumber += 1000;
} 

if (runnerAge >= 18 && registeredEarly === true) {
  console.log(`${raceNumber}` 'will race at 9:30 am');
}