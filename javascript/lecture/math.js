// let a = 34.3944763;
// console.log(a.toFixed(2));
// console.log(a.toPrecision(6));
// console.log(a.toString());

// let x = new Number(20);
// console.log(x);

// let y = new Number(20);

// console.log(x == y); //false cause they are objects and objects are compared with references
// console.log(Boolean(null));  //false cause it dont reference any address

//Non primitive: data are compare with the basis of reference
//primitive : data are compared wit the basis of value

//Math Objects

// console.log(Math.abs(-4));

// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2); //has value only for 2 not others
// console.log(Math.sqrt(4)); //for others number use this value

// console.log(Math.ceil(2.3));
// console.log(Math.floor(4.9));

// console.log(Math.max(45,3,24,2));
// console.log(Math.min(3,23,4,13,4234,0,-3));

// console.log(Math.random()); //genereate value between 0 and 1 and where 0 is included and 1 is not

//random game 0 -9 value generate

// console.log(Math.floor(Math.random() * 10)+1); //1 to 10 

// console.log(Math.floor(Math.random()*6)+1);

//Math.random()*totalNumberOfOutcome+shift value
//generate number from 15 - 25
//Formula--> Math.floor(Math.random()*(max-min+1)) +min

// console.log(Math.floor(Math.random()*11)+15);

//OTP generate - 4 digit 1000 - 9999

// console.log(Math.floor(Math.random()*(9999-1000+1))+1000); //not secure dont use