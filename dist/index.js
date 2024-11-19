"use strict";
const Luca = {
    adminID: 123,
    cName: "Luca",
    dateJoined: new Date("2020-08-07")
};
function getDaysJoined(competitor) {
    var today = new Date();
    if ("dateJoined" in competitor) {
        var daysJoined = today.getTime() - competitor.dateJoined.getTime();
        return daysJoined / (1000 * 60 * 60 * 24);
    }
}
console.log(getDaysJoined(Luca));
