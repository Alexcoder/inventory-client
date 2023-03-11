import {useDispatch} from "react-redux";
import { UPDATE_TRUE, RECEIVE_TRUE, RECEIVE_FALSE } from '../../state/constants';
import "./slimNav.css";

const SlimNav =()=>{
    const dispatch = useDispatch();

    const pages = [
        {
          id: 1,
          type: "receive",
          action: `${dispatch({type: RECEIVE_TRUE})}; ${dispatch({type: UPDATE_TRUE})}`,
        },
        {
          id: 2,
          type: "send",
          action: `${dispatch({type: RECEIVE_FALSE})} ; ${dispatch({type: UPDATE_TRUE})}`,
        },
    ]
    return(
        <div className="slimNav-cont">
            {
                pages.map((data)=>(
                    <div key={data.id}>
                        <button
                        onClick={()=>(                    
                                data.action                    
                        )}>
                            {data.type}
                        </button>

                    </div>
                ))
            }
        
        </div>
    )
};

export default SlimNav;