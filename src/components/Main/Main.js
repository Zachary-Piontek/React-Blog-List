
import useBlogs from '../../hooks/useBlogs.js';
import BlogCard from '../BlogCard/BlogCard.js';



export default function Main() {
  const allBlogs = useBlogs();


  return (
    <section className="main">
      {allBlogs.map((blog) => (
        <BlogCard {...blog} key={blog.id} />
      ))}
    </section>
  );
}
