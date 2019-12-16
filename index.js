// Your code here
let createEmployeeRecord = function(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeData) {
    return employeeData.map(array => { return createEmployeeRecord(array) })
}


let createTimeInEvent = function(employeeData, dateStamp){

    let date = dateStamp.split(' ')[0]
    let hour = dateStamp.split(' ')[1]

    employeeData.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return employeeData
}

let createTimeOutEvent = function(employeeData, dateStamp){

    let date = dateStamp.split(' ')[0]
    let hour = dateStamp.split(' ')[1]

    employeeData.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return employeeData
}

let hoursWorkedOnDate = function(employeeRecord, givenDate) {
    let timeIn = employeeRecord.timeInEvents.find(data => {
        return data.date === givenDate
    })

    let timeOut = employeeRecord.timeOutEvents.find(data => {
        return data.date === givenDate
    })

    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(employeeRecord, givenDate) {
    let total = hoursWorkedOnDate(employeeRecord, givenDate) * employeeRecord.payPerHour
    return parseFloat(total.toString())
}

let allWagesFor = function(employeeRecord) {
    let eligibleDates = employeeRecord.timeInEvents.map(data => {
        return data.date
    })

    let payable = eligibleDates.reduce(function(memo, d) {
        return memo + wagesEarnedOnDate(employeeRecord, d)
    }, 0)

    return payable
}

let findEmployeeByFirstName = function(employeeRecords, firstName) {
    let employee = employeeRecords.find(data => {
        return data.firstName === firstName
    })
    return employee
}

let calculatePayroll = function(employeeRecords) {
    return employeeRecords.reduce(function(memo, data){
        return memo + allWagesFor(data)
    }, 0)
}