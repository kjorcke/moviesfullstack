import React from 'react';
import '../post.css';

function Post({item}) {

    return (

    <div className="postcontainer"> 
        <div className="post">
            <div className="trailercontainer"> 
                <iframe title="elf" src={item.trailer} width="560" height="315"></iframe>
            </div>
            <div className="moviedetails">
                <div className="titlecontainer">
                    <div className="movieTitle">{item.name}</div>
                    <div className="movieYear">({item.year})</div>
                </div>
                <div>{item.description}</div>
                <div>Rating: {item.rating}</div>
                <div>Director: {item.director}</div>
                <div>Stars: {item.stars}</div>   
            </div>  
        </div>
       
    </div>
     
    )
}

export default Post
