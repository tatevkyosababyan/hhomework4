const starikner = function(zvyozd){
	if (zvyozd<=0){
		return '';
	}
	return '*' + starikner(zvyozd-1);
	
};
const spaceikner = function(prabel){
	if (prabel<=0){
		return '';
	}
	return ' ' + spaceikner(prabel-1);
};

const triangleStars = function(mrut){
	if (mrut <=0){
		return '';
	}
	console.log(spaceikner(num - mrut) + starikner(mrut*2-1));
	return triangleStars(mrut-1);
}
const num = 45;
console.log(triangleStars(num))


const pow = function(base, n){
	if ( n===1){
		return base;
	}
	if (base <= 1 || n < 1){
		return;
	}
	return base * pow(base, n-1);

}
console.log(pow(3,2));




const reverse = function(str){
	if(str.length <= 0){
		return "";
	}
	debugger
	return str[str.length-1] + reverse(str.substr(0,str.length-1));
}


const starsOfTheUniverse = function(number){
	if (number === 0){
		return '';
	}
	return "* " + starsOfTheUniverse(number-1);
}
const spaces = function(bacatik){
	if (bacatik === 0){
		return '';
	}
	return " *" + spaces(bacatik-1);
}
const boghos = function(a, b){
	if (b <= 0){
		return '';
	}
	console.log(starsOfTheUniverse(a));
	console.log(spaces(a));
	return boghos(a, b-1);
}

const checkerboard = function(square){
	if (square % 2 === 0){
		return boghos(square, square/2);
	}
	else {
		boghos(square, (square-1)/2);
		console.log(starsOfTheUniverse(square));
		return "";
	}
}
console.log(checkerboard(55));

