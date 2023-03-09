import React, { useEffect } from "react";
import { useNavigate, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { Delete } from '@mui/icons-material';
import { useGlobalContext } from "../../state/context";
import { getHistoryByQuery } from "../../state/action/history";
import { BIN_OPEN, DELETE_ID, } from '../../state/constants';
import Pagination from "../Pagination";
import { MdOutlineVisibility } from 'react-icons/md';

import './history.css';

const History = () => {
  const { totalPages, totalQuantity, quantity, limit, historyByQuery, } = useSelector((state) => state.history);
  // , allHistory
  // historyById
  const { searchPost,setSearchPost, incomming, setSelected, setCurrentPage, creator, query } = useGlobalContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToPage = (number) => { 
    setCurrentPage(number); 
    navigate(`/home/history?category=${category}&page=${number}`) 
  }

  const page = query.get("page") || 1;
  const category = query.get("category") || "all";

  const serialNumber = (id) => {
    const index = historyByQuery?.findIndex((item) => item._id === id);
    const factor = (Number(page) - 1) * limit;
    const serial = page?  (index + 1) + factor : (index+1)
    return serial
  }

  const handleView =(item)=>{
    navigate(`/home/find?id=${item._id}&category=${item.category}`); 
    setSearchPost({ ...searchPost, category: "" }) 
  }

  const nextPage =()=>{
    if(Number(page)<Number(totalPages)){
    navigate(`/home/history?category=${category}&page=${Number(page)+1}`);
    setSelected(Number(page))
  }
};
  const previousPage =()=>{
    if(Number(page)>1){
      navigate(`/home/history?category=${category}&page=${Number(page)-1}`);
      setSelected(Number(page)-2)
    }
  };

  useEffect(() => {
    if (searchPost) { setCurrentPage(1); setSelected(0) };
  }, [searchPost, setSelected, setCurrentPage,]);

  useEffect(()=> {
    dispatch(getHistoryByQuery({creator, category, page}));
 },[dispatch, creator, category, page ])



  return (
    <main className="list-cont" style={{marginTop:"4rem", width:"100vw", display:"grid", alignItems:"center", minHeight:"100vh"}}>
      <div className="list-paper" >
        <div className="list-title">
          <div style={{ minWidth: "3rem", padding: "0.3rem", marginLeft: "-1rem", marginRight: "1rem" }}>#</div>
          <div style={{ minWidth: "6rem", padding: "0.3rem", }}>STATUS</div>
          <div style={{ minWidth: "10rem", padding: "0.3rem", textTransform: "UpperCase", }}>ITEM</div>
          <div style={{ minWidth: "7rem", padding: "0.3rem" }}>TYPE</div>
          <div style={{ minWidth: "15rem", padding: "0.3rem" }}>DATE</div>
        </div>

        <div>
          {
            historyByQuery?.map((p) => (
              <div key={p._id} className="list-map" >
                <div style={{ minWidth: "3rem", padding: "0.3rem", }}>{serialNumber(p._id)}</div>
                <div style={{ minWidth: "6rem", padding: "0.3rem", height: "1.2rem", background: p.type === incomming ? "green" : "red", }}></div>
                <div style={{ minWidth: "10rem", padding: "0.3rem", textTransform: "UpperCase", }}>{p.category}</div>
                <div style={{ minWidth: "7rem", padding: "0.3rem", textTransform: "UpperCase", }}>{p.type}</div>
                <div style={{ minWidth: "15rem", padding: "0.3rem" }}>{moment(p.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
                <div style={{ minWidth: "5rem", padding: "0.3rem" }} onClick={()=>handleView(p)}><MdOutlineVisibility style={{ fontSize: "2rem" }} /></div>
                <div style={{ minWidth: "5rem", padding: "0.3rem" }} onClick={() => { dispatch({ type: BIN_OPEN }); dispatch({ type: DELETE_ID, payload: p }) }}> <Delete style={{ fontSize: "2rem" }} /></div>
              </div>
              ))} 
              </div>
      </div>
      <div className="list-pagination" >
        <div>{totalPages > 0 ? `Showing ${page} of ${totalPages} ${totalPages > 1 ? "pages" : "page"}` : "NO MATCHING CONTENT"}</div>
        <div>( {searchPost.category? "filtered" : "found"} {quantity} from {totalQuantity} Items )</div>
        {/* PAGINATION */}
        <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
          <div onClick={previousPage} style={{fontSize:"1rem"}}>Prev</div>
          <Pagination limit={limit} totalPosts={totalPages} goToPage={goToPage} />
          <div onClick={nextPage} style={{fontSize:"1rem"}}>Next</div>
        </div>
      </div>
    </main>
  );
};

export default History;
