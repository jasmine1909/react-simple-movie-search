import React,{ useState, useEffect} from 'react'
const API_URL = "http://www.omdbapi.com/?apikey=ab14b626"
const Movie = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
 
    const searchMovie = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
        console.log(data.Search)
    }

    useEffect(() => {
       searchMovie("Spiderman")
    }, [])
  return (
    <div>

        <h1>MOvieLand</h1>
        <div className="search">
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={()=> searchMovie(search)}>search</button>
        </div>


        <div className="container">
           {movies?.length >0 ?(
                <div className="listMovie">
                   {  movies.map((movie)=>(
                        <div className="movie" key={movie.id}>
                        
                            <p>{movie.Year}</p>
                            <img src={movie.Poster !="N/A" ? movie.Poster : "https://via.placeholder.com/400" } alt="" />
                            <p>{movie.Type}</p>
                            <p>{movie.Title}</p>
                       
                        </div>
                   
                     ))}
                </div>
           ) :(
               <div>
               <h1>MOvie empty</h1>
               </div>
           )}
        </div>
    </div>
  )
}

export default Movie