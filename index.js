const createEmployeeRecord = function (arr){
    return {firstName:arr[0],familyName:arr[1],title:arr[2],payPerHour:arr[3],timeInEvents:[],timeOutEvents:[]}
}
const createEmployees = function(arr){
    return arr.map(createEmployeeRecord)
}
const createTimeInEvent = function(emp , time ){
    let [ date , hour ] = time.split(' ');
    hour = parseInt(hour , 10);
    const timeIn =  {
        type:"TimeIn",
        hour: hour,
        date: date  
    };  
     emp.timeInEvents.push(timeIn);
     return emp;
}
const createTimeOutEvent = function (emp , dateAndTime ){
    let [date , hour ] = dateAndTime.split(' ');
    hour = parseInt(hour , 10 );
    const timeOut = {
        type:"TimeOut",
        hour: hour,
        date: date
    }
    emp.timeOutEvents.push(timeOut);
    return emp;
}
    const  hoursWorkedOnDate = function(emp , searchDate ){
        let timeIn = emp["timeInEvents"].find(o => o.date === searchDate);
        let timeOut = emp["timeOutEvents"].find(o => o.date === searchDate);
        return (timeOut.hour-timeIn.hour)/100;
    }
    const wagesEarnedOnDate = function (emp , searchDate) {
        let payOwed = hoursWorkedOnDate(emp ,  searchDate);
        payOwed =  payOwed * emp.payPerHour;
        return payOwed;
    }

    const allWagesFor = function (emp) {
        let total = 0 ;
        emp.timeInEvents.forEach(element => {
           total += wagesEarnedOnDate(emp , element.date);
        });
        return total;
    }
   function findEmployeeByFirstName(emp , firstName){
        return emp.find(function(fn){
            return fn.firstName == firstName;
        });
    }
    const calculatePayroll = function(employees){
       return employees.reduce((m, e) => m + allWagesFor(e), 0)
    }
     
    const createEmployeeRecords = function(emp){
        return emp.map(e => createEmployeeRecord(e)) ;
    }