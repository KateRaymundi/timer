let runAlarm = process.argv.slice(2)

const timer = (alarm) => { //what has been inputed needs to be printed in the terminal  
  
  for (let num of alarm) {
    if (num === Number || num > 0 ) {
    setTimeout(() => {
    process.stdout.write('\x07');
     }, num * 1000
    )};
  }
}
timer([1, 2, 3])