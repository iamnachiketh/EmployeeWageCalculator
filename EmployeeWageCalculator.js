console.log("Welcome To Employee Wage Calculator");


let getEmployeeAttendence = () => Math.floor(Math.random() * 10) % 2;

let checkPartForTime = () => Math.floor(Math.random() * 10) % 2;

let totalDayEmployeePresent = 0;

let TotalNumberOfPartTime = 0;

let maxHours = 100;


for (let i = 1; i <= 20; i++) {

    console.log(`Day ${i}`);

    let employeeAttendence = getEmployeeAttendence();
    totalDayEmployeePresent += employeeAttendence;

    //Checking if the employee is present or not.

    switch (employeeAttendence) {
        case 1: {
            // Checking for part time or full time employee
            if (checkPartForTime()) {
                TotalNumberOfPartTime += 1
                console.log("Part Time Employee is Present" + ` on day ${i}`);
                console.log(`Daily Wage of the Employee is ${20 * 4}`);

            } else {
                console.log("Full Time Employee is Present" + ` on day ${i}`);
                console.log(`Daily Wage of the Employee is ${20 * 8}`);
            }
        }
            break;
        case 0: {
            console.log("Employee is Absent" + ` on day ${i}`);
        }
            break;
    }
    console.log("=================================================")
}

function getTotalWage() {
    let totalDayFullTime = totalDayEmployeePresent - TotalNumberOfPartTime;

    let totalWage = (totalDayFullTime * 20 * 8) + (TotalNumberOfPartTime * 20 * 4);
    
    return totalWage;
}


let  totalNumberOfWorkingHours = () => {
    let totalDayFullTime = totalDayEmployeePresent - TotalNumberOfPartTime;

    return (totalDayFullTime * 8) + (TotalNumberOfPartTime * 4);
}

if(totalNumberOfWorkingHours() > maxHours){
    
    console.log(`Total Number of Working Hours is ${totalNumberOfWorkingHours()} exceeded the max work hours ${maxHours}`);
    
    console.log(`Total Monthly Wage of the Employee is ${getTotalWage()}`);
    return;
}


console.log(`Total Monthly Wage of the Employee is ${getTotalWage()}`);