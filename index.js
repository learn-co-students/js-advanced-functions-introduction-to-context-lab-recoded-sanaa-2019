// Your code here


const createEmployeeRecord=function(employeeRecord){
    return {
        firstName:employeeRecord[0],
        familyName:employeeRecord[1],
        title:employeeRecord[2],
        payPerHour:employeeRecord[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}



const createEmployees=function(arr){
  let myArr=arr.map(item=>createEmployeeRecord(item));
  return  myArr;
}



const createTimeInEvent=function(obj,datestamp){
    let bpRecord=datestamp.split(' ');
    let newEvent ={
        type:"TimeIn",
         date:bpRecord[0],
        hour:parseInt(bpRecord[1]),
    }
    obj.timeInEvents.push(newEvent);
    return obj;
}



const createTimeOutEvent=function(obj,datestamp){
    let bpRecord=datestamp.split(' ');
    let newEvent ={
        type:"TimeOut",
        hour:parseInt(bpRecord[1]),
        date:bpRecord[0]
    }
    obj.timeOutEvents.push(newEvent);
    return obj;
}



const hoursWorkedOnDate=function(obj,workHour){
    let hourIn=obj.timeInEvents.find(e=>e.date==workHour);
    let hourOut=obj.timeOutEvents.find(e=>e.date==workHour);
    let hourWorked=(hourOut.hour-hourIn.hour)/100;
    return hourWorked;
}


const wagesEarnedOnDate=function(obj,date){
    let datepay=obj.payPerHour*hoursWorkedOnDate(obj,date);
    return datepay;
}



const allWagesFor = function (obj) {
    let newArr = obj.timeInEvents.map(e=>e.date);
    let payable = newArr.reduce((memo,d)=>memo + wagesEarnedOnDate(obj,d),0);
    return payable
}


const findEmployeeByFirstName =function(srcArray,firstName){
return srcArray.find(e=>e.firstName == firstName);
}



const calculatePayroll=function(srcArray){
return srcArray.reduce((memo,d)=>memo+allWagesFor(d),0);
}


const createEmployeeRecords = function(srcArray){
    return srcArray.map(e=> createEmployeeRecord(e));
  }
