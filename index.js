const createEmployeeRecord = function (arr){
    return {firstName:arr[0],familyName:arr[1],title:arr[2],payPerHour:arr[3],timeInEvents:[],timeOutEvents:[]}
}
const createEmployees = function(array){
    return array.map(createEmployeeRecord)
}
const createTimeInEvent = function(emp,time){
    let [ d , h] = time.split(' ');
    h = parseInt(h , 10);
    const tIn =  {
        type:"TimeIn",
        hour: h,
        date: d  
    };  
     emp.timeInEvents.push(tIn);
     return emp;
}

const createTimeOutEvent = function (emp,time){
    let [d , h ] = time.split(' ');
    h = parseInt(h , 10 );
    const tOut = {
        type:"TimeOut",
        hour: h,
        date: d
    }
    emp.timeOutEvents.push(tOut);
    return emp;
}
    const  hoursWorkedOnDate = function(emp,findD){
        let tIn = emp["timeInEvents"].find(d=> d.date === findD);
        let tOut = emp["timeOutEvents"].find(d => d.date === findD);
        return (tOut.hour-tIn.hour)/100;
    }
    const wagesEarnedOnDate = function (emp ,findD) {
        let pay = hoursWorkedOnDate(emp , findD);
        pay =  pay * emp.payPerHour;
        return pay;
    }

    const allWagesFor = function (emp) {
        let wage = 0 ;
        emp.timeInEvents.forEach(element => {
           wage += wagesEarnedOnDate(emp , element.date);
        });
        return wage;
    }
    const findEmployeeByFirstName = function(emp , fName){
        return emp.find(function(fname){
            return fname.firstName == fName;
        });
    }
    const calculatePayroll = function(emp){
       return emp.reduce((res,val) => res + allWagesFor(val), 0)
    }
     
    const createEmployeeRecords = function(emp){
        return emp.map(empr => createEmployeeRecord(empr)) ;
    }