console.log("Welcome To Employee Wage Calculator");


let  getEmployeeAttendence = ()=> Math.floor(Math.random() * 10) % 2;
let totalDayEmployeePresent = 0;


for (let i = 1; i <= 20; i++) {

    let employeeAttendence = getEmployeeAttendence();
    totalDayEmployeePresent += employeeAttendence;
}