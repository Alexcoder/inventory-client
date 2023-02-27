import React from "react";
import {useNavigate} from "react-router-dom";
import './successPage.css';

const Update =()=>{
  const navigate = useNavigate();
    
    return(
      <div className="success">
        <div className="success-div">
            <div>Updated Successfully</div>
            <br/><br/>
            <button 
              className="success-ok-button"
              onClick={()=> navigate(`/home`)}>
                OK
            </button>
        </div>
      </div>
    )
}

export default Update;