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

function averageMark(s1,s2,s3,s4,s5) {
    const average = (s1+s2+s3+s4+s5)/5;
       return average;
    }
    //console.log (averageMark(88,75,92,77,86));
    const aaverageMark = averageMark(88,75,92,77,86);
    console.log(aaverageMark);

    //B average Mark:
    const bAverageMark = averageMark(90,77,80,82,65);
    console.log(bAverageMark);

    //C average Mark:
    const cAverageMark = averageMark(99,88,85,82,97);
    console.log(cAverageMark);
    // we can show a,b,c everage marks 
    console.log(aaverageMark, bAverageMark, cAverageMark);