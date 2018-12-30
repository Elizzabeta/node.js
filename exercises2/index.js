// var array = [1, 9, 5, 27, 2, 10, 18];
// var even = [];
// var uneven = [];

// for(let i = 0; i < array.length; i++) {
//   if(array[i]%2 === 0) {
//     even.push(array[i])
//   }else{
//     uneven.push(array[i])
//   }
// };
// console.log("Even numbers are: " +even);
// console.log("Uneven numbers are: " +uneven);

// ****************************************************
// var number = 5;
// var string = "5";

// console.log(isNaN(number));  //returns false
// console.log(isNaN(string)); //returns false


// *************************************************
// ----------TOPIC: isNaN() and arrays--------------

// var array = [1, 2, "Two days until the New Year", 5];
// var number = [];
// var string = [];
// for(let i =0; i < array.length; i++) {
//   if(!isNaN(array[i])){
//     number.push(array[i])
//   }else{
//     string.push(array[i]);
//   }
// }; 
// console.log("12/29/2018: " +string);
// console.log("Random numbers: " +number);


// ************************************************
// ---------TOPIC: BASIC FUNCTION------------------

// function sum (a, b) {                           // functions are OBJECTS
//   return a + b
// }

// var x = 5, y = 10;
// console.log(sum(x, y));


// ************************************************
// ---------TOPIC: ANONYMOUS FUNCTIONS-------------

// var x = function () {
//   return "I am stored in an anonymous function"; // functions always return a value,
//                                                  // so if no "return" value is specified,
//                                                  // (but "console log" instead) the 
//                                                  // function will return "undefined"!
// };
//  console.log(x());


// ***********************************************
// ------TOPIC: FUNCTIONS/ ARRAYS/ isNaN----------

// var myArray = ["I", 2, 7, 8, "learn",9, 28, 27,"JavaScript"];
// var sentence = '';
// var subNumAndSuccessor = [];

// for (let i = 0; i < myArray.length; i++) {
//   if (isNaN(myArray[i])){
//     //sentence += myArray[i] + " ";
//           // OR // 
//     sentence = sentence.concat(myArray[i]+ " ");
//   } else {
//     let sum = substractWithSuccessor(myArray[i]);
//     subNumAndSuccessor.push(sum)
//   }
// }
// console.log("Sentence: " +sentence);
// console.log("Substruction with nums' successors: " +subNumAndSuccessor)

// function substractWithSuccessor(number) {
//   let successor = number + 1;              
//     return number + successor;
// }


// **************************************************

// var person = {
//   firstName: "Johanna",
//   lastName: "Johnson",
//   age: 17,

//   fullName: function() {
//     return this.firstName+" "+this.lastName;
//   },
//   nameAndAge: function() {
//     return this.firstName+" "+this.lastName+", "+this.age+" years old"
//   }
// }

// var person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 28,
//   fullName: function() {
//     return this.firstName+" "+this.lastName;
//   },
//   nameAndAge: function() {
//     return this.firstName+" "+this.lastName+", "+this.age+" years old";
//   }
// };
//console.log(person.nameAndAge());
//console.log(person1.firstName);      // one way to get element of an object
//console.log(person1['firstName']);   // another way to get element of an object


// *******************************************************
// ---------- EXERCISE: Who can vote? --------------------

// var citizen = {
//   firstName: "Johanna",
//   lastName: "Johnson",
//   age: 17,

//   fullName: function() {
//     return this.firstName+" "+this.lastName;
//   },
//   nameAndAge: function() {
//     return this.firstName+" "+this.lastName+", "+this.age+" years old"
//   }
// }

// var citizen1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 28,
//   fullName: function() {
//     return this.firstName+" "+this.lastName;
//   },
//   nameAndAge: function() {
//     return this.firstName+" "+this.lastName+", "+this.age+" years old";
//   }
// };

// var array = [];
// array.push(citizen, citizen1)

// for(i=0; i < array.length; i++){
//   if(array[i].age <= 18){
//     console.log(array[i].nameAndAge()+" "+ "and isn't eligible of voting")
//   }else{
//     console.log(array[i].nameAndAge()+" "+ "and is eligible of voting");
//   }
// }


// ******************************************************
// ---- EXERCISE: How much costs the property? -----------

// var property = {
//   type: "house/apartment",
//   m2: "100",
//   price_m2: "1000",
//   balcony: "5",
//   fullPrice: function() {
//     return (parseInt(this.m2) + parseInt(this.balcony)) * this.price_m2;
//   }
// }
// console.log(property.fullPrice());