let year = prompt("Please input a data.");
let result;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
{
    result = "Leap Year.";
}
else 
 {
    result = "Not a leap year.";
 }

console.log(year,"is",result);
