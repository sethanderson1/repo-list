




function displayResults(responseJson,maxResults) {
    $('#results-list').empty();

    for (let i = 0; i< responseJson.length && i < maxResults; i++) {
        $('#results-list').append(
            `<li><a href="${responseJson[i].html_url}">
            ${responseJson[i].name}</a></li>`
        )
    }

    $('#results-list').removeClass('hidden');

}



function getRepos(userName,maxResults) {
    const url = `https://api.github.com/users/${userName}/repos`;
    
    console.log(url)
    fetch(url)
    .then(response=>response.json())
    .then(responseJson=>displayResults(responseJson,maxResults))
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