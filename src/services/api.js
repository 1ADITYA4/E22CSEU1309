import axios from 'axios';

const BASE_URL = '/evaluation-service';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNzQzNjUxLCJpYXQiOjE3NDM3NDMzNTEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjEwZWMzNGNkLWQwNmEtNGUxMi05NDBiLWJlMGYzMDI1NjM0NSIsInN1YiI6ImUyMmNzZXUxMzA5QGJlbm5ldHQuZWR1LmluIn0sImVtYWlsIjoiZTIyY3NldTEzMDlAYmVubmV0dC5lZHUuaW4iLCJuYW1lIjoiYWRpdHlhIHZhcmRoYW4iLCJyb2xsTm8iOiJlMjJjc2V1MTMwOSIsImFjY2Vzc0NvZGUiOiJydENIWkoiLCJjbGllbnRJRCI6IjEwZWMzNGNkLWQwNmEtNGUxMi05NDBiLWJlMGYzMDI1NjM0NSIsImNsaWVudFNlY3JldCI6IlJValFSR3BtRHhzaHl6SnIifQ.XLWBDD3z0Sv9eBIVrZghIIrTxYF2uUshHbBREiHqW08';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getUserPosts = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/posts`);
    return response.data.posts;
  } catch (error) {
    console.error('Error fetching user posts:', error);
    throw error;
  }
};

export const getPostComments = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}/comments`);
    return response.data.comments;
  } catch (error) {
    console.error('Error fetching post comments:', error);
    throw error;
  }
};

export const getRandomImage = (width = 200, height = 200) => {
  return `https://picsum.photos/${width}/${height}`;
};
