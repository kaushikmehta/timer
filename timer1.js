const args = process.argv.splice(2);

if (args.length >= 1) {
  for (let time of args) {
    console.log(!isNaN(time));
    if (!isNaN(time) && time >= 0) {
      time = Number(time);
      setTimeout(() => process.stdout.write('\x07'), time * 1000);
    }
  }
}
