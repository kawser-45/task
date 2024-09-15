
//task 1

let food = 500;

 if (food > 500){
     console.log('otarwise cooc 30tk');
    
 } else {
     console.log('cooc frre');
    
 }


 //task 2

//Function to calculate BMI
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

//Function  health category  BMI


function healthCategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}


let weight = 72;  
let height = 1.81;  

//Calculate BMI
let bmi = calculateBMI(weight, height);
console.log("Your BMI is:", bmi.toFixed(2));


let category = healthCategory(bmi);
console.log("Your health category is:", category);


//task 3

function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else if (score >= 0 && score <= 59) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}

// Example usage:
let studentScore = 95; 
let grade = calculateGrade(studentScore);
console.log('The grade is: ' + grade);


// task 4

function calculateFare(age, isStudent) {
    const regularFare = 800;

    if (age < 10) {
        return "for Children Free";
    } else if (isStudent) {
        return 'Students for 50% Discount';
    } else if (age >= 60) {
        return 'Senior Citizens for BDT 15% Discount';
    } else {
        return 'Regular Ticket Fare is = 800 tk';
    }
}

// Example usage
console.log(calculateFare(8, false));  
//  console.log(calculateFare(20, true));  
//  console.log(calculateFare(65, false)); 
//  console.log(calculateFare(30, false)); 













