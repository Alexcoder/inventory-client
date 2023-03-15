import "../dashboard.css";

const Heading = () =>{

    return(
    <div style={{ display: "flex", color:"white",  textAlign:"", borderRadius:"0.2rem",}}>
        <div className="dash-heading-data1" style={{ paddingLeft:"2rem" }} >RECEIVED</div>
        <div className="dash-heading-data2" style={{ paddingLeft:"2rem" }} >SENT</div>
        <div className="dash-heading-data3" style={{ paddingLeft:"2rem" }} >STOCK</div>
        <div className="dash-heading-data4" style={{ paddingLeft:"2rem" }} > RECEIVED (&#8358;)</div>
        <div className="dash-heading-data5" style={{ paddingLeft:"2rem" }} > SENT (&#8358;) </div>
        <div className="dash-heading-data6" style={{ paddingLeft:"2rem" }} >BALANCE(&#8358;)</div>
   </div>
    )
}

export default Heading;