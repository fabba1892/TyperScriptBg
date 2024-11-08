//let size = "Med";
//const SIZE = "Med";

function compareWords(
    first: string, second: string):
    "first is earlier" | "same" | "first is later" {
    if (first < second)
        return "first is earlier";
    if (first > second) return "first is later";
    return "same";
}
console.log(compareWords("Lua", "Luca"));
