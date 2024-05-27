// *Question 122:* Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
// *Explain & TIP:* The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.
// Initializes the counter at 10
var counter = 10;
// This while loop counts down from 10 to 1 and stops at 5
while (counter > 0) {
    if (counter === 5) {
        break; // Exits the loop when counter reaches 5
    }
    console.log(counter);
    counter--; // Decrements the counter
}
