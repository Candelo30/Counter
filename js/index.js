let display = document.querySelector("#display");

let decrement = document.querySelector("#decrement");
let increase = document.querySelector("#increase");
let reset = document.querySelector("#reset");
let OpenModal = document.querySelector(".Open_modal");
let modal = document.querySelector(".modal");
let close = document.querySelector(".container-close");
let Change_theme = document.querySelector(".Change_theme");

var num = 0;

document.querySelector(".form").addEventListener('submit', function(event) {
    event.preventDefault();
});


var DecrementValue = 1;

document.querySelector("#submitButton").addEventListener('click', e=> {
    DecrementValue = parseInt(document.getElementById("label-Decrement").value);
    modal.classList.remove('open');
});

var IncreaseValue = 1;


document.querySelector("#submitButton").addEventListener('click', e=> {    
    IncreaseValue = parseInt(document.getElementById("label-Increase").value);
    modal.classList.remove('open');
    
});

increase.addEventListener('click', e=> {
    num += IncreaseValue;
    display.textContent = num;
    console.log(num);
    if (num > 0) {
        display.classList.add('positive');
        display.classList.remove("negative");
        console.log("El número es positivo");
    }
    
    if (num < 0) {
        display.classList.add("negative")
        display.classList.remove("positive");
        console.log("El número es negativo");
    }
    if(num === 0) {
        display.classList.remove("positive", "negative");    
    }
});

decrement.addEventListener('click', e=> {
    num -= DecrementValue;
    display.textContent = num;
    console.log(num);
    if (num > 0) {
        display.classList.add('positive');
        display.classList.remove("negative");
        console.log("El número es positivo");
    }
    
    if (num < 0) {
        display.classList.add("negative")
        display.classList.remove("positive");
        console.log("El número es negativo");
    }
    if (num === 0) {
        display.classList.remove("positive", "negative");    
    }
});

reset.addEventListener('click', e=> {
    num = 0;
    display.textContent = num;
    console.log(num);
    if (num === 0) {
        display.classList.remove("positive", "negative");    
    }
});


OpenModal.addEventListener('click', e=> {
    modal.classList.toggle('open');
});

close.addEventListener('click', e=> {
    modal.classList.toggle('open');
});

// Chamge theme 
Change_theme.addEventListener('click', e=>{
    document.body.classList.toggle("dark");
})