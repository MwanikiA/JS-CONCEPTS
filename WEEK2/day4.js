let parentContainer = document.querySelector('.parent')
let childContainer = document.createElement( 'div')
let innerChildContainer = document.createElement('div')

childContainer.classList.add('child')
childContainer.innerText = 'I am a child'

parentContainer.appendChild(childContainer)
console.log(childContainer)

innerChildContainer.classList.add('innerChild')
childContainer.appendChild(innerChildContainer)


/**
 * @easier option
 * parentContainer.innerHTML='
 * <div class= 'child'>
 *    <div class ='innerchild'></div>
 * 
 * </div>
 * '
 */