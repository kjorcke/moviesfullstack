import React from 'react'
import { NavLink } from 'react-router-dom'
import cinema2 from '../img/cinema2.jpg'

const Homepage = () => {
    return (
        <div className="hpcontainer">
            
            <NavLink to="/categories">
                <div className="image-container">
                    <div className="image">
                        <img className="hpimg" src={cinema2} alt="cinema"/> 
                    </div>
                    <h1 className="text">Group 4 favorite movies</h1>
                </div>  
            </NavLink>
        </div>
    )
}




export default Homepage
