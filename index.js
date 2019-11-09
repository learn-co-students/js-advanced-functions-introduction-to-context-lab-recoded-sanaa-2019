// Your code here
//1
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    let obj = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
}


//2
function createEmployees(array) {

    let newArr = [];
    //creates two records
    for (const element of array) {
        // console.log(element);
        let test = createEmployeeRecord(element)
        newArr.push(test)
        console.log(test);
    }

    //return is an array of objects
    return newArr;
}

//3 
function createTimeInEvent(recordObj, timeIn) {
    //console.log(timeIn);
    let dateAndTime = timeIn.split(" ");

    recordObj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateAndTime[1]),
        date: dateAndTime[0]

    })
    return recordObj;
}

//4
function createTimeOutEvent(recordObj, timeOut) {

    let dateAndTime = timeOut.split(" ");
    recordObj.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateAndTime[1]),
        date: dateAndTime[0]

    })

    return recordObj;
}

//5
function hoursWorkedOnDate(recordObj, dateWork) {

    //console.log(dateWork); // i need to include the dateWork
    let findObjIn = recordObj.timeInEvents.find(e => e.date == dateWork);
    //console.log(findObjIn.hour);
    let findObjOut = recordObj.timeOutEvents.find(e => e.date == dateWork);
    //console.log(findObjOut.hour);

    let hoursOut = parseInt(findObjOut.hour.toString(10).slice(0, -2))
    let hoursIn = parseInt(findObjIn.hour.toString(10).slice(0, -2))

    let WorkHours = hoursOut - hoursIn;

    return WorkHours;
}



//6
function wagesEarnedOnDate(recordObj, earnDate) {

    let payOwed = recordObj.payPerHour * hoursWorkedOnDate(recordObj, earnDate)
    console.log(payOwed);
    return payOwed;
}

//7
function allWagesFor(recordObj) { //same record with multiple dates

    //console.log(allObj.timeInEvents.length);

    let MyObject = recordObj.timeInEvents

    let array = [];
    for (const element in MyObject) {
        // console.log(Object[element]["date"]);
        let PayAll = wagesEarnedOnDate(recordObj, MyObject[element]["date"])
        console.log(PayAll);
        array.push(PayAll);
        // console.log(array);
    }
    //accumulate the value of all dates worked by the employee 
    //console.log("this is the array" + array);
    return array.reduce(function (total, item) { return total += item; })
}

//8
function createEmployeeRecords(array) { //eactly the same as createEmployees function

    let newArr = [];
    //creates two records
    for (const element of array) {
        let test = createEmployeeRecord(element)
        newArr.push(test)
        // console.log(newArr);
    }

    //return is an array of objects
    return newArr;
}


//9
function findEmployeebyFirstName(array, firstName) {

       return  array.find(function (obj) {
        return obj.firstName == firstName;
    });

}

//10
function calculatePayroll(array) { //returns sum of pay of all employees for all dates
  
    let Allarray = []
  for (const employee of array){
      //add all employess in a new array
        Allarray.push(allWagesFor(employee)) //all dates for each employee
  }
    return Allarray.reduce((total, item) => total += item)
}
     




    