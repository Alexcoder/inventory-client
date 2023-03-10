import "../dashboard.css";

const Heading = () =>{

    return(
    <div style={{ display: "flex", color:"white",  textAlign:"", borderRadius:"0.2rem" }}>
        <div className="dash-heading-data1" >RECEIVED</div>
        <div className="dash-heading-data2" >SENT</div>
        <div className="dash-heading-data3" >STOCK</div>
        <div className="dash-heading-data4" > RECEIVED (&#8358;)</div>
        <div className="dash-heading-data5" > SENT (&#8358;) </div>
        <div className="dash-heading-data6" >BALANCE(&#8358;)</div>
   </div>
    )
}

export default Heading;