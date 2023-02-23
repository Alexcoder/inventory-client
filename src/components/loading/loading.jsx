import { CircularProgress  } from "@mui/material";

import "./styles.css";


const Loading = () =>{


    return(
        <main className= "loading">
            <div>
                <CircularProgress sx={{color: "red"}}/>
                 <div style={{fontStyle:"italic"}}>loading ...</div>
            </div>
        </main>
    )
}

export default Loading;