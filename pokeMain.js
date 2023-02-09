// Information to reach API
const url = 'https://pokeapi.co/api/v2/pokemon/';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function
const getSuggestions = () => {
  const pokemon = inputField.value;
  const endpoint = `${url}${pokemon}`;
  
  fetch(endpoint)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
      }, networkError => {
      console.log(networkError.message)
    })
    .then(jsonResponse =>{
      // renderRawResponse(jsonResponse);
      renderResponse(jsonResponse);
    })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
