import {Employee as employee} from 'G:/CTS/angular_Handson/day1/s2/employee';
var employeeImpl: employee = {
    id: 1,
    name: "ashwini",
    salary: 20000,
    permanent: true,
    department_id: 1,
    department_name: "Payroll",
    skillArray: [{id:1, name:"HTML"}, {id:2, name:"CSS"}, {id:3, name:"JavaScript"}]
}

console.log("id: " + employeeImpl.id);
console.log("name: " + employeeImpl.name);
console.log("salary: " + employeeImpl.salary);
console.log("permanent: " + employeeImpl.permanent);
console.log("department id: " + employeeImpl.department_id);
console.log("department name: " + employeeImpl.department_name);
//Iterate through the the array and print the details..
for(let i=0; i<employeeImpl.skillArray.length; i++){
    console.log("skill[" + i + "]:" + employeeImpl.skillArray[i].id + ", " + employeeImpl.skillArray[i].name);
}