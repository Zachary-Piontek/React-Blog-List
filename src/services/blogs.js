import { client, checkError } from './client.js';

export async function getBlogs() {
  const resp = await client
    .from('blogs')
    .select(`*, authors(*)`)
    .order('title');

  return checkError(resp);
  
}