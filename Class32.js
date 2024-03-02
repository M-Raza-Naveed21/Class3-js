// Basic loop
for (var i = 1; i <= 5; i++){
	console.log(i)
}

//Summation for loop
let sum =0
for(let i = 1; i <=10; i++){
	sum += i;
}
console.log(sum);

//Multipication loop
let number = 5
for(let i = 1; i <=5; i++){
	console.log(number*i)
}

//Resverse counting for loop
for (var i = 10; i >=1; i--){
	console.log(i);
}

let pattern =""
for(let i=1; i<=10; i++){
	let pattern ="";
	for(let j=1; j<=i; j++){
		pattern+= '*';
	}
	console.log(pattern);
}
