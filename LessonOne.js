'strint mode';

var prompt = require('prompt');
console.log('Work please!');
prompt.start();


  // Get two properties from the user: username and email 
  // 
  prompt.get(['first name', 'last name'], function (err, result) {
    // 
    // Log the results. 
    // 
    // console.log('Command-line input received:');
    // console.log('  username: ' + result.username);
    // console.log('  email: ' + result.email);
  
    console.log('Hello ' + result['first name'] + ' ' + result['last name']);

  });