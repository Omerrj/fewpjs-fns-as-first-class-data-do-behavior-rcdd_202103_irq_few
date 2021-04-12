/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  const hour=timeString.slice(0,2).Number;
  const min=timeString.slice(3,5).Number;

  if(hour<12){
    return 'Good Morning'
  }else if(hour>=12&&hour<=5){
    return 'Good Afternoon'
  }

}
/* Write your implementation of displayMessage() */
