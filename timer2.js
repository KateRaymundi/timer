

process.stdin.on('data', (key) => {
 
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me ciao\n");
    process.exit()
  }
  if (key === 'b'){
    process.stdout.write('\x07')
  }
  if (key >= 1 && key <= 9){
    process.stdout.write(`setting timer for ${key} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07')
    }, key * 1000
    )};
});

