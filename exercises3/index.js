// var mathModule = require('./math-module');

// console.log(mathModule.addition(5, 10));      //calling and external, imported function
// console.log(mathModule.subtraction(5, 10));   //calling and external, imported function


// **********************************************
// ---- TOPICS: includes() & startsWith() -------

// var sentence = "I learn";
// var word1 = 'js';
// var word2 = 'learn';

// console.log(sentence.includes(word1));
// console.log(sentence.includes(word2));


// **********************************************
// ------------ TOPIC: Validators ---------------

// var validator = require('./validator');

// var username = "Johanna";
// var password = "Johnson";
// var email = "johanna@gmail.com";

// var emailValidation = validator.validateEmail(email);
// var validatePassword = validator.validatePassword(password);

// if(emailValidation && validatePassword){
//   console.log("Valid data entered")
// }else{
//   console.log("Invalid data entered")
// }


// ***********************************************
// ------------- TOPIC: fs module ----------------

//var fs = require('fs');

// fs.writeFile('myFile.txt', 'test123', (err) => {
//   if(err){
//     throw err;
//   } else {
//     console.log("Successfully written file");
//   }
// })

// fs.appendFile('myFile.txt', ' added text', (err) => {
//   if(err){
//     throw err
//   }else{
//     console.log('Text added successfully')
//   }
// });

// fs.readFile('myFile.txt', 'utf8', (err, data) => {
//     if(err){
//       throw err
//     } else {
//       console.log(data)
//     }
// })