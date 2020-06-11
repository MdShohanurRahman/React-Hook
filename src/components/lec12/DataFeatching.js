import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFeatching() {
    // all posts
    // const [posts, setPosts] = useState([])

    // single post  
    const [post, setPost] = useState({}) 
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)



    // for all posts 

    /*     useEffect(() => {
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, [])
     */

    // For individual posts 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    const handleClick = ()=>{
        setIdFromButtonClick(id)
    }
    return (
        <div>
            {/* for single post */}
            <input type="text" value={id} onChange={e => setId(e.target.value)} />

            <button  onClick={handleClick} type="button">Fethc Posts</button>

            <div>{post.title}</div>


            {/* 
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}

        </div>
    )
}

export default DataFeatching

