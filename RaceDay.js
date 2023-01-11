
//race numbers assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);

//checks if the runner is registered early or not and his/her age
let registeredEarly = false;
let runnerAge = 18;

//control flow statement that checks whether the runner is an adult and registered early
if (runnerAge >= 18 && registeredEarly === true) {
  raceNumber += 1000;
} 

//checks the runners on different conditions
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`${raceNumber}`);
  console.log('will race at 9:30 am');
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`${raceNumber}`);
  console.log('will race at 11:00 am');
} else if (runnerAge < 18) {
  console.log(`${raceNumber}`);
  console.log('will race at 12:30 pm (regardless of registration)');
} else if (runnerAge === 18) {
  console.log(`${raceNumber}`);
  console.log('Please, come at the registration desk.');
}