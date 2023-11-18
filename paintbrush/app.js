// get all the color divs from html document
let black = document.querySelector('.black')
let red = document.querySelector('.red')
let green = document.querySelector('.green')
let color = document.querySelector('#clr');





// set the initial state for colors i.e. are they clicked or not

let bl = false
let rd = false
let gr = false
let col = false;


// check if color input is clicked

color.addEventListener('click',()=>{
    col=true
    bl = false;
    rd = false;
    gr = false;
})



// check if black is clicked

black.addEventListener('click',()=>{
    bl = true;
    rd = false;
    gr = false;
    col=false

})

// check if red is clicked
red.addEventListener('click',()=>{
    bl = false;
    rd = true;
    gr = false;
    col=false

})

// check if green is clicked
green.addEventListener('click',()=>{
    bl = false;
    rd = false;
    gr = true;
    col=false

})


// click on blue bordered div and create divs on every click
// 1. get the area div
let area = document.querySelector('.area');


// decalre a global varaible to be accessed from anywhere
let box;


// 2.add an event listener to the area

area.addEventListener('click',(e)=>{
    // get the color value
    col = color.value

    // object destructuring
    const {clientX,clientY} = e;
    // assign div
    box = document.createElement('div');
    // add to the area div
    area.append(box)
    // check which color is clicked
    if(bl){
        box.style.background = 'black'
    }else if(rd){
        box.style.background = 'red'
        box.style.borderRadius = '20%'
    }else if(gr){
        box.style.background = 'green'
    }else if(col){
        box.style.background = color.value;
    }
    // add the class after appending the div/box
    box.classList.add('paint');
    box.style.left = `${clientX-125}px`
    box.style.top = `${clientY-150}px`

})