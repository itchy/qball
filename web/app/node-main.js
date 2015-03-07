process.on('uncaughtException', function(err) {
  // handle the error safely
  console.log(err.message);
  console.log(err.stack);
});
