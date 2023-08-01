import React, { useEffect, useState } from "react";

function Posts(){
    const [post, setPosteo] = useState([])

    useEffect(()=>
    {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(lista => lista.json())
        .then(lista => setPosteo(lista))
    })

    return(
        <> {       
        post.map((item, i) =>(
            <div key={i}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>))}
        </>

    )
}

export default Posts;