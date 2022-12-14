import React from "react";

function Article({ obj}){
 return(
    <>
    <div>
        <h1>{obj.title}</h1>
        <img src={obj.img} alt="Related to Article" />
        <p>{obj.content}</p>

    </div>
    
    </>
 )   
}

export default Article;