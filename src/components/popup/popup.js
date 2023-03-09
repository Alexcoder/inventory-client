

const Popup=({message})=>{

    return(
        <div style={{background:"red",padding:"1rem", position:"fixed", color:"white", top:"6rem",right:"0.5rem", height:""}}>
            {message}
        </div>
    )
}


export default Popup;