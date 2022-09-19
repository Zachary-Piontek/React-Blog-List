import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogs.js';

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const resp = await getBlogs();
      setBlogs(resp);
    };
        
    getAllBlogs();
  }, []);
  console.log('🚀 ~ file: useBlogs.js ~ line 17 ~ useBlogs ~ blogs', blogs);
    
  return blogs;
}
