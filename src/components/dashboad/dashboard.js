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

const Money =(num)=>{
const moneyFormat =`${Intl.NumberFormat().format(num.toFixed(2))}`
return moneyFormat
}

 

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
            <div className="receivedText">RECEIVED</div>
            <div className="sentText">SENT</div>
            <div className="stockText">STOCK</div>
            <div className="receivedTotalText">$RECEIVED</div>
            <div className="sentTotalText">$SENT</div>
            <div className="balanceTotalText" >$BALANCE</div>
        <hr/>
        </div>

        {displayData?.map((p,i)=>(
            <div key={i}>

            <div className="flexItem" >
                <div className="quantityIn">{p.quantityin}</div>
                <div className="quantityOut">{p.quantityout}</div>
                <div className="stock">{p.stock}</div>
                <div className="amountIn">{Money(p.amountIn)}</div>
                <div className="amountOut">{Money(p.amountOut)}</div>
                <div className="balance">{Money(p.balance)}</div>
            </div>
            <hr/>
            </div>
        ))}
        </div>

        </div>
        {/* Total Amount In and Out Below */}
        <div style={{display:"block", gap:"2rem", padding:"2rem 1rem 2rem 2rem", backgroundColor:"smokewhite", height:"2rem"}}>
        <div><span style={{fontWeight:"700"}}>TOTAL RECEIVED</span>: ${Money(IncommingTotalAmount)}</div>
        <div><span style={{fontWeight:"700"}}>TOTAL SENT</span>: ${Money(OutgoingTotalAmount)} </div>
        <div><span style={{fontWeight:"700"}}>TOTAL BALANCE</span>: ${Money(IncommingTotalAmount-OutgoingTotalAmount)}</div>
        </div>
        </div>
        </div>
 
    </div>
  )
}

export default Dashboard