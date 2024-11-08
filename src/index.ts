// enum weekDay {MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY};
enum weekDay {
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday"
};

const employee: {
    empName: string,
    dependents: number,
    committees: [string, boolean],
    payDay: string;
} = {
    empName: "Luca",
    dependents: 2,
    committees: ["Philantrophy", true],
    payDay: weekDay.FRIDAY
};

employee.committees.push("fabba1892, 200");
console.log(employee);
