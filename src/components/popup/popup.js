

const Popup=({message})=>{

    return(
        <div style={{background:"green",padding:"1rem", position:"fixed", color:"white", top:"6rem",right:"0.5rem",}}>
            {message}
        </div>
    )
}


export default Popup;