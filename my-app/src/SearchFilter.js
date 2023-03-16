import React, { useState } from 'react';

const SearchFilter = ()=>{
    const list = ['Inception', 'Interstellar', 'Shutter island','Peacemaker'];
    const [movies, setMovies] = useState(list);
    const handleChange = (e)=>{
        if(e.target.value === ""){
            setMovies(list);
            return;
        }
        const filktMovie = movies.filter((m)=> m.toLowerCase().includes(e.target.value.toLowerCase()));
        setMovies(filktMovie)
    }
    return(
        <div className='container'>
            <input onChange={handleChange}></input>
            {movies.map((element, index) => (
             <a href = "/" key={index}>{element}</a>
            ))}
        </div>
    )
}

export default SearchFilter