import React, {useEffect} from "react";
import {Dashboard,List, } from '../'
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress  } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../state/context";
import {getPosts} from '../../state/action/posts'

import './main.css'


const Main = () => {  
  const { Loading,  } = useSelector((state) => state.posts);
  const { creator, setCurrentPage } = useGlobalContext();
  const dispatch = useDispatch();


  const location = useLocation()  ;
  const useQuery=()=> { return new URLSearchParams(location.search) }
  const query = useQuery();
  const item = query.get('item');
  const page = query.get('page');

  
  useEffect(()=> {
    if(page) setCurrentPage(page);
     dispatch(getPosts(page, creator));
  },[dispatch, creator, page, setCurrentPage])


  console.log({"main": page})


  return (
    <div className="mainContainer" >
      <div>

        <Dashboard />
      <div>
          {Loading ? <div className="loading"><CircularProgress/> Fetching data...</div> :
            <div className="main-list-cont">
              <List item={item} page={page} />
            </div>
          }
    </div>
    </div>
    </div>
  );
};

export default Main;
