
let userName = 'Biscotta';

userName ? console.log(`Hello, ${userName}!`)
    : console.log('Hello!');

const userQuestion = 'Will I land my dream job this year?';
console.log(`${userName}` + ' ' + 'asks:' + ' ' + `${userQuestion}`);

console.log('The Magic Ball returned: ');
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

console.log('Then, the Magic Ball reveals: ');

switch(randomNumber) {

  case 0:
  console.log('It is certain')
  break;

  case 1:
  console.log('It is decidedly so')
  break;

  case 2:
  console.log('Reply hazy try again')
  break;

  case 3:
  console.log('Cannot predict now')
  break;

  case 4:
  console.log('Do not count on it')
  break;

  case 5:
  console.log('My sources say no')
  break;

  case 6:
  console.log('Outlook not so good')
  break;

  default:
  console.log('Signs point to yes')
  break;

}

