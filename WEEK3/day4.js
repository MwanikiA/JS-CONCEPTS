const apiKey = '42b1c3d2'
let baseUrl = 'http://www.omdbapi.com'
const form = document.querySelector('.form')
const input = document.querySelector('.input')
let container = document.querySelector('.container')
let userInput = 'barbie'



 form.addEventListener('submit',(e)=>{
    container.innerHTML='' 
    e.preventDefault()
    userInput = input.value
    fetchMovie()


})


const fetchMovie = async ()=>{
    const endpoint = `${baseUrl}/?apikey=${apiKey}&t=${userInput}`
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data)

    const child = document.createElement('div')
child.classList.add('child')
child.innerHTML=`
<div class="image">
 <img src="${data.Poster}"/>
</div>
<div class="info">
 <p>${data.Title}</p>
 <p>${data.Year}</p>
 <p>${data.Genre}</p>
 <p>${data.Rated}</p>
 <p>${data.Plot}</p>
</div>


`

container.appendChild(child)


}

fetchMovie()


