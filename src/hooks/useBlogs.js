import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogs';

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const resp = await getBlogs();
      setBlogs(resp);
    };
    
    getAllBlogs();
  }, []);
    
  return blogs;
}
