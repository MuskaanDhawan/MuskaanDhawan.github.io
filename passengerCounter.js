// PASSENGER COUNTER
 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
 let count = 0
 function increment()
 {
     count += 1
     countEl.textContent = count
 }
 function save()
 {
     let countstr = count + ' - '
     saveEl.textContent += countstr
     count = 0
     countEl.textContent = count
 }



// Practice Exercise - Nike shoe
// let errorEl = document.getElementById("error")
// function error()
// {
//     errorEl.innerText = "Something went wrong, please try again!"
// } 



// Practice Exercise - Calculator
// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// function add()
// {
//     document.getElementById("sum-el").textContent = "Sum: " +(num1+num2)
// }
// function subtract()
// {
//     document.getElementById("sum-el").textContent = "Sum: " +(num1-num2)
// }
// function multiply()
// {
//     document.getElementById("sum-el").textContent = "Sum: " +(num1*num2)
// }
// function divide()
// {
//     document.getElementById("sum-el").textContent = "Sum: " +(num1/num2)
// }