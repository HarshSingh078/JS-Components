// // document.getElementById("p1").innerHTML = "Have a good day" ;

// x = 5 ;
// y = 10 ;
// z = x + y ;

// console.log(z) ;

// let a = 10 ;
// let b = "x" ;
// let c = 50 ;

// console.log(a+b+c) ;
// console.log(b+a+c) ;
// console.log(b+a+c) ;
// console.log(a+c+b)


// let firstName = "Harsh" ;
// let lastName = " Singh" ;

// let fullName = `The fullName is : ${firstName}${lastName}` ;
// let name = firstName + lastName
// console.log(name)
// console.log(fullName)


// // string methods
// let text = "Hii Good Morning" 
// let text2 = "Have a good day!"
// console.log(text.length) ;
// console.log(text.charAt(0))
// console.log(text.charCodeAt(0))
// console.log(text.concat(" ", text2))
// console.log(text.slice(5))
// console.log(text.slice(5,15)) 
// console.log(text.slice(-15)) 

// console.log(text.toLocaleLowerCase())
// console.log(text.toLocaleUpperCase())
// console.log(text.trim())
// console.log(text.repeat(2))
// console.log(text.replace("Hii","Hey"))

// // search , match , matchAll , startsWith , endsWith , includes , indexOf , lastIndexOf 

// let num1 = "100" 
// let num2 = "50" 
// let prod =  num1 * num2 ;
// let prod2 =  num1 - num2 ;
// let prod3 =  num1 / num2 ;
// console.log(prod)
// console.log(prod2)
// console.log(prod3)





// // number methods 
// let NUM1 = 100 ;
// console.log(NUM1.toString())
// console.log(typeof(NUM1))

// // toexponential , toPrecision() , valueOf() , 
// console.log(Number(num1))
// console.log(Number(true))
// console.log(Number(false))
// console.log(parseInt(num1))

// console.log(Number.isInteger(10))
// console.log(Number.isFinite(10))
// console.log(Number.isNaN(10))
// console.log(Number.isSafeInteger(10))

// console.log(Number.parseInt(num1))

// // Bitwise 
// // & , | , ~ , ^ , << , >> , >>>



// // table of a number 
// // let number = prompt("Enter your number") 
// // for(let i=1;i<=10;i++) {
// //     console.log(`The table of ${number} is : ${number*i}`) ;
// // }


// // function declaration 
// function add(a ,b) {
//     return a + b ;
// }

// let sum = add(5,10) ;
// console.log(sum) ;

// // default parameters
// function product(x , y=10) {
//     return x * y ;
// }

// let result = product(5) ;
// console.log(result)


// // function expressions
// const x = function (a, b) {return a * b};

// let z = x(4, 3);


// function call before the function declaration
// let sum1 = add(2,3) 
// function add(a,b) {return  a + b }
// console.log(sum1)


// // arrow function 
// let myFunction = (a , b) => {return a+b} ;
// let result = myFunction(11 , 13)
// console.log(result)


// objects 
// const person = {
//     firstName : "Harsh" ,
//     lastName : "Singh" ,
//     age : 24 ,
//     eyeColor : "black" ,

//     fullName : function() {
//         return this.firstName + " " + this.lastName ;
//     }
// }
// delete person.eyeColor ;

// person.glasses = "rectangle" 
// let me = person ;
// console.log(me)

// const person2 = new Object({
//     firstName : "John" 
// })



// // dates
// // const d = new Date()
// // console.log(d) 
// // console.log(d.toDateString())
// // console.log(d.getMonth())
// // getSeconds , getDay , getFullYear etc




// // Array
// const cars = ['BMW' , 'Benz' , 'Audi']
// const cars1 =  new Array('BMW' , 'Benz' , 'Audi')
// console.log(cars[0])
// console.log(cars1[2])

// const car = cars.toLocaleString()
// console.log(car)
// console.log(cars)
// console.log(cars[cars.length-1])

// // access the all elements
// for(let i=0;i<cars.length;i++) {
//     console.log(cars[i]) ;
// }

// const numbers = [40]
// const number = new Array(40) ;
// console.log(numbers)
// console.log(number)

// // identify array
// console.log(Array.isArray(numbers))

// // Basic Array Methods 
// console.log(cars.length)
// console.log(cars.toString())
// console.log(cars.at(0))
// console.log(cars.join(" * "))
// console.log(cars.pop())
// console.log(cars.push("Ferrari"))
// console.log(cars.shift())
// console.log(cars.unshift("Audi"))
// console.log(Array.isArray(cars))
// console.log(cars.concat(cars1))
// cars.splice(2,0,"Ford","Jaguar")
// console.log(cars)


// // search in array
// let position = cars.indexOf("BMW")+1 ;
// let position2 = cars.lastIndexOf("BMW")+1 ;
// cars.includes("ford")
// find , findIndex , findLast , findLastIndex




// sort
// sort() , reverse() , toSorted() , toReversed() , Math.max() , Math.min() , Numeric Sort , Random Sort() .


// sets 
// const letters = new Set(["a" , "b" , "c" , "d"])
// letters.add("e")
// const f = "f" 
// letters.add(f)
// for(let i=0;i<letters.length;i++) {
//     console.log(letters[i])
// }
// console.log(letters)
// console.log(typeof(letters))
// console.log(letters.size);
// let answer = letters.has("a")
// console.log(answer)

// const myIterator = letters.values();

// // List all Values
// let text = "";
// for (const entry of myIterator) {
//   text += entry;
// }

// const myIterator2 = letters.keys();

// // List all Elements
// let text1 = "";
// for (const x of myIterator) {
//   text += x;
// }


// Map
// const fruits = new Map() ;
// fruits.set("apples" ,  150) ;
// fruits.set("banana" , 70) ;
// fruits.set("orange" , 100) ;

// const fruits2 = new Map(["apples" , 150], ["banana",70], ["orange" , 100]) ;
// // add and change map values with set method

// console.log(fruits.get("apples")) ;
// console.log(typeof(fruits)) 
// console.log(fruits instanceof Map)
// console.log(fruits.size())
// console.log(fruits.delete("orange"))
// fruits2.clear()
// console.log(fruits.has("apples"))
// // List all entries
// let text2 = "";
// for (const x of fruits.entries()) {
//   text2 += x;
// }

// // list all keys 
// let text3 = "" ;
// for(const x of fruits.keys()) {
//     text3 += x ;
// }
// console.log(text2)
// console.log(text3)

// // List all values
// let text4 = "";
// for (const x of fruits.values()) {
//   text4 += x;
// }

// // Create Objects
// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};

// // Create a Map
// const fruits3 = new Map();

// // Add new Elements to the Map
// fruits3.set(apples, 500);
// fruits3.set(bananas, 300);
// fruits3.set(oranges, 200);

// const myMap = new WeakMap() 
// let myObj = {fname : 'John' , lname : 'Doe'} ;
// myMap.set(myObj , 'player') ;
// let type = myMap.get(myObj) ;
// console.log(type) ;



// Iterator 
// const myIterator = Iterator.from([1,2,3]) ;
// let text = "" ;
// for(const x of myIterator) {
//     text += x ;
// }
// console.log(text) ;

// const myIterator2 = Iterator.from([32,13,33,40]) ;
// const filteredIterator = myIterator2.filter(x=>x>18) ;
// let text2 = "" ;
// for(const x of filteredIterator) {
//     text2 += x + "<br>";
// }
// console.log(text2)

// Create an iterator
// const myIterator = Iterator.from("123456789");

// // Now you can use the map method
// const mappedIterator = myIterator.map(x => x * 2);

// // Create an iterator
// const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

// // Map the Iterator
// const mappedIterator = myIterator.flatMap(x => [x, x * 10]);

// const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

// // Take the first five elements
// const firstFive = myIterator.take(5);

// // Create an iterator
// const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

// // Remove the first five
// const firstFive = myIterator.drop(5);

// // Create an iterator
// const myIterator = Iterator.from([3, 10, 18, 30, 20]);

// // Find first greater than 18
// let result = myIterator.find(x => x > 18);

// // Create an Iterator
// const myIterator = Iterator.from([175, 50, 25]);

// // Reduce the Iterator
// let result = myIterator.reduce(myFunc);

// // Create an Iterator
// const myIterator = Iterator.from("123456789");

// // Is every Element greater than 7?
// let result = myIterator.every(x => x > 7);

// // Create an Iterator
// const myIterator = Iterator.from("123456789");

// // Is some Element greater than 7?
// let result = myIterator.some(x => x > 7);

// // Create an iterator
// const myIterator = Iterator.from("123456789");

// // Iterate over all elements
// let text = "";
// myIterator.forEach (x => text += x);



// Math
// console.log(Math.max(10,8)) ;
// // ceil , floor , round , trunc .
// console.log(Math.sign(-40)) ;
// console.log(Math.pow(4,9))
// // math.sqrt , math.abs , 
// console.log(Math.sin(90 * Math.PI/180))
// console.log(Math.cos(90 * Math.PI/180))
// console.log(Math.random())
// console.log(Math.log(10))
// console.log(Math.log2(8))
// console.log(Math.log10(1000))


// Regular Expressions
// let text = "Visit W3Schools" ;
// let n = text.search(/w3schools/i) ;
// let n = text.match(/W3Schools/) ;
// let n = text.replace(/W3Schools/i , "Microsoft") ;
// let text2 = "Visit W3Schools" ;
// let n = text2.search(/W3Schools/) ;
// let text = "Black, white, red, green, blue, yellow.";

// let result = text.match(/red|green|blue/g);
// let text = "Is this all there is?";
// const pattern = /is/g;

// let result = text.match(pattern);

// let text = "Visit W3Schools";
// const pattern = /w3schools/i;
// let result = text.match(pattern);

// let text = "Give 100%!";
// const pattern = /\d/g;

// let result = text.match(pattern);
// let text = "Give 100%!";
// const pattern = /\w/g;

// let result = text.match(pattern);

// let text = "1, 100 or 1000?";
// const pattern = /10?/g;

// let result = text.match(pattern);

// Match beginning of string
// const pattern = /^W3Schools/;

// // Match end of string
// const pattern2 = /W3Schools$/;

// const pattern = /^W3Schools/;
// let text = "W3Schools Tutorial";

// let result = pattern.test(text); // true

// const pattern = /W3Schools$/;
// let text = "Hello W3Schools";

// let result = pattern.test(text); // true

// let text = "aaaabb";
// const pattern = /(aa)(bb)/d;

// let result = text.match(pattern);

// let text = "Line\nLine.";
// const pattern = /Line./gs;

// let result = text.match(pattern);

// let text = "abc def ghi";
// const pattern = /\w+/y;

// // Start match from position 4
// pattern.lastIndex = 4;
// let result = text.match(pattern);

// let text = "䷀";
// const pattern = /\u{04DC0}/u;

// // Returns true:
// let result = pattern.test(text);

// let text = "Hello 😄";
// const pattern = /\p{Emoji}/v;

// // Returns true:
// let result = pattern.test(text);

// const pattern = /W3Schools/s;

// let result = pattern.dotAll;

// const pattern = /W3Schools/g;

// let result = pattern.global;

// let text = "This is W3School";
// const pattern = /[A-Z]/g;

// let result = text.match(pattern)
// console.log(result) ;





// Events 
