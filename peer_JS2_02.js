// step 1
var value = 85;

//step 2
if (value >= 86) {
	value += 62;
} else {
	value -= 45;
};
console.log(value);
//step 3
value+="22";
console.log(value);
//step 4
var array= [];

for (var i=0; i<value.length; i++) {
	array[i]=value.charAt(i);
}
console.log(array);
console.log(value);

//step 5

array.pop();
array.shift();

console.log(array);

//step 6

