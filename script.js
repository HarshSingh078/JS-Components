// document.getElementById("p1").innerHTML = "Have a good day" ;

x = 5 ;
y = 10 ;
z = x + y ;

console.log(z) ;

let a = 10 ;
let b = "x" ;
let c = 50 ;

console.log(a+b+c) ;
console.log(b+a+c) ;
console.log(b+a+c) ;
console.log(a+c+b)


let firstName = "Harsh" ;
let lastName = " Singh" ;

let fullName = `The fullName is : ${firstName}${lastName}` ;
let name = firstName + lastName
console.log(name)
console.log(fullName)


// string methods
let text = "Hii Good Morning" 
let text2 = "Have a good day!"
console.log(text.length) ;
console.log(text.charAt(0))
console.log(text.charCodeAt(0))
console.log(text.concat(" ", text2))
console.log(text.slice(5))
console.log(text.slice(5,15)) 
console.log(text.slice(-15)) 

console.log(text.toLocaleLowerCase())
console.log(text.toLocaleUpperCase())
console.log(text.trim())
console.log(text.repeat(2))
console.log(text.replace("Hii","Hey"))

// search , match , matchAll , startsWith , endsWith , includes , indexOf , lastIndexOf 

let num1 = "100" 
let num2 = "50" 
let prod =  num1 * num2 ;
let prod2 =  num1 - num2 ;
let prod3 =  num1 / num2 ;
console.log(prod)
console.log(prod2)
console.log(prod3)





// number methods 
let NUM1 = 100 ;
console.log(NUM1.toString())
console.log(typeof(NUM1))

// toexponential , toPrecision() , valueOf() , 
console.log(Number(num1))
console.log(Number(true))
console.log(Number(false))

