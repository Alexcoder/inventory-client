import React, {useEffect} from "react";
import {Dashboard,List, } from '../'
import { useDispatch } from "react-redux";
import { useGlobalContext } from "../../state/context";
import {getPosts} from '../../state/action/posts'

import './main.css'


const Main = () => {  
  const { setCurrentPage, creator, query } = useGlobalContext();
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
      <div>
            <div className="main-list-cont">
              <List page={page} category={category}/>
            </div>
    </div>
    </div>
    </div>
  );
};

export default Main;
