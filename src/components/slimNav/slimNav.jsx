import {useState} from "react";
import {useDispatch} from "react-redux";
import { UPDATE_TRUE, RECEIVE_TRUE, RECEIVE_FALSE } from '../../state/constants';
import "./slimNav.css";

const SlimNav =()=>{
    const dispatch = useDispatch();
    const[type, setType]=useState();

    const pages = [
        {
          id: 1,
          type:"receive",
        },
        {
          id: 2,
          type:"send",
        },
    ]

    const handleClick =(data)=>{
        if(type==="receive"){
            dispatch({type: RECEIVE_TRUE});
            dispatch({type: UPDATE_TRUE});
          } else if(type==="send"){
            dispatch({type: RECEIVE_FALSE});
            dispatch({type: UPDATE_TRUE});
        }
        }

    return(
        <div className="slimNav-cont">
            {
                pages.map((data)=>(
                    <div key={data.id}>
                        <button
                        onClick={()=>{
                            setType(data.type);
                            handleClick(data)
                        }}>
                            {data.type}
                        </button>

                    </div>
                ))
            }
        
        </div>
    )
};

export default SlimNav;