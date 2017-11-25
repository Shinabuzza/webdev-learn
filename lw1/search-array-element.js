const arrMax = 10;
var arr = [];
var isFound = false;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
for (var i = 0; i < arrMax; i++) {  
  arr[i] = getRandomInt(0, 15);
  console.log(arr[i]); 
}

var inputNumber = prompt("Put number 0-15: ");
if ((inputNumber == "" ) || (isNaN (inputNumber) || (inputNumber == null))) {
  alert("Error!");
  windows.stop;
}
for (i = 0; i < arrMax; i++) {
  if (arr[i] == inputNumber)
    isFound=true;
} 
if (isFound) {
  alert('Element ' + inputNumber + ' is found!')
} else {
  alert('Element ' + inputNumber + ' is not found')
  }
if (inputNumber == null) { 
  alert('Press F5 for repeat');
}