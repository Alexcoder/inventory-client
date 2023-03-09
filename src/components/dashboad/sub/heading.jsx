import "../dashboard.css";

const Heading = () =>{

    return(
    <div style={{ display: "flex", color:"white",  textAlign:"start", borderRadius:"0.2rem" }}>
        <div className="dash-heading-data1" >ITEM</div>
        <div className="dash-heading-data2" >RECEIVED</div>
        <div className="dash-heading-data3" >SENT</div>
        <div className="dash-heading-data4" >IN STOCK</div>
        <div className="dash-heading-data5" > RECEIVED (&#8358;)</div>
        <div className="dash-heading-data6" > SENT (&#8358;) </div>
        <div className="dash-heading-data7" >BALANCE(&#8358;)</div>
   </div>
    )
}

export default Heading;