import BlogList from './BlogList'
import { Usefetch } from './Usefetch'


export default function Home() {

  const {data: blogs, isPending, error} = Usefetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading..</div>}
      {blogs && <BlogList blogs = {blogs} title = 'All Blogs!'/>}



      {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario')} title = 'Mario Blogs'/> to get blog with the author of mario */}
      
    </div>
  )
}
