let display = document.querySelector("#display");

let decrement = document.querySelector("#decrement");
let increase = document.querySelector("#increase");
let reset = document.querySelector("#reset");

var num = 0;

increase.addEventListener('click', e=> {
    num += 1;
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
    num -= 1;
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
