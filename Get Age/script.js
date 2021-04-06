function getDate() {
    var today = new Date();
    var dd = today.getDate();
    if (dd < 10) dd = '0' + dd
    var mm = today.getMonth() + 1;
    if (mm < 10) mm = '0' + mm
    var yyyy = today.getFullYear();
    var currentDate = String(yyyy + '.' + mm + '.' + dd)
    return currentDate;
}

var daysInMonth = [31, 28, 31, 30, 30, 30, 31, 31, 30, 31, 30, 31];
var numberOfLeapYears = 0

function getBirthDate() {
    var birthDate = prompt("Give me your birth date in this format: yyyy.mm.dd");
    var birthYear = Number(birthDate.slice(0, 4));
    var birthMonth = Number(birthDate.slice(5, 7));
    var birthDay = Number(birthDate.slice(8, 10));

    var currentDate = getDate()

    function daysUntilNewYear() {
        var daysUntilNextMonth = daysInMonth[birthMonth - 1] - birthDay;
        var monthUntilNewYear = daysInMonth.slice(birthMonth, 12).reduce((a, b) => a + b, 0);
        var daysUntilNewYear = daysUntilNextMonth + monthUntilNewYear;
        return daysUntilNewYear;
    }

    var untilNewYear = daysUntilNewYear()

    function daysThisYear() {
        var DaysThisMonth = Number(currentDate.slice(8, 10));
        var monthThisYear = daysInMonth.slice(0, Number(currentDate.slice(5, 7)) - 1).reduce((a, b) => a + b, 0);
        var daysThisYear = DaysThisMonth + monthThisYear;
        return daysThisYear;
    }

    var thisYear = daysThisYear()

    function leapYears() {
        for (var i = birthYear; i < currentDate.slice(0, 4); i++) {
            if (i % 4 == 0) {
                numberOfLeapYears++;
            }
        }
    }

    if (birthYear % 4 == 0) {
        if (birthMonth > 1) {
            numberOfLeapYears -= 1;
        }
    }

    leapYears()

    var ageInDays = thisYear + ((currentDate.slice(0, 4) - birthYear - 1) * 365) + untilNewYear + numberOfLeapYears;
    var text = document.createTextNode('You are ' + ageInDays + ' days old.');
    document.getElementById("result").innerHTML = ''
    document.getElementById("result").appendChild(text);
}

function reset() {
    document.getElementById("result").innerHTML = ''
    var resetText = document.createTextNode('Your age will be displayed here!');
    document.getElementById("result").appendChild(resetText);
}