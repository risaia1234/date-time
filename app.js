const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();
const time_parts = [hour, minute, seconds];
const day = date.getDay();
//const month = date.getMonth()
//console.log(month)
/*Date.prototype.theMonth = function {
    if (this.getMonth() == 0) {return "January"};
    if (this.getMonth() == 1) {return "Febuary"};
    if (this.getMonth() == 2) {return "March"};
    if (this.getMonth() == 3) {return "April"};
    if (this.getMonth() == 4) {return "May"};
    if (this.getMonth() == 5) {return "June"};
    if (this.getMonth() == 6) {return "July"};
    if (this.getMonth() == 7) {return "August"};
    if (this.getMonth() == 8) {return "Septmeber"};
    if (this.getMonth() == 9) {return "October"};
    if (this.getMonth() == 10) {return "November"};
    if (this.getMonth() == 11) {return "December"};
}

const month = date.theMonth();
console.log(month);
*/
document.getElementById("time").innerHTML = moment();


//console.log(moment());