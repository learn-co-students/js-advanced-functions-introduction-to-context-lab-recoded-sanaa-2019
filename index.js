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
function createEmployees([one, two]) {

    let array = [one, two];
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
function createTimeOutEvent(OutObj, timeOut) {

    let dateAndTime = timeOut.split(" ");
    OutObj.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateAndTime[1]),
        date: dateAndTime[0]

    })

    return OutObj;
}

//5
function hoursWorkedOnDate(workObj, dateWork) {

    //console.log(dateWork); // i need to include the dateWork
    let findObjIn = workObj.timeInEvents.find(e => e.date == dateWork);
    //console.log(findObjIn.hour);
    let findObjOut = workObj.timeOutEvents.find(e => e.date == dateWork);
    //console.log(findObjOut.hour);

    let hoursOut = parseInt(findObjOut.hour.toString(10).slice(0, -2))
    let hoursIn = parseInt(findObjIn.hour.toString(10).slice(0, -2))

    let WorkHours = hoursOut - hoursIn;

    return WorkHours;
}

//6
function wagesEarnedOnDate(earnObj, earnDate) {

    let payOwed = earnObj.payPerHour * hoursWorkedOnDate(earnObj, earnDate)
    console.log(payOwed);
    return payOwed;
}
//wagesEarnedOnDate(newObj, "44-03-15")

//7
function allWagesFor(allObj) {

    //console.log(allObj.timeInEvents.length);

    let MyObject = allObj.timeInEvents

    let array = [];
    let PayAll = 0;
    for (const element in MyObject) {
        // console.log(Object[element]["date"]);
        let PayAll = wagesEarnedOnDate(allObj, MyObject[element]["date"])
        console.log(PayAll);
        array.push(PayAll);
        // console.log(array);
    }
    //accumulate the value of all dates worked by the employee 
    //console.log("this is the array" + array);
    return array.reduce(function (total, item) { return total += item; })
}

//8
    function calculatePayroll(array) { //returns sum of pay of all employees for all dates
        let sum = array.map((e) => allWagesFor(e))
        return sum.reduce((num, sum) => num + sum)
    }


    //9
    function createEmployeeRecords(src) {

        let newArr = [];
        //creates two records
        for (const element of src) {
            let test = createEmployeeRecord(element)
            newArr.push(test)
            // console.log(newArr);
        }

        //return is an array of objects
        return newArr;
    }


    //10
    function findEmployeebyFirstName(array, firstName) {

        return array.find(function (obj) {
            return obj.firstName == firstName;
        });

    }

