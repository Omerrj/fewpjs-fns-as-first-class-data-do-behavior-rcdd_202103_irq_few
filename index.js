/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  const hour=timeString.splice(0,1);
  const min=timeString.splice(3,5);
  console.log(hour,min)
}

greet('12:20');
/* Write your implementation of displayMessage() */
