//Get current date in french format
function currentDateFrenchFormat() {
    var currentdate = new Date();
    return currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear()
}

//Get current datetime in french format
function currentDatetimeFrenchFormat() {
    var currentdate = new Date();
    return currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds()
}

//Add days, months, years, hours, minutes or seconds to current datetime in french format
function addToCurrentDatetimeFrenchFormat({ day, month, year, hour, minute, second }) {
    var currentdate = new Date();
    return day ? (currentdate.getDate() + day) : currentdate.getDate() + "/" + month ? (currentdate.getMonth() + month) : currentdate.getMonth() + "/" + year ? (currentdate.getFullYear() + year) : currentdate.getFullYear() + " " + hour ? (currentdate.getHours() + hour) : currentdate.getHours() + ":" + minute ? (currentdate.getMinutes() + minute) : currentdate.getMinutes() + ":" + second ? (currentdate.getSeconds() + second) : currentdate.getSeconds()
}

//Get current date in english format
function currentDateEnglishFormat() {
    var currentdate = new Date();
    return currentdate.getFullYear() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getDate()
}

//Get current datetime in english format
function currentDatetimeEnglishFormat() {
    var currentdate = new Date();
    return currentdate.getFullYear() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getDate() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds()
}

//Add days, months, years, hours, minutes or seconds to current datetime in english format
function addToCurrentDatetimeEnglishFormat({ day, month, year, hour, minute, second }) {
    var currentdate = new Date();
    return year ? (currentdate.getFullYear() + year) : currentdate.getFullYear() + "-" + month ? (currentdate.getMonth() + month) : currentdate.getMonth() + "-" + day ? (currentdate.getDate() + day) : currentdate.getDate() + " " + hour ? (currentdate.getHours() + hour) : currentdate.getHours() + ":" + minute ? (currentdate.getMinutes() + minute) : currentdate.getMinutes() + ":" + second ? (currentdate.getSeconds() + second) : currentdate.getSeconds()
}

//Find the greater date between two dates
function whoIsGreaterBetweenDatetime(firstDatetime, lastDatetime) {
    console.log("First Datetime: ", new Date(firstDatetime));
    console.log("Last Datetime: ", new Date(lastDatetime));
    return new Date(firstDatetime) > new Date(lastDatetime) ? firstDatetime : lastDatetime
}

//Convert Timestamp to Date in french format
function timestampToDateFrench(timestamp) {
    var frDate = new Date(timestamp);
    return frDate.getDate() + '/' + (frDate.getMonth() + 1) + '/' + frDate.getFullYear();
}

//Convert Timestamp to Date in english format
function timestampToDateEnglish(timestamp) {
    var frDate = new Date(timestamp);
    return frDate.getFullYear() + '-' + (frDate.getMonth() + 1) + '-' + frDate.getDate();
}

module.exports = {
    currentDateFrenchFormat,
    currentDatetimeFrenchFormat,
    currentDateEnglishFormat,
    currentDatetimeEnglishFormat,
    whoIsGreaterBetweenDatetime,
    addToCurrentDatetimeFrenchFormat,
    addToCurrentDatetimeEnglishFormat,
    timestampToDateFrench,
    timestampToDateEnglish
}