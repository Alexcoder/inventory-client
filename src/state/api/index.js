import axios from 'axios';

const user =  JSON.parse(localStorage.getItem("profile"))?.token;
const token =  `Bearer ${user}`;

const baseURL = "https://inventory-api-2j2i.onrender.com/api";
// const baseURL = "http://127.0.0.1:5000/api";
const API = axios.create({baseURL});
const userRequest = axios.create( { baseURL , headers : {token} } );


export const getAllDashboard = (creator)=> API.get(`/dashboard?creator=${creator}`);
export const createDashboard = (post)=> API.post("/dashboard", post);
export const updateDashboard = (toDelete)=> API.put(`/dashboard`, toDelete );


export const getAllHistory = (creator)=> API.get(`/history?creator=${creator}`);
export const getHistoryByQuery = ({creator, page, category})=> API.get(
              `/history/search?creator=${creator}&page=${page || 1}
              &category=${(category==="all" || category==="")? "" : category}`
              )
export const getHistoryById = (id, creator)=> API.get(`/history/find/${id}?creator=${creator}`)
export const createHistory = (post)=> API.post("/history", post);
export const deleteHistory = (toDelete)=> API.delete(`/history/${toDelete._id}` );


export const signIn =(authPage) => userRequest.post(`/user/signIn`, authPage );
export const signUp =(authPage) => userRequest.post(`/user/signUp`, authPage );

