import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Usefetch } from './Usefetch'; //it working

export const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, isPending, error} = Usefetch('http://localhost:8000/blogs/' + id);
  const homeNav = useNavigate();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      homeNav('/')
    })
  }
  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}
          </div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  )
}
