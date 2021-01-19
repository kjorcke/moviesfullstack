import React from 'react';
import {NavLink} from 'react-router-dom';
/* import Post from './Post'; */
import '../armin.css'
import cinema2 from '../img/cinema2.jpg'

function Categories({movies}) {
    
   
  
    return (
        <div className='categories'>
            <h1 className='categories-favorite'>Our favorite Movies</h1>
            <div className='singlecategory-link'>
                <NavLink to="/singlecategories/kathleen">
                    <div className="image-container">
                        <div className="image">
                            <img className="hpimg" src={cinema2} alt="cinema"/> 
                        </div>
                        <h1 className="text">Kathleen</h1>
                    </div>  
                </NavLink>
                <NavLink to="/singlecategories/patricia">
                    <div className="image-container">
                        <div className="image">
                            <img className="hpimg" src={cinema2} alt="cinema"/> 
                        </div>
                        <h1 className="text">Patricia</h1>
                    </div>  
                </NavLink>
                <NavLink to="/singlecategories/armin">
                    <div className="image-container">
                        <div className="image">
                            <img className="hpimg" src={cinema2} alt="cinema"/> 
                        </div>
                        <h1 className="text">Armin</h1>
                    </div>  
                </NavLink>  
            </div>
            <div className="grid-container">
                <h2 className='categories-all'>All movies</h2>
                <div className='category-grid'>
                    {movies.map((item, index) => (<NavLink to={`/singlemovie/${item.fields.numid}`}><img className='grid-image' key={index} src={item.fields.image.fields.file.url} alt="movies"/></NavLink>))}
                </div>
            </div>
        </div>
    )
}

export default Categories
