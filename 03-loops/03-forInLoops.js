var student = { name: "Harry", awesome: true, degree: "javaScript", week: 1 };

for (item in student) {
    console.log(item);
}

// Returns this:   name
//                 awesome
//                 degree
//                 week

var student = { name: "Harry", awesome: true, degree: "javaScript", week: 1 };

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

// // Returns this:   name
//                    Harry
//                    awesome
//                    true
//                    degree
//                    javaScript
//                    week


let pieArray = ['cherry', 'apple', 'pecan'];
for (let chad in pieArray) {
    console.log(chad);
}                               // Returns: 0, 1, 2

//Challenge, Write a for in loop that capatilizes the first letter of a student's name
let studentName = 'hArRy';
var capName;
for (let n in studentName) {
    if (n == 0) {                                  // Here, 0 stands fir first letter of name //
        capName = studentName[n].toUpperCase();
    } else {
      capName += studentName[n].toLowerCase();
    }
}
console.log(capName);

    