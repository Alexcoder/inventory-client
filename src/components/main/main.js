import React, {useEffect} from "react";
import {Dashboard,List, } from '../'
import { useDispatch, } from "react-redux";
// useSelector 
import { useGlobalContext } from "../../state/context";
import {getPosts} from '../../state/action/posts'
// import { LoadingPage } from "../";

import './main.css'


const Main = () => {  
  const { setCurrentPage, creator, query } = useGlobalContext();
  // const { Loading,  } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  
  const page = query.get('page') || 1;
  const category = query.get('category') || "";

  
  useEffect(()=> {
    if(page) setCurrentPage(page);
     dispatch(getPosts(page, creator, category));
  },[dispatch, page, creator, setCurrentPage, category, ])




  return (
    <div className="mainContainer" >
      <div>
        <Dashboard />
            <div className="main-list-cont">
              <List page={page} category={category}/>
            </div>
    </div>
      {/* {Loading && <LoadingPage/>} */}
    </div>
  );
};

export default Main;
