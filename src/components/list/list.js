import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import { useDispatch,  } from "react-redux";
// useSelector
// import moment from 'moment';
import {useEffect} from "react";
import { Delete } from '@mui/icons-material';
import { useGlobalContext } from "../../state/context";
import { MdOutlineVisibility } from 'react-icons/md';
import { BIN_OPEN, DELETE_ID,  } from '../../state/constants';
// UPDATE_TRUE
import Pagination from "../Pagination";

import './list.css';

const ListSingle = () => {
  // const { Loading } = useSelector((state) => state.posts);
  const { filteredByUser, searchPost, incomming, setSelected } = useGlobalContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SearchFilter = filteredByUser.filter((item) =>
    Object.entries(searchPost).every(([key, value]) =>
       item[key].includes(value) 
       || item[key].toLowerCase().includes(value)
       || item[key].toUpperCase().includes(value)
    ))

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 7;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const slicedData = SearchFilter.slice((indexOfFirstPost), (indexOfLastPost))

  const totalPages = Math.ceil(SearchFilter.length/postsPerPage);

  const goToPage = (number) => setCurrentPage(number)

  useEffect(()=>{
    if(searchPost) {goToPage(1); setSelected(0)}
  },[searchPost, setSelected])


  return (
    <main className="list-cont">
      <div className="list-paper" >
      <div className="list-title">
              <div style={{ minWidth:"9rem", padding:"0.3rem", }}>STATUS</div>
              <div style={{ minWidth:"10rem", padding:"0.3rem", textTransform:"UpperCase", }}>ITEM</div>
              <div style={{ minWidth:"7rem", padding:"0.3rem"}}>TYPE</div>
              <div style={{ minWidth:"15rem", padding:"0.3rem"}}>DATE</div>
            </div>

        <div>
        {
          slicedData.map((p) => (
            <div key={p._id} style={{ display: "flex",gap:"0.6rem", border: "0.2px solid lightgray", fontWeight:"500", color:"black", padding:"0.3rem 1rem", alignItems:"center"}}>
              <div style={{ minWidth:"9rem", padding:"0.3rem",height:"1.2rem", background: p.type===incomming? "green" : "red", }}></div>
              <div style={{ minWidth:"10rem", padding:"0.3rem", textTransform:"UpperCase", }}>{p.category}</div>
              <div style={{ minWidth:"7rem", padding:"0.3rem", textTransform:"UpperCase", }}>{p.type}</div>
              <div style={{ minWidth:"15rem", padding:"0.3rem"}}>{p.date}</div>
              <div style={{ minWidth:"5rem", padding:"0.3rem"}} onClick={() => { navigate(`/${p.category}`, { state: { id: p._id } }) }}><MdOutlineVisibility style={{fontSize:"2rem"}} /></div>
              <div style={{ minWidth:"5rem", padding:"0.3rem"}} onClick={() => { dispatch({ type: BIN_OPEN }); dispatch({ type: DELETE_ID, payload: p._id }) }}> <Delete style={{fontSize:"2rem"}}/></div>
            </div>
          ))}
          </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", border:"1px solid gray", padding:"0.3rem 2rem", fontSize:"1.2rem", color:"gray"}}>
          <div>{totalPages>0 ?  `Showing ${currentPage} of ${totalPages} ${totalPages>1? "pages": "page"}` : "NO MATCHING CONTENT" }</div>
          <div>
           <Pagination postsPerPage={postsPerPage} totalPosts={SearchFilter.length} goToPage={goToPage} />
          </div>
        </div>
      </div> 
    </main>
  );
};

export default ListSingle;
