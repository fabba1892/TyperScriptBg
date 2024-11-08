"use strict";
//let size = "Med";
//const SIZE = "Med";
function compareWords(first, second) {
    if (first < second)
        return "first is earlier";
    if (first > second)
        return "first is later";
    return "same";
}
console.log(compareWords("Lua", "Luca"));
