




function displayResults(responseJson) {
    $('#results-list').empty();
    // for(let i = 0; i< responseJson.)
    $('#results-list').append(
        `<li><a href="${responseJson[0].html_url}">
        ${responseJson[0].name}</a></li>`
    )
    $('#results-list').removeClass('hidden');

    console.log(responseJson[0].name)

}



function getRepos(userName,maxResults) {
    const url = `https://api.github.com/users/${userName}/repos`;
    
    console.log(url)
    fetch(url)
    .then(response=>response.json())
    .then(responseJson=>displayResults(responseJson))
}

function handleForm() {
    $('form').submit(event => {
     event.preventDefault();
     const userName = $('#js-search-term').val();
     const maxResults = $('#js-max-results').val();
     getRepos(userName,maxResults);
    })
}

$(handleForm)