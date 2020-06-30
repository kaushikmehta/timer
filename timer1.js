const args = process.argv.splice(2);

if (args.length >= 1) {
  for (let time of args) {
    if (typeof time * 2  !== 'NaN' && time >= 0) {
      time = Number(time);
      setTimeout(() => process.stdout.write('\x07'), time * 1000);
    }
  }
}
