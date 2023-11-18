let lan = document.querySelector('.language');
let box = document.querySelector('.langs');
let menu = document.querySelector('.menu');
let sidebar = document.querySelector('.sidebar');
let line1 = document.querySelector('.line1')
let line2 = document.querySelector('.line2')
let line3 = document.querySelector('.line3')
let lines = document.querySelectorAll('.line')
let m = document.querySelector('.menu-lines')
let m_text = document.querySelector('.menu-text')
let list = document.querySelectorAll('li');

lan.addEventListener('click',()=>{
    box.classList.toggle('show')
})


// add an event listener on menu

menu.addEventListener('click',()=>{
    if(m_text.innerHTML == 'MENU'){
        m_text.innerHTML = 'CLOSE'
    }else{
        m_text.innerHTML = 'MENU'

    }
    sidebar.classList.toggle('side-show')
    lines.forEach((line)=>{
        line.classList.toggle('w-lines')
    })
    m.classList.toggle('menu-lines-style')
    line1.classList.toggle('line1-style')
    line2.classList.toggle('line2-style')
    line3.classList.toggle('line3-style')
   
    list.forEach((li,index)=>{
        setTimeout(() => {
            li.classList.toggle('animate')
            li.classList.toggle('hide')
        }, index * 100);
    })


})




