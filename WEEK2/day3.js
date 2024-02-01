
let parent = document.querySelector('.parent')
// let child = document.querySelector('.child')
// let cars = document.querySelector('.car')
// let fish = document.querySelector('.fish2')
// let child2 = document.querySelector('.child2')


parent.addEventListener('click', (e)=>{
    console.log(e)
     if(e.target.tagName === 'SPAN'){
        let subcontainer = e.target.nextElementSibling
        subcontainer.classList.toggle ('hidden')
    }

})
