var name = "Bob";
var isRaining = true;
var hasPet = false;
var job = "Web Developer";
var cash = 100;
if (isRaining == "It is raining"){
Console.log("I need a coat");
cash-= 50;
}
if (name == "Bob"){
console.log("Hello Bob");
}
else {
    console.log("Hello stranger");
}
if (job == "Web Developer"){
    console.log("Keep up the good work");
    cash+=500;
}
else {
    Console.log("Who are you");
}
var job2 = "Senior Web Developer";
if (hasPet == false){
    console.log("You have no pets");
    cash-=1500
}
else {
    console.log("pets are great");
}
if (cash > 1000) {
    console.log("Vacation time");
    cash-= 1200;
}
else {
    console.log("Sorry your broke. PLease go back to work.");
}
console.log("Pay day!!!");
console.log("Here is your current amount");
console.log(cash);
