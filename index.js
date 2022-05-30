


let id;

async function getData(){

    let query = document.getElementById('query').value;

    let url = `https://swapi.dev/api/people/?search=${query}`;

    let res = await fetch(url);

    let data = await res.json();

    console.log(data);


    return data.results;

    // append(data.results)
}


function append(data){
 let container = document.getElementById('results');
 container.innerHTML="";


 data.forEach(function(el){


   let p = document.createElement('p');
   p.innerText=el.name;

   container.append(p);
 
});

}

 
async function main(){

let data = await getData();

append(data);

}

function debouncing(func, delay){
  
    if(id){
        clearTimeout(id);
    }
  
  
  
    id = setTimeout(function (){
      func();

    }, delay);
}
function loadMovieDetails(){
  const searchListMovies = searchList.querySelectorAll('.search-list-item');
  searchListMovies.forEach(movie => {
      movie.addEventListener('click', async () => {
          // console.log(movie.dataset.id);
          searchList.classList.add('hide-search-list');
          movieSearchBox.value = "";
          const result = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=fc1fef96`);
          const movieDetails = await result.json();
          // console.log(movieDetails);
          displayMovieDetails(movieDetails);
      });
  });
}