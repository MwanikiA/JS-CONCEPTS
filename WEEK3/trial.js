const baseurl = 'https://netflix54.p.rapidapi.com/search/?query=';
const apiKey = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bca660d8a0mshc99d417084d0dd9p17b74djsn52a5f3e3ad59',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
}

const form = document.querySelector('.form');
const input = document.querySelector('.searchbar');
const container= document.querySelector('.container')

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const userInput = input.value.trim();
	if (userInput !== '') {
		fetchMovie(userInput);
	}
})

const fetchMovie = async (userInput) => {
	try {
		const response = await fetch(baseurl + userInput + '&offset=0&limit_titles=50&limit_suggestions=20&lang=en', apiKey);
		const data = await response.json();
		console.log(data);
	
    const child = document.createElement('div')
    child.classList.add('child')
child.innerHTML=`

 <p> title${data.titles}</p>
 



`
    
    
    container.appendChild(child)
} catch (error) {
    console.error(error);
}
    
}
