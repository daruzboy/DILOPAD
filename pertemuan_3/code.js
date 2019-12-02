// DOM

// Query

// Query Selector

// const elem = document.querySelector('p')
// const elem = document.querySelector('p')
// let name = "Jhon Wick"
// elem.textContent = `Hello, this is ${name}`
// console.log(elem)

// Create Element
// Using appendChild for Append new Element

// const newParagraph = document.createElement('p')

// newParagraph.textContent = 'Hell Yeah, this is newParagraph here'
// document.querySelector('body').appendChild(newParagraph)

// document.querySelector('.hello')

// Handling User Interaction
// // Button
// document.querySelector('button').addEventListener('click', function(e) {
//     e.target.textContent = "Oh, Why change me ?"
//     console.log(e.target)
// })

// // Input Box
// document.querySelector('input').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })

// // Checkbox
// document.querySelector('#is_true').addEventListener('change', function(e) {
//     console.log(e.target.checked)
// })

// // Selection
// document.querySelector('#filter-by').addEventListener('change', function(e) {
//     console.log(e.target.value)
// })

// Data Storage
// Access Local Storage

// window.localStorage.setItem("username", "babakanciparay")
// window.localStorage.setItem("password", "babakanciamis")

// let username = window.localStorage.getItem('username');
// console.log(username)

// Save array to localStorage
// const users = [{
//         name: "John",
//         age: 21
//     },
//     {
//         name: "Wick",
//         age: 22
//     }
// ]

// window.localStorage.setItem('users', JSON.stringify(users))

// let usersLocal = JSON.parse(window.localStorage.getItem('users'))
// console.log(usersLocal)

// // ES5 Function
// function testOne() {
//     console.log('Hello Test One')
// }
// testOne()

// // ES6 Function
// const testTwo = () => {
//     console.log('Test Two')
// }
// testTwo()

// Array Object
// const ages = [12, 17, 19, 22, 27, 25];
// // const full = ages.map(function(arr) {
// //     return arr >= 18
// // })

// // console.log(full.indexOf(true))
// // console.log(ages[full.indexOf(true)])

// console.log(ages.findIndex(val => val >= 18))
// console.log(ages.find(val => val >= 18))
// const ageOffEight = ages.filter(val => val >= 18)
// console.log(ageOffEight)

// Destructuring
// const foo = ['one', 'two', 'three']

// const [red, yellow, green] = foo

// console.log(red)

const users = {
    name: "Dadan",
    age: 23
}
console.log(users.name)

const { name: n, age: a } = users

console.log(n)