var gifs = ["Zaku", "Gundam", "Mazinger Z", "Voltron"];

function displayGifs() {

    var gif = $(this).attr("data-name")

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=wfwfHgsNVAGaibOkeQrL2y9ODqztQTQa";

    $.ajax({url: queryURL,
            method: "GET"
            }).then(function(response) {

            response = response.data
            
            console.log(response)
            $('#gif-view').empty()

            response.forEach(function(e){
            $('#gif-view').append(`<div>
                <h3>${e.rating}</h3>
                <img src="${e.images.original.url}">
            </div>`)
            });

    });

}

function renderButtons() {

    $("#buttons-view").empty();

    gifs.forEach(function(e){
        $("#buttons-view").append(`<button class='gif' data-name='${e}'>${e}</button>`);
    });
}

$("#add-gif").on("click", function(event) {
    event.preventDefault();

    var gif = $("#gif-input").val().trim();
    gifs.push(gif);
    renderButtons();

});

$(document).on("click", ".gif", displayGifs);

renderButtons();