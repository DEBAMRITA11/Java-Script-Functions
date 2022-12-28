//Javascript Ternary Operator 
//if else examplae
//let age =15;
//if (age>=18) {
//    console.log("You are fill age!");
// } else {
//   console.log("You are not full age!");
// }
//with ternary operator we can use this condition in a short form.
//age>=18 ? console.log("You are fill age!") : //console.log("You are not full age!");

//Example:2
//let food;
//if (age > 12) {
//   food ="chicken";
// } else {
//    food ="ice-cream";
// }
// console.log(food);
// console.log(`He like to eat ${food}`);

//using ternary operator write this condition 
// console.log(`He like to eat ${age<12 ? "chicken" : "ice-cream"}`);

//JavaScript Function:
// Function has two part. First part we write the Function and in the second part we 'call function' for show in console.
// Example:
//function showText() {
//    console.log("Some Text!");
// }
// showText();

//Example 2:
// function showName(name) {
//   console.log(name);
// }
// showName("Amrita");
// showName("Rani");
// showName("Deb");

//Example: 3
// function calculateNumber(n1,n2) {
//   console.log(n1*n2);
// }
// calculateNumber(5,3);
// calculateNumber(1000,30);

//Example: 4
//function averageMark(s1,s2,s3,s4,s5) {
//   console.log((s1+s2+s3+s4+s5)/5);
// }
//averageMark(88,75,92,77,86);

//how to write this function with real life example.

//function averageMark(s1,s2,s3,s4,s5) {
//    const average = (s1+s2+s3+s4+s5)/5;
//      return average;
//    }
    //console.log (averageMark(88,75,92,77,86));
 //   const aaverageMark = averageMark(88,75,92,77,86);
 //   console.log(aaverageMark);

    //B average Mark:
 //   const bAverageMark = averageMark(90,77,80,82,65);
 //  console.log(bAverageMark);

    //C average Mark:
 //   const cAverageMark = averageMark(99,88,85,82,97);
 //   console.log(cAverageMark);
    // we can show a,b,c everage marks 
 //   console.log(aaverageMark, bAverageMark, cAverageMark);

 //Function declarations: if we call this funtion before,  it works properly. 
 //function calculateAge(birthYear) {
 //   return 2022 - birthYear;
// }
//  const age1 = calculateAge(1988);
//  console.log(age1);

// Function Expressions: if we call this funtion before,  it doesn't work. 
// const calculateAgeNew = function(birthYear) {
 //   return 2022 - birthYear;
// };
// const age2 = calculateAgeNew(1975);
// console.log(age2);

//Arrow Function:
//Example: 1
//const calculateAgeAnother = birthYear => 2022 - birthYear;
//const age1 = calculateAgeAnother (2022);
//console.log(age1);

//Example: 2
//const calculateAgeAnother = (birthYear) => { 
//   return 2022 - birthYear;
 // }
//const age2 = calculateAgeAnother (2022);
//console.log(age2);

//Example: 3
//const jobleft = birthYear => {
//   const age = 2022 - birthYear;
//    const ageleft = 62-age;
//    return ageleft;
//};
//const aAgeLeft = jobLeft(1972);
//console.log (aAgeLeft);
//console.log(`A job age left ${aAgeLeft} years`);

// here, we directly return function result.
//const jobleft = birthYear => {
//  const age = 2022 - birthYear;
//    return 62-age;
// };
//const aAgeLeft = jobLeft(1972);
//console.log (aAgeLeft);
//console.log(`A job age left ${aAgeLeft} years`);

//Array:
//const student1 = 'Asif';
//const student2 = 'Rakib';

//console.log(student1);
//console.log(student2);

//Array Example: 1
//const students = ["Asif", "Rakib"];
//console.log(students);
//console.log(students[0]);
//console.log(students[1]);

//Array Example: 2
//const players = new Array("Sakib", "Tamim", "Miraz");
//console.log(players[0]);
//console.log(players[2]);

//const students = ["Asif", "Rakib", "Rahim", "Rifat"];
//console.log(students);
//students[0] ="Karim";
//console.log(students);

//students = ["student1", "student2", "student3"];

//console.log(students.length);

//Get array last item...
//console.log(students[students.length - 1]);

//const user = ["Amrita", "Rani", "Deb", 1993, 2022-1993, "student"];
//console.log(user);
//console.log(user[2]);

//Array Method:
const users = ["user1", "user2", "user3"];
//console.log(users);

//Push
//users.push("user4");
//console.log(users);

//unshift:
//users.unshift("First user");
//console.log(users);

//pop
//users.pop();
//console.log(users);

//shift
//users.shift();
//console.log(users);

//console.log(users);
//const removeItem = users.pop();
//console.log(removeItem);
//console.log(users);

const removeItem = users.shift();
console.log(users);
console.log(removeItem);