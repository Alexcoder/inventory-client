import React, { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { useDispatch,  } from "react-redux";
// useSelector
import moment from 'moment';
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
  const { filteredByUser, searchPost, setSearchPost, incomming, setSelected } = useGlobalContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const useQuery=()=> new URLSearchParams(location.search)

  const query = useQuery();
  const item = query.get('item');
  const page = query.get('page');

  const QueryCheck = {
    category:item,
    page
  }
  console.log(item)
  console.log(page)

  const SearchFilter = filteredByUser.sort((a,b)=>a.createdAt - b.createdAt).filter((item) =>
    Object.entries(QueryCheck).every(([key, value]) =>
       item[key].includes(value) 
       || item[key].toLowerCase().includes(value)
       || item[key].toUpperCase().includes(value)
    ))


  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 7;

  const indexOfFirstPost = (Number(currentPage)-1) * postsPerPage;
  const indexOfLastPost = currentPage * postsPerPage;
  const slicedData = SearchFilter.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(SearchFilter.length/postsPerPage);

  const goToPage = (number) => {setCurrentPage(number); navigate(`/home?item=${searchPost.category || "all"}&page=${number}`) }

  const serialNumber = (id) => {
   const serial = SearchFilter.findIndex((item)=> item._id===id )
    return serial+1
  }


  useEffect(()=>{
    if(searchPost) {setCurrentPage(1); setSelected(0)}
  },[searchPost, setSelected, setCurrentPage])


  return (
    <main className="list-cont">
      <div className="list-paper" >
      <div className="list-title">
              <div style={{ minWidth:"3rem", padding:"0.3rem", marginLeft:"-1rem", marginRight:"1rem" }}>#</div>
              <div style={{ minWidth:"6rem", padding:"0.3rem", }}>STATUS</div>
              <div style={{ minWidth:"10rem", padding:"0.3rem", textTransform:"UpperCase", }}>ITEM</div>
              <div style={{ minWidth:"7rem", padding:"0.3rem"}}>TYPE</div>
              <div style={{ minWidth:"15rem", padding:"0.3rem"}}>DATE</div>
            </div>

        <div>
        {
          slicedData.map((p) => (
            <div key={p._id} className="list-map" onClick={() => { navigate(`/${p.category}`, { state: { id: p._id } }) }} >
              <div style={{ minWidth:"3rem", padding:"0.3rem", }}>{serialNumber(p._id)}</div>
              <div style={{ minWidth:"6rem", padding:"0.3rem",height:"1.2rem", background: p.type===incomming? "green" : "red", }}></div>
              <div style={{ minWidth:"10rem", padding:"0.3rem", textTransform:"UpperCase", }}>{p.category}</div>
              <div style={{ minWidth:"7rem", padding:"0.3rem", textTransform:"UpperCase", }}>{p.type}</div>
              <div style={{ minWidth:"15rem", padding:"0.3rem"}}>{moment(p.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
              <div style={{ minWidth:"5rem", padding:"0.3rem"}} onClick={() => { navigate(`/${p.category}`, { state: { id: p._id } }) ; setSearchPost({...searchPost, category:""})}}><MdOutlineVisibility style={{fontSize:"2rem"}} /></div>
              <div style={{ minWidth:"5rem", padding:"0.3rem"}} onClick={() => { dispatch({ type: BIN_OPEN }); dispatch({ type: DELETE_ID, payload: p._id }) }}> <Delete style={{fontSize:"2rem"}}/></div>
            </div>
          ))}
          </div>
      </div> 
        <div className="list-pagination" >
          <div>{totalPages>0 ?  `Showing ${currentPage} of ${totalPages} ${totalPages>1? "pages": "page"}` : "NO MATCHING CONTENT" }</div>
          <div>
           <Pagination postsPerPage={postsPerPage} totalPosts={SearchFilter.length} goToPage={goToPage} />
          </div>
        </div>
    </main>
  );
};

export default ListSingle;
