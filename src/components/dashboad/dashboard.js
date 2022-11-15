import React from 'react';
import { useGlobalContext } from "../../state/context";
import "./dashboard.css"

const Dashboard = () => {
    const {
        FluidLossIn, FluidLossOut,AntifoamIn, AntifoamOut,
        DispersantIn, DispersantOut, RetarderIn, RetarderOut, CementIn, CementOut, BentoniteIn, BentoniteOut,
        CalciumChlorideIn, CalciumChlorideOut, ButylGlycolIn, ButylGlycolOut, SurfactantIn, SurfactantOut,
        ViscosifierIn, ViscosifierOut,AntifoamAmountIn,AntifoamAmountOut,RetarderAmountIn, RetarderAmountOut,
        FluidLossAmountIn, FluidLossAmountOut,DispersantAmountIn, DispersantAmountOut,CementAmountIn,
        CementAmountOut, BentoniteAmountIn,BentoniteAmountOut,CalciumChlorideAmountIn, CalciumChlorideAmountOut,
        ButylGlycolAmountIn, ButylGlycolAmountOut,SurfactantAmountIn, SurfactantAmountOut, ViscosifierAmountIn,
        ViscosifierAmountOut, IncommingTotalAmount, OutgoingTotalAmount, 
   }= useGlobalContext();

  

   const displayData = [
    { 
      type: "Antifoam",
      quantityin: AntifoamIn,
      quantityout : AntifoamOut,
      stock: AntifoamIn-AntifoamOut,
      amountIn: AntifoamAmountIn,
      amountOut: AntifoamAmountOut,
      balance: AntifoamAmountIn-AntifoamAmountOut
   },
    { 
      type: "FluidLoss",
      quantityin: FluidLossIn,
      quantityout : FluidLossOut,
      stock: FluidLossIn-FluidLossOut,
      amountIn: FluidLossAmountIn,
      amountOut: FluidLossAmountOut,
      balance: FluidLossAmountIn-FluidLossAmountOut
   },
    { 
      type: "Retarder",
      quantityin: RetarderIn,
      quantityout : RetarderOut,
      stock: RetarderIn-RetarderOut,
      amountIn: RetarderAmountIn,
      amountOut: RetarderAmountOut,
      balance: RetarderAmountIn-RetarderAmountOut
   },
    { 
      type: "Dispersant",
      quantityin: DispersantIn,
      quantityout : DispersantOut,
      stock: DispersantIn-DispersantOut,
      amountIn: DispersantAmountIn,
      amountOut: DispersantAmountOut,
      balance: DispersantAmountIn-DispersantAmountOut
   },
    { 
      type: "Viscosifier",
      quantityin: ViscosifierIn,
      quantityout : ViscosifierOut,
      stock: ViscosifierIn-ViscosifierOut,
      amountIn: ViscosifierAmountIn,
      amountOut: ViscosifierAmountOut,
      balance: ViscosifierAmountIn-ViscosifierAmountOut
   },
    { 
      type: "CalciumChloride",
      quantityin: CalciumChlorideIn,
      quantityout : CalciumChlorideOut,
      stock: CalciumChlorideIn-CalciumChlorideOut,
      amountIn: CalciumChlorideAmountIn,
      amountOut: CalciumChlorideAmountOut,
      balance: CalciumChlorideAmountIn-CalciumChlorideAmountOut
   },
    { 
      type: "ButylGlycol",
      quantityin: ButylGlycolIn,
      quantityout : ButylGlycolOut,
      stock: ButylGlycolIn-ButylGlycolOut,
      amountIn: ButylGlycolAmountIn,
      amountOut: ButylGlycolAmountOut,
      balance: ButylGlycolAmountIn-ButylGlycolAmountOut
   },
    { 
      type: "Surfactant",
      quantityin: SurfactantIn,
      quantityout : SurfactantOut,
      stock: SurfactantIn-SurfactantOut,
      amountIn: SurfactantAmountIn,
      amountOut: SurfactantAmountOut,
      balance: SurfactantAmountIn-SurfactantAmountOut
   },
    { 
      type: "Cement",
      quantityin: CementIn,
      quantityout : CementOut,
      stock: CementIn-CementOut,
      amountIn: CementAmountIn,
      amountOut: CementAmountOut,
      balance: CementAmountIn-CementAmountOut
   },
   {
      type: "Bentonite",
      quantityin: BentoniteIn,
      quantityout : BentoniteOut,
      stock: BentoniteIn-BentoniteOut,
      amountIn: BentoniteAmountIn,
      amountOut: BentoniteAmountOut,
      balance: BentoniteAmountIn-BentoniteAmountOut
   },
]


 

  return (
   <div id="dashboardContainer">
   
    <div >

      <div className="paper-wrap">
        <div style={{display: "flex",margin:"0rem 0rem 0rem 2rem" }}>
          <div style={{ marginTop:"3.5rem"}}>
         {
            displayData?.map((p,i)=>(
              <div key={i}  >
                <div style={{ marginBottom:"1.1rem"}}>{p.type}</div>
              </div>
            ))
         }
          </div>

        <div className="data">
        <div style={{display: "flex", margin: "0rem 0rem 2rem 0rem"}}>
            <div style={{fontWeight: "700", marginLeft: "2rem"}}>RECEIVED</div>
            <div style={{fontWeight: "700",  marginLeft: "3rem"}}>SENT</div>
            <div style={{fontWeight: "700", marginLeft: "3rem"}}>STOCK</div>
            <div style={{fontWeight: "700",  marginLeft: "4rem"}}>$RECEIVED</div>
            <div style={{fontWeight: "700",  marginLeft: "3rem"}}>$SENT</div>
            <div style={{fontWeight: "700", marginLeft: "3rem"}}>$BALANCE</div>
        <hr/>
        </div>

        {displayData?.map((p,i)=>(
            <div key={i}>

            <div className="flexItem" >
                {/* <div style={{flexBasis:"15%", borderRight:"1px solid gray"}}>{p.type}</div> */}
                <div style={{flexBasis:"25%", marginLeft:"3.5rem",  textAlign:"start", color: "blue", fontWeight:"500"}}>{p.quantityin}</div>
                <div style={{flexBasis:"25%", marginLeft:"4rem", textAlign:"start",color: "red", fontWeight:"500"}}>{p.quantityout}</div>
                <div style={{flexBasis:"25%", marginLeft:"3rem", textAlign:"start", fontWeight:"500"}}>{p.stock}</div>
                <div style={{flexBasis:"25%", marginLeft:"4rem", color: "blue", fontWeight:"500"}}> {p.amountIn}</div>
                <div style={{flexBasis:"25%", marginLeft:"4rem", textAlign:"start", color: "red", fontWeight:"500"}}> {p.amountOut}</div>
                <div style={{flexBasis:"25%", marginLeft:"2rem", textAlign:"start", fontWeight:"500"}}>{p.balance}</div>
            </div>
            <hr/>
            </div>
        ))}
        </div>

        </div>
        {/* Total Amount In and Out Below */}
        <div style={{display:"block", gap:"2rem", padding:"2rem 1rem 2rem 2rem", backgroundColor:"smokewhite", height:"2rem"}}>
        <div><span style={{fontWeight:"700"}}>TOTAL RECEIVED</span>: ${IncommingTotalAmount}</div>
        <div><span style={{fontWeight:"700"}}>TOTAL SENT</span>: ${OutgoingTotalAmount}</div>
        <div><span style={{fontWeight:"700"}}>TOTAL BALANCE</span>: ${IncommingTotalAmount-OutgoingTotalAmount}</div>
        </div>
        </div>
        </div>
 
    </div>
  )
}

export default Dashboard