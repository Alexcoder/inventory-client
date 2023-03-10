import axios from 'axios';

const API = axios.create({baseURL: "https://inventory-api-2j2i.onrender.com/api"})
// const API = axios.create({baseURL: "http://127.0.0.1:5000/api" })
// const API = axios.create({baseURL: "http://localhost:5000/api" })


export const getAllDashboard = (creator)=> API.get(`/dashboard?creator=${creator}`);
export const createDashboard = (post)=> API.post("/dashboard", post);
export const updateDashboard = (toDelete)=> API.put(`/dashboard`, toDelete );


export const getAllHistory = (creator)=> API.get(`/history?creator=${creator}`);
export const getHistoryByQuery = ({creator, page, category})=> API.get(
              `/history/find/search?creator=${creator}&page=${page || 1}
              &category=${(category==="all" || category==="")? "" : category}`
              )
export const getHistoryById = (id)=> API.get(`/history/${id}`)
export const createHistory = (post)=> API.post("/history", post);
export const deleteHistory = (toDelete)=> API.delete(`/history/${toDelete._id}` );


export const signIn =(authPage) => API.post(`/user/signIn`, authPage );
export const signUp =(authPage) => API.post(`/user/signUp`, authPage );

