//Import JSON to JS
var movies = JSON.parse(movie);
console.table(movies);

for (i = 0; i < movies.length; i++) {
    document.getElementById("result").innerHTML += `
    <p>${movies[i].movieName}</p>
    <div><img src="${movies[i].image} "width="250px"</div>
    <p>${movies[i].description}</p>
    <p>${movies[i].likes}</p>
    <br>`
}