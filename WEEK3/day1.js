//const fetchData

//async function fetchData()
let container = document.querySelector('.container')

const fetchData = async ()=>{
    //fetch data from api endpoint
    const response = await fetch ('https://rickandmortyapi.com/api/character')
    //converting data to json
    const data = await response.json()
    //getting the results property
    const characters = data.results

    characters.forEach((character)=> {
        console.log(character)
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML= `
        <div> 
        <img src="${character.image}"/>
        </div>
        <p>${character.name}</p>
        `
         
        container.appendChild(card) 
        
    })

    let nav = document.querySelector('.nav')
    const buttons = document.createElement('div')
    buttons.classList.add('buttons')
    buttons.innerHTML=`
    <div>Docs</div>
    <div> About </div>
    <button>Support Us</button>
    `
    nav.appendChild(buttons)
    
    let precontainer = document.querySelector('.precontainer')
    precontainer.innerText = 'The Rick and Morty API'
    

}

fetchData()