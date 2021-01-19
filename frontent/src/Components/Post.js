import React from 'react';
import '../post.css';

function Post({item}) {

    return (

    <div className="postcontainer"> 
        <div className="post">
            <div className="trailercontainer"> 
                <iframe title="elf" src={item.fields.trailer} width="560" height="315"></iframe>
            </div>
            <div className="moviedetails">
                <div className="titlecontainer">
                    <div className="movieTitle">{item.fields.name}</div>
                    <div className="movieYear">({item.fields.year})</div>
                </div>
                <div>{item.fields.description}</div>
                <div>Rating: {item.fields.rating}</div>
                <div>Director: {item.fields.director}</div>
                <div>Stars: {item.fields.stars}</div>   
            </div>  
            {/* <img  alt="movieimage"/> */}
        </div>
       
    </div>
     
    )
}

export default Post
