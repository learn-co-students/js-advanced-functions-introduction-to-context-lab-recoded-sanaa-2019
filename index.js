// Your code here
//populates a record from an Array
let array=['Mohammed','Abdulaziz','Engineer',7];
let createEmployeeRecord=function(arr){
    return{
        firstName:arr[0],
        familyName:arr[1],
        title:arr[2],
        payPerHour:arr[3],
        timeInEvents:[],
        timeOutEvents:[],
    };
}
console.log(createEmployeeRecord(array).payPerHour);
//process an Array of Arrays into an Array of employee records
let recodrds=[['Mohammed','Abdulaziz','Engineer',7],['Qasim','Ahmed','IT',6]]
let createEmployeeRecords=function(arr){
    
    return arr.map(createEmployeeRecord);

}
console.log(createEmployeeRecords(recodrds).map(e=>e.firstName));
//it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
let emp1=createEmployeeRecord(array);
function createTimeInEvent(emp,timeDate){
    let timeinObj={
        type:"TimeIn",
        date:timeDate.split(" ")[0],
        hour:parseInt(timeDate.split(" ")[1])
    }
    emp.timeInEvents.push(timeinObj)
    return emp;
}
console.log(createTimeInEvent(emp1,"2014-02-28 1400").timeInEvents[0].hour);
//it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
function createTimeOutEvent(emp,timeDate){
    let timeOutObj={
        type:"TimeOut",
        date:timeDate.split(" ")[0],
        hour:parseInt(timeDate.split(" ")[1])
    }
    emp.timeOutEvents.push(timeOutObj)
    return emp;
}
console.log(createTimeOutEvent(emp1,"2014-02-28 2000").timeOutEvents[0].hour);
//Given an employee record with a date-matched timeInEvent and timeOutEvent
let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
let updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
console.log(cRecord);

let hoursWorkedOnDate=function(emp,date){
    for(let i=0;i<emp.timeInEvents.length;i++){
        if(date === emp.timeInEvents[i].date){
            for(let j=0;j<emp.timeOutEvents.length;j++){
                if(date === emp.timeOutEvents[j].date){
                    return (emp.timeOutEvents[j].hour-emp.timeInEvents[i].hour)/100;
                }
            }
        }
        
    }
    return 0;
}
console.log(hoursWorkedOnDate(cRecord, "0044-03-15"));


console.log(cRecord);
let b ={
    firstName: 'Julius',
    familyName: 'Caesar',
    title: 'General',
    payPerHour: 27,
    timeInEvents: [ { type: 'TimeIn', date: '0044-03-15', hour: 900 } ],
    timeOutEvents: [ { type: 'TimeOut', date: '0044-03-15', hour: 1100 } ]
  }
  console.log(hoursWorkedOnDate(b, "0044-03-15"));
//Given an employee record with a date-matched timeInEvent and timeOutEvent
function wagesEarnedOnDate(emp,date){
    let money;
    money=emp.payPerHour
    return hoursWorkedOnDate(emp,date)*money;
}
console.log(wagesEarnedOnDate(cRecord,"0044-03-15"));
//Given an employee record with MULTIPLE date-matched timeInEvent and timeOutEvent
function allWagesFor(emp){
    let total=0;
    for(let i=0;i<emp.timeInEvents.length;i++){
        total+=wagesEarnedOnDate(emp,emp.timeInEvents[i].date)
    }
       return total;
    
    
}
console.log(allWagesFor(cRecord));
//Given an array of multiple employees
function calculatePayroll(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=allWagesFor(arr[i])
    }
    return total;
}
let emps= createEmployeeRecords([["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
["Natalia", "Romanov", "CEO", 150]]);
console.log(emps);

function findEmployeeByFirstName(emp,fName){
   return  emp.find(function(ele){
        return ele.firstName==fName;
})
}
console.log(findEmployeeByFirstName(emps,"Loki").familyName);