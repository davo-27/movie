let movieNameRef = document.getElementById("movie-name");
let SearchBtn = document.getElementById("search");
let result = document.getElementById("result");

let apiKey = "9ddb14c8";

let getMovie = () => {
    let MovieName = movieNameRef.value;
    let url = `https://www.omdbapi.com/?t=${MovieName}&apikey=${apiKey}`;

    if (MovieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Plese enter your movie</h3>
         <div class="msg">
            <img src="https://cdn-icons-png.flaticon.com/512/284/284270.png">
            </div>`
    } else {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                result.innerHTML = `
            <div class="info">
               <img src=${data.Poster} class="poster">
               <div>
                  <h2>${data.Title}</h2>
                  <div class="rating">
                  <img src="star.svg">
                  <h4>${data.imdbRating}</h4>
                  </div>
                  <div class="detalis">
                    <span>${data.Rated}</span>
                    <span>${data.Year}</span>
                    <span>${data.Runtime}</span>
                  </div>
                  <div class="genre">
                      <div>${data.Genre.split(",").join("</div><div>")}</div>
                  </div>
               </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>
            `


            }).catch(error =>{
            result.innerHTML = `<h3 class="msg">Please write movie name correctly</h3>
           <div class="msg">
            <img src="https://cdn-icons-png.flaticon.com/512/284/284270.png">
            </div>`
            })
    }
}
SearchBtn.addEventListener("click", getMovie)
