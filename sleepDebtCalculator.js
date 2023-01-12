// The program will determine the actual an ideal hours of sleep for each night of the last week
//Plus, it will calculate, in hours, how far you are from your weekly sleep goal


function getSleepHours (day) {

    switch (day) {
      case 'monday':
      return 8; 
      break;
  
      case 'tuesday':
      return 7; 
      break;
  
      case 'wednesday':
      return 5; 
      break;
  
      case 'thursday':
      return 6; 
      break;
  
      case 'friday':
      return 3; 
      break;
  
      case 'saturday':
      return 9; 
      break;
  
      case 'sunday':
      return 10;
      break;
  
      default:
      return 'Error!'; 
    }
  };
  
  //console.log(getSleepHours('saturday'));
  
  const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  getActualSleepHours();
  
  //console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  //console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount to sleep!');
    } else if(actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours)+ 'hour(s) more sleep than needed!');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. You should get some rest!');
    } else {
      console.log('Error!');
    }
    };
  
  calculateSleepDebt();
