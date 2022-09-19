import useBlogs from '../../hooks/useBlogs';
import BlogCard from '../BlogCard/BlogCard';

export default function Main() {
  const allBlogs = useBlogs();

  return (
    <section className="main">
      {allBlogs.map((blog) => (
        <BlogCard {...blog} key={blog.title} />
      ))}
    </section>
  );
}
