console.log("Welcome To Employee Wage Calculator");


let getEmployeeAttendence = () => Math.floor(Math.random() * 10) % 2;

let checkPartForTime = () => Math.floor(Math.random() * 10) % 2;

let totalDayEmployeePresent = 0;

let TotalNumberOfPartTime = 0;


for (let i = 1; i <= 20; i++) {

    let employeeAttendence = getEmployeeAttendence();
    totalDayEmployeePresent += employeeAttendence;

    //Checking if the employee is present or not.

    switch (employeeAttendence) {
        case 1: {
            if (checkPartForTime()) {
                TotalNumberOfPartTime += 1
                console.log(`Daily Wage of the Employee is ${20 * 4}`);

            } else {
                console.log(`Daily Wage of the Employee is ${20 * 8}`);
            }
        }
            break;
        case 0: {
            console.log("Employee is Absent" + ` on day ${i}`);
        }
            break;
    }
}

function getTotalWage() {
    let totalDayFullTime = totalDayEmployeePresent - TotalNumberOfPartTime;

    let totalWage = (totalDayFullTime * 20 * 8) + (TotalNumberOfPartTime * 20 * 4);
    
    return totalWage;
}

console.log(`Total Monthly Wage of the Employee is ${getTotalWage()}`);