console.log("Welcome To Employee Wage Calculator");


let getEmployeeAttendence = () => Math.floor(Math.random() * 10) % 2;
let totalDayEmployeePresent = 0;
let checkNumberOfPartTime = 0;
let checkNumberOfFullTime = 0;



for (let i = 1; i <= 20; i++) {

    let employeeAttendence = getEmployeeAttendence();
    totalDayEmployeePresent += employeeAttendence;

    //Checking if the employee is present or not.

    switch(employeeAttendence){
        case 1: {
            if(checkPartForTime()) checkNumberOfPartTime += 1;
            else checkNumberOfFullTime += 1;
        } 
        break;
        case 0:{
            console.log("Employee is Absent"+`on day ${i}`);
        }
        break;
    }
}