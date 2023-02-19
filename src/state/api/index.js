import axios from 'axios';

const API = axios.create({baseURL: "https://inventory-api-2j2i.onrender.com/api" })
// const API = axios.create({baseURL: "http://127.0.0.1:5000/api" })
// const API = axios.create({baseURL: "http://localhost:5000/api" })

export const getPosts = (page, user)=> API.get(`/posts?page=${page || 1}&user=${user || "63349538279187e29b40cdfe"}`);
export const getPost = (id)=> API.get(`/posts/${id}`)
export const createPost = (post)=> API.post("/posts", post);
export const updatePost = ({id,post})=> API.patch(`/posts/${id}`, post);
export const deletePost = (id)=> API.delete(`/posts/${id}`);

export const signIn =(authPage) => API.post(`/user/signIn`, authPage );
export const signUp =(authPage) => API.post(`/user/signUp`, authPage );

