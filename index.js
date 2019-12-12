// Your code here
function createEmployeeRecord(Arr){
let Employ={
  firstName:Arr[0],
   familyName:Arr[1],
    title:Arr[2],
     payPerHour:Arr[3],
     timeInEvents:[],
     timeOutEvents:[],
}
  return Employ;
}
 function createEmployees(Arr) {
 let otherarr = [];
Arr.forEach(element => {
 otherarr.push(createEmployeeRecord(element))
})
 return otherarr
 }
function createTimeInEvent(object, timeIn) {
let splittedTime = timeIn.split(" ");
let newEvent = {
    type: "TimeIn",
    hour: parseInt(splittedTime[1]),
    date: splittedTime[0]
 }
object.timeInEvents.push(newEvent)
return object }
function createTimeOutEvent(object, timeOut) {
 let splittedTime = timeOut.split(" ");
let newEvent = {
  type: "TimeOut",
  hour: parseInt(splittedTime[1]),
  date: splittedTime[0]

}
object.timeOutEvents.push(newEvent)
return object
}





function hoursWorkedOnDate(object, workHours) {

let In
let Out
object.timeInEvents.forEach(item => {
  if (item.date === workHours) {
      In = item
     
  }
})
object.timeOutEvents.forEach(item => {
if (item.date === workHours) {
    Out = item
   
}
})


let hIn = parseInt(In.hour.toString(10).slice(0, -2))
let hOut = parseInt(Out.hour.toString(10).slice(0, -2))

let workingHours = hOut - hIn;

return workingHours;
}
function wagesEarnedOnDate(object, workHours) {

  let In = object.timeInEvents.find(e => e.date == workHours);
  let Out = object.timeOutEvents.find(e => e.date == workHours);

  let hIn = parseInt(In.hour.toString(10).slice(0, -2))
  let hOut = parseInt(Out.hour.toString(10).slice(0, -2))

  let workingHours = hOut - hIn;
  return workingHours * object.payPerHour

}
function allWagesFor(object) {
let arr = [];
for (const item in object.timeInEvents) {
    let payments = wagesEarnedOnDate(object, object.timeInEvents[item].date)
    arr.push(payments);}
let num = 0;
arr.forEach(item => {
    num += item})
return num
}
function createEmployeeRecords(arr) {
let other = [];
arr.forEach(element => {other.push(createEmployeeRecord(element))})
return other
}



function findEmployeebyFirstName(object, fn) {
let name
object.forEach(item => {
if (item.firstName == fn) {
    name = item
  
}
})
return name
}

function calculatePayroll(object) {
let arr = [];
let num = 0;

object.forEach(item => {arr.push(allWagesFor(item))})
arr.forEach(item => {num += item})
return num
} 