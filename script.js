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
const person = {
    firstName : "Harsh" ,
    lastName : "Singh" ,
    age : 24 ,
    eyeColor : "black" ,

    fullName : function() {
        return this.firstName + " " + this.lastName ;
    }
}
delete person.eyeColor ;

person.glasses = "rectangle" 
let me = person ;
console.log(me)

const person2 = new Object({
    firstName : "John" 
})



// dates
// const d = new Date()
// console.log(d) 
// console.log(d.toDateString())
// console.log(d.getMonth())
// getSeconds , getDay , getFullYear etc




// Array
const cars = ['BMW' , 'Benz' , 'Audi']
const cars1 =  new Array('BMW' , 'Benz' , 'Audi')
console.log(cars[0])
console.log(cars1[2])

const car = cars.toLocaleString()
console.log(car)
console.log(cars)
console.log(cars[cars.length-1])

// access the all elements
for(let i=0;i<cars.length;i++) {
    console.log(cars[i]) ;
}

const numbers = [40]
const number = new Array(40) ;
console.log(numbers)
console.log(number)

// identify array
console.log(Array.isArray(numbers))

// Basic Array Methods 
console.log(cars.length)
console.log(cars.toString())
console.log(cars.at(0))
console.log(cars.join(" * "))
console.log(cars.pop())
console.log(cars.push("Ferrari"))
console.log(cars.shift())
console.log(cars.unshift("Audi"))
console.log(Array.isArray(cars))
console.log(cars.concat(cars1))
cars.splice(2,0,"Ford","Jaguar")
console.log(cars)



