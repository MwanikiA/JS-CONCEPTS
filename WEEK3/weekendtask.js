const baseurl = 'https://netflix54.p.rapidapi.com/search/?query=';
const apikey = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bca660d8a0mshc99d417084d0dd9p17b74djsn52a5f3e3ad59',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
}

// try {
// 	const response = await fetch(baseurl, apikey);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// const container = document.querySelector('.container')
let form = document.querySelector('.form')
let userInput = 'barbie'
const input= document.querySelector('.searchbar')
const container=document.querySelector('.container')

form.addEventListener('submit',(e)=>{
    container.innerHTML=''
    e.preventDefault()
    userInput = input.value
    fetchMovie()


})


const fetchMovie = async ()=>{
    const response = await fetch(baseurl, apikey, userInput)
    const data = await response.json()
    console.log(data)

	if(i=0,i<data.titles.length, i++){
		console.log(data.titles)

	}
	const child = document.createElement('div')
    child.classList.add('child')
child.innerHTML=`

<p>${data.titles}</p>
 
`
    
    
    container.appendChild(child)

}
fetchMovie()
