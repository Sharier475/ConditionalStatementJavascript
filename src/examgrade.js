//Exercise Program

 let num = prompt ("Enter your score (0-100):");
 let grade;

 if (num >= 80 && num <= 100){
    grade = "A";
 }
 else if(num >= 70 && num <= 79 ){
    grade = "B";
 }
 else if(num >= 60 && num <= 69 ){
    grade = "C";
 }
 else if(num >= 50 && num <= 59 ){
    grade = "D";
 }
 else if( num <= 49 ){
    grade = "F";
 }
 else{
    console.log("Your input data is invalid");
 }

 console.log("According to the score Your grade is :",grade);