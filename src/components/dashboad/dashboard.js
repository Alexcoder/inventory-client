import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
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

   const location = useLocation().pathname


   useEffect(() => {
    const Update=()=>{
      JSON.parse(localStorage.getItem("profile"))
    };
    Update()
  },[location])
  

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
   <div style={{marginTop: "2rem"}}>
   
    <div className="paper-wrap">
        <div style={{display: "flex", gap: "2.5rem", margin: "0rem 0rem 0rem 3rem"}}>
            <div style={{fontWeight: "700", marginLeft: "-1rem"}}>Chemical</div>
            <div style={{fontWeight: "700", marginLeft: "1.5rem"}}>Quantity In</div>
            <div style={{fontWeight: "700",}}>Quantity Out</div>
            <div style={{fontWeight: "700",}}>Stock</div>
            <div style={{fontWeight: "700",}}>Amount In</div>
            <div style={{fontWeight: "700",}}>Amount Out</div>
            <div style={{fontWeight: "700",}}>Balance</div>
        </div>
        <hr/>

        <div style={{display: "grid"}}>
        {displayData?.map((p,i)=>(
            <div key={i}>
            <div style={{display: "flex",margin:"0rem 0rem 0rem 2rem" }} >
                <div style={{flexBasis:"15%", borderRight:"1px solid gray"}}>{p.type}</div>
                <div style={{flexBasis:"15%", textAlign:"center"}}>{p.quantityin}</div>
                <div style={{flexBasis:"15%", textAlign:"center"}}>{p.quantityout}</div>
                <div style={{flexBasis:"15%", textAlign:"center"}}>{p.stock}</div>
                <div style={{flexBasis:"15%", textAlign:"center"}}>$ {p.amountIn}</div>
                <div style={{flexBasis:"15%", textAlign:"center"}}>$ {p.amountOut}</div>
                <div style={{flexBasis:"15%", textAlign:"center"}}>$ {p.balance}</div>
            </div>
            <hr/>
            </div>
        ))}
        </div>
        {/* Total Amount In and Out Below */}
        <div style={{display:"flex", gap:"8rem", padding:"0rem 0rem 0rem 2rem", backgroundColor:"smokewhite", height:"2rem"}}>
        <div><span style={{fontWeight:"700"}}>Amount In Total</span>: ${IncommingTotalAmount}</div>
        <div><span style={{fontWeight:"700"}}>Amount Out Total</span>: ${OutgoingTotalAmount}</div>
        <div><span style={{fontWeight:"700"}}>Total Balance</span>: ${IncommingTotalAmount-OutgoingTotalAmount}</div>
        </div>

        </div>
 
    </div>
  )
}

export default Dashboard