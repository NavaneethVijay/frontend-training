console.log('We are from external file')

let inputelement = document.getElementById('name')
let labelText = document.getElementById('text')
let updateButton = document.getElementById('updateText')

// set the input value to the label text
labelText.innerText = inputelement.value;

//when to set the value? and how to set the value ?
// when update button is clicked we update the text.
updateButton.addEventListener('click', (e) => {
    labelText.innerText = inputelement.value;
})

updateButton.addEventListener('click', function (event){
    console.log(event);
})

// Arrow fuctions
// (e) => {
//     labelText.innerText = inputelement.value;
// }

// // Normal fuctions
// function (event){
//     console.log(event);
// }

//.Scope of variables
var text = "global"

function getName() {
    text = "Codilar"
    console.log(text);
}
getName();
console.log(text)


// Understanding the data types

// Strings
let stringName = "cat"
// Number
let number = 1
// Boolean
let truthy = true

console.log(true + number)

// undefined
console.log(hi);

let hi;
console.log(hi);

let hi = 1;
console.log(typeof hi);


// Typecasting


// arrays
let data =  ["one", "two", "three"]

// function map(somevalue){
//     // do some work
//     somevalue(){

//     }
// }
// using map
data.map(function(item, index){
    if(index == 1){
        console.log(item)
        console.log(index)
    }
})

// function declaration
function getName()
// function defination
function getName() {
    return 'First Name'
}
// function calling
getName();

// Named function
function getName() {
    return 'First Name'
}

// Anonymous function
// function(){

// }


// objects
let student  = {
    age: 10,
    name: "Codilar",
    location: ['Bangalore', 'Karnataka'],
    active: true,
    subject: {
        name: "Javascript",
        exam: 'june'
    },
    subjects: [
        {
            name: "Javascript",
            exam: 'june'
        },
        {
            name: "React",
            exam: 'june'
        }
    ],
    isBest: function () {
        return true;
    },
    friends: {
        name: {
            one:{
                two: "Finally"
            }
        }
    }
} 

student.age

// Data types
/**
 * Numbers, strings, arrays
 * Scope of variables
 * var, let usage of variables
 * Typecasting
 * array manipulations, array methods
 * pop() push() map() indexOf()
 * Callback functions
 * fuctions, annoymous functions
 * How to create objects and access the informations
 */


//  June 2nd
/**
 * DOM
 * How to select the elements in JS
 * Get information of that element
 * How to get attributes and data attributes
 * How to create HTML element and add information and attributes etc
 * How to iterate and HTML collection, You can access with index
 * How to add, remove toggle classes to HTML elements.
 * How to create an accordian
 */


document.getElementById('main')
document.getElementsByClassName('Faq__title')
document.getElementsByName('secondTitle')
document.getElementsByTagName('div')

document.querySelectorAll('div[name="secondTitle"]')


let heading = document.createElement('h1')
heading.innerText = "Welcome to FAQ's for Javascript"
heading.setAttribute('class', 'Page__title')
document.body.append(heading)

// for(let i=0; i< titles.length; i++){
//     console.log(titles[i])
// }

let faqItems = document.getElementsByClassName('Faq__item')
Array.from(faqItems, ( faqItem) => {
    faqItem.addEventListener('click', function (event){
        faqItem.classList.toggle('active')
    })
})