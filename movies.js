 const Apiurl ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
 const searchApi ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
 const ImgPath = "https://image.tmdb.org/t/p/w1280";
 const main = document.getElementById("main");
const form = document.getElementById('form');
const search = document.getElementById("search");
getmovies(Apiurl);

async function getmovies(url){
    const resp = await fetch(url);
    const respData = await resp.json();
     
    addmovie(respData.results);
     
}  

function addmovie(movies){
        //clear main
    main.innerHTML = '';
    movies.forEach((movie) => {
        const {poster_path, title, vote_average,overview}= movie;
        const movieE1 = document.createElement("div");
        movieE1.classList.add("movie");
 
        movieE1.innerHTML = `
     
        <img src="${ImgPath +poster_path}" alt="${title}" >
        <div class="movie-info">
            <h3>
             ${ title}  
            </h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview"><h4>Overview:</h4>
        ${overview}</div>

    
 
        `;
         //const img  = document.createElement("img");
        // img.src = ImgPath + movie.poster_path;
 
         main.appendChild(movieE1);
         
     });

        
}

function getClassByRate(vote){
    if(vote >=8){
        return 'green';
    }
    else if(vote >= 5){
        return 'orange';
    }
    else {
        return 'red';
    }
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm){
        getmovies(searchApi + searchTerm);
        search.value='';
    }
});


    

 
 

 

 /*async function showMovies(){
    const succ = await fetch(Apiurl);
    const succdata = await succ.json();

    console.log(succdata);
    succdata.results.forEach((movie)=>{
        const photo = document.createElement("img");
        photo.src = ImgPath + movie.poster_path;

        document.body.appendChild(photo);
    })



    return succdata;
  }*/

//showMovies();