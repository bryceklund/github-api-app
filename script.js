function getUserData(url) {
    fetch(url)
    .then(response => response.json())
    .then(responseJson => formatData(responseJson))
}

function formatData(data) {
    console.log(data);
    $('.results').empty();
    for (let i = 0; i < Object.keys(data).length; i++) {
        $('.results').append(`
        <p>Repo: ${data[i]["name"]}</p>
        <p>Link: <a href="${data[i]["url"]}">${data[i]["url"]}</a></p><br>`);
    }
}

function makeURL(user) {
    let url = "https://api.github.com/users/" + user + "/repos";
    console.log(url);
    getUserData(url);
}

function handleForm() {
    $('form').submit(function(event) {
        event.preventDefault();
        let user = $('#username').val();
        $('form').trigger('reset');
        makeURL(user);
    });
}

$(handleForm());