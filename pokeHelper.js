const renderResponse = (res) => {
    // Handles if res is falsey
    if(!res){ 
      console.log(res.status);
    }
    // In case res comes back as a blank array
  
    // Creates an empty array to contain the HTML strings
    let { abilities } = res;
    let abilitiesList = [];
    // Loops through the response and caps off at 10
    for(let i = 0; i < Math.min(abilities.length, 10); i++){
      // creating a list of words
      abilitiesList.push(`<li>${abilities[i].ability.name}</li>`);
    }
    // Joins the array of HTML strings into one string
    abilitiesList = abilitiesList.join("");
  
    // Manipulates responseField to render the modified response
    responseField.innerHTML = `<p>${res.name}'s starting abilities:</p><ol>${abilitiesList}</ol>`;
    return
  }
  
  // Renders response before it is modified
  const renderRawResponse = (res) => {
    // Takes the first 10 words from res
    let trimmedResponse = res.slice(0, 10);
    // Manipulates responseField to render the unformatted response
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
  }
  
  // Renders the JSON that was returned when the Promise from fetch resolves.
  const renderJsonResponse = (res) => {
    // Creates an empty object to store the JSON in key-value pairs
    let rawJson = {};
    for(let key in res){
      rawJson[key] = res[key];
    }
    // Converts JSON into a string and adding line breaks to make it easier to read
    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
    // Manipulates responseField to show the returned JSON.
    responseField.innerHTML = `<pre>${rawJson}</pre>`;
  }
  