// Initial array of movies
var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];
// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo() {
    $("#movies-view").empty()
    var movie = $("#movie-input").val().trim();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // Creates a div to hold the movie
        // for (let i = 0; i < response.Ratings.length; i++) {
        //     $("#movies-view").append("<h3>" + response.Ratings[i].Source + ": " + response.Ratings[i].Value + " | </h3>");
        // }
        $("#movies-view").append("<img src=" + response.Poster + "/>" + "<br>");
        $("#movies-view").append("<h2>" + response.Title + "</h2>" + "<hr>");
        $("#movies-view").append("<h4>" + response.Year + " | " + response.Runtime + " | Rated: " + response.Rated + "</h4>");
        $("#movies-view").append("<p>" + response.Plot + "</p><br>");
        // Puts the entire Movie above the previous movies.
    });

}

// Function for displaying movie data
// function renderButtons() {

//     // Deletes the movies prior to adding new movies
//     // (this is necessary otherwise you will have repeat buttons)
//     $("#buttons-view").empty();
//     // Loops through the array of movies
//     for (var i = 0; i < movies.length; i++) {

//         // Then dynamicaly generates buttons for each movie in the array
//         // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//         var a = $("<button>");
//         // Adds a class of movie to our button
//         a.addClass("movie");
//         // Added a data-attribute
//         a.attr("data-name", movies[i]);
//         // Provided the initial button text
//         a.text(movies[i]);
//         // Added the button to the buttons-view div
//         $("#buttons-view").append(a);
//     }
// }

// This function handles events where the add movie button is clicked
$("#add-movie").on("click", function (event) {
    event.preventDefault();
    displayMovieInfo();
    // // This line of code will grab the input from the textbox
    // var movie = $("#movie-input").val().trim();

    // // The movie from the textbox is then added to our array
    // movies.push(movie);

    // // Calling renderButtons which handles the processing of our movie array
    // renderButtons();
});

// Adding click event listeners to all elements with a class of "movie"
// $(document).on("click", ".movie", displayMovieInfo);

// Calling the renderButtons function to display the intial buttons
// renderButtons();

