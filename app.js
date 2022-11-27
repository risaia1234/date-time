const date = new Date();

function getMonthNameShortHand() {
    const shorthand_months = ["Jan", "Feb", "March", "April", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    let num_month = date.getMonth();
    let month = shorthand_months[num_month - 1];
    return month;
}

function getMonthNameLongHand() {
    const longhand_months = ["January", "Febuary", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    let num_month = date.getMonth();
    let month = longhand_months[num_month -1 ];
    return month;
}

function getDayNameLongHand() {
    const longhand_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    let num_day = date.getDay();
    let day = longhand_days[num_day];
    return day;
}

function getDayNameShortHand() {
    const shorthand_days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const date = new Date();
    let num_day = date.getDay();
    let day = shorthand_days[num_day];
    return day;
}

function getYear() {
    const date = new Date();
    let year = date.getFullYear();
    return year;
}

function getDate() {
    const date = new Date();
    let date1 = date.getDate();
    return date1;
}

function formater(num) {
    let string = num.toString();
    string[0] = "0" + string;
    return string;
} 

function getHour() {
    const date = new Date();
    let hour = date.getHours();
    hour = formater(hour);
    return hour;
}

function getMinute() {
    const date = new Date();
    let minute = date.getMinutes();
    return minute;
}

function getSecond() {
    const date = new Date();
    let seconds = date.getSeconds();
    return seconds;
}

function getPeriod() {
    const date = new Date();
    let hour = date.getHours();
    if (hour >= 13) {
        return "PM";
    } else {
        return "AM";
    }
}


function updateClock() {
    const ids = ["dayname", "month", "daynumber", "year", "hours", "minutes", "seconds", "period"]
    let day = getDayNameShortHand();
    let month = getMonthNameLongHand();
    let date =getDate();
    let year =getYear();
    let hour =getHour();
    let minute = getMinute();
    let second = getSecond();
    let period = getPeriod();
    const elementList = [day, month, date, year, hour, minute, second, period];
    for (i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = elementList[i];
        document.getElementById(ids[4]).innerHTML = formater(elementList[4]);

    }
}


window.setInterval(updateClock, 1000)