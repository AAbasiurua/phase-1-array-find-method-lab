// code your solution here

// const year = record.find(winYear).year;


// Write a function called superbowlWin() in index.js:

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined
// Remember the workflow:

// Install the dependencies using npm install.
// Run the tests using npm test.
// Read the errors; vocalize what they're asking you to do.
// Write code; repeat steps 2 and 3 often until a test passes.
// Repeat as needed for the remaining tests.
// After you have all the tests passing, remember to commit and push your changes up to GitHub, then submit your work to Canvas using CodeGrade.

// Conclusion
// Array.prototype.find() is a built-in function in JavaScript which is used to get the value of the first element in the array that satisfies the provided condition. With this, you can quickly check all the elements of the array and return the first match.

// Resources
// MDN: Array.prototype.find()Links to an external site.
// This tool needs to be loaded in a new browser window


const winYear = function(record) {
    if(record.result === "W") {
        return record.result === "W"
    }
}

function superbowlWin(record) {
    const win = record.find(winYear);
    if(win){
        console.log("the win.year is:", win.year)
        return win.year
    } else {
        return undefined;
    }
}




