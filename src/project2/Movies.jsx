import React, { useState, useEffect } from "react";
import "./movie.css"

function Movies() {
  const url = `http://www.omdbapi.com/?s=spider&man&apikey=340bc2f4`;
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function Api() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovie(data.Search);
    }
    Api();
  }, []);
  const handleClick = async () =>{
    const link = `http://www.omdbapi.com/?s=${search}&apikey=340bc2f4`
    const res1 = await fetch(link);
    const data1 = await res1.json();
    console.log(data1);
    setMovie(data1.Search);
  }
  return (
    <>
     <center>
            <input type="search" onChange={(e) =>{
              setSearch(e.target.value) 
            }}
             />
             <button onClick={handleClick}>Search</button>
          </center>
      {movie?.map((pack) => {
        const { Poster, Title, Year, imdbID, Type } = pack;
        return (
          <>
            <div key={imdbID} className="container">
              <div className="movie">
                <div className="poster">
                <img src={Poster} alt="" className="movie-poster"/>
                </div>
                <div className="info">
                  <p className="title">{Title}</p>
                  <p className="type">Release:{Year}</p>
                  <p className="type2">{Type}</p>
                  <p className="type2">Description:</p>
                  <p className="type3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum cum id sint? Ipsam culpa sit similique, numquam harum aspernatur?</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Movies;
