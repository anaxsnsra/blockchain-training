let result = 1;
let count = 1;
var input = 10;
var sumCount = 0;
var sumResult = 0;

while(count <= input){
	
  result = parseInt(result * count)
  
  count++
}

const list = result.toString().split("")
while(sumCount < list.length){
	sumResult = parseInt(sumResult) + parseInt(list[sumCount])
  sumCount++
}

console.log(sumResult)