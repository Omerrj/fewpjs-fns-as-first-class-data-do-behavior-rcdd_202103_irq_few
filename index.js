/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  const hour=timeString.split(':')[0];

console.log(hour);
  if(hour<12){
    return 'Good Morning'
  }else if(hour>=12 && hour<=17){
    return 'Good Afternoon'
  }else return 'Good Evening'

}
greet('8:40');
/* Write your implementation of displayMessage() */
