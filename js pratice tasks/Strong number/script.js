function isStrong(num) {
	let sum = 0;
	let n = num;
	console.log("n",n);
	while (n > 0) {
		let d = n % 10;
		console.log("d",d);
		sum += factorial(d);
		console.log("sum",sum);
		n = Math.floor(n / 10);
		console.log("n",n);
	}
	if(sum === num){
        console.log(num+" "+"is strong number");
    }else{
        console.log(num+" "+"is not strong number");
    };
	
}


function factorial(num) {
	console.log("factorial",num);
	if (num <= 1) {
		return 1;
	}else{
	return (num * factorial(num - 1));
    }
	}
isStrong(145); 