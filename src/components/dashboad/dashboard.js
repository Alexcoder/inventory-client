import React from 'react';
import { useGlobalContext } from "../../state/context";
import {useDispatch} from 'react-redux';
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import './dashboard.css';
import { UPDATE_TRUE, RECEIVE_TRUE, RECEIVE_FALSE } from '../../state/constants';
import Summary from "./summary";


const Dashboard = () => { 
  const dispatch = useDispatch()

  const {
    FluidLossIn, FluidLossOut, AntifoamIn, AntifoamOut,
    DispersantIn, DispersantOut, RetarderIn, RetarderOut, CementIn, CementOut, BentoniteIn, BentoniteOut,
    CalciumChlorideIn, CalciumChlorideOut, ButylGlycolIn, ButylGlycolOut, SurfactantIn, SurfactantOut,
    ViscosifierIn, ViscosifierOut, AntifoamAmountIn, AntifoamAmountOut, RetarderAmountIn, RetarderAmountOut,
    FluidLossAmountIn, FluidLossAmountOut, DispersantAmountIn, DispersantAmountOut, CementAmountIn,
    CementAmountOut, BentoniteAmountIn, BentoniteAmountOut, CalciumChlorideAmountIn, CalciumChlorideAmountOut,
    ButylGlycolAmountIn, ButylGlycolAmountOut, SurfactantAmountIn, SurfactantAmountOut, ViscosifierAmountIn,
    ViscosifierAmountOut, user,
  } = useGlobalContext();

  const displayData = [
    {
      type: "Antifoam",
      quantityin: AntifoamIn,
      quantityout: AntifoamOut,
      stock: AntifoamIn - AntifoamOut,
      amountIn: AntifoamAmountIn,
      amountOut: AntifoamAmountOut,
      balance: AntifoamAmountIn - AntifoamAmountOut
    },
    {
      type: "FluidLoss",
      quantityin: FluidLossIn,
      quantityout: FluidLossOut,
      stock: FluidLossIn - FluidLossOut,
      amountIn: FluidLossAmountIn,
      amountOut: FluidLossAmountOut,
      balance: FluidLossAmountIn - FluidLossAmountOut
    },
    {
      type: "Retarder",
      quantityin: RetarderIn,
      quantityout: RetarderOut,
      stock: RetarderIn - RetarderOut,
      amountIn: RetarderAmountIn,
      amountOut: RetarderAmountOut,
      balance: RetarderAmountIn - RetarderAmountOut
    },
    {
      type: "Dispersant",
      quantityin: DispersantIn,
      quantityout: DispersantOut,
      stock: DispersantIn - DispersantOut,
      amountIn: DispersantAmountIn,
      amountOut: DispersantAmountOut,
      balance: DispersantAmountIn - DispersantAmountOut
    },
    {
      type: "Viscosifier",
      quantityin: ViscosifierIn,
      quantityout: ViscosifierOut,
      stock: ViscosifierIn - ViscosifierOut,
      amountIn: ViscosifierAmountIn,
      amountOut: ViscosifierAmountOut,
      balance: ViscosifierAmountIn - ViscosifierAmountOut
    },
    {
      type: "CalciumChloride",
      quantityin: CalciumChlorideIn,
      quantityout: CalciumChlorideOut,
      stock: CalciumChlorideIn - CalciumChlorideOut,
      amountIn: CalciumChlorideAmountIn,
      amountOut: CalciumChlorideAmountOut,
      balance: CalciumChlorideAmountIn - CalciumChlorideAmountOut
    },
    {
      type: "ButylGlycol",
      quantityin: ButylGlycolIn,
      quantityout: ButylGlycolOut,
      stock: ButylGlycolIn - ButylGlycolOut,
      amountIn: ButylGlycolAmountIn,
      amountOut: ButylGlycolAmountOut,
      balance: ButylGlycolAmountIn - ButylGlycolAmountOut
    },
    {
      type: "Surfactant",
      quantityin: SurfactantIn,
      quantityout: SurfactantOut,
      stock: SurfactantIn - SurfactantOut,
      amountIn: SurfactantAmountIn,
      amountOut: SurfactantAmountOut,
      balance: SurfactantAmountIn - SurfactantAmountOut
    },
    {
      type: "Cement",
      quantityin: CementIn,
      quantityout: CementOut,
      stock: CementIn - CementOut,
      amountIn: CementAmountIn,
      amountOut: CementAmountOut,
      balance: CementAmountIn - CementAmountOut
    },
    {
      type: "Bentonite",
      quantityin: BentoniteIn,
      quantityout: BentoniteOut,
      stock: BentoniteIn - BentoniteOut,
      amountIn: BentoniteAmountIn,
      amountOut: BentoniteAmountOut,
      balance: BentoniteAmountIn - BentoniteAmountOut
    },
  ]

  const Money = (num) => {
    const moneyFormat = `${Intl.NumberFormat().format(Math.abs(num).toFixed(2))}`
    return moneyFormat
  }


  return (
    <main className="dash-cont">
          <Summary/>

      <section>
        <div className="paper-wrap" style={{background:"white",}}>
            <div style={{ marginTop: "5.8rem", marginRight:"1rem"}}>
              {
                displayData?.map((p, i) => (
                  <div key={i}  >
                    <div style={{ marginBottom: "1.1rem", fontWeight:"500" }}>{p.type}</div>
                  </div>
                ))
              }
            </div>

            <div className="data">
              <div style={{ display: "flex",marginLeft:"-8rem", padding: "0.5rem 0rem 1rem 1rem",alignItems:"center", background:"blue", borderRadius:"0.2rem" }}>
                <div className="dash-data1" style={{color:"white"}}>ITEM</div>
                <div className="dash-data1" style={{color:"white"}}>RECEIVED</div>
                <div className="dash-data1" style={{color:"white"}}>SENT OUT</div>
                <div className="dash-data1" style={{color:"white"}}>AVAILABLE <br/>STOCK</div>
                <div className="dash-data1" style={{color:"white"}}>AMOUNT <br/> RECEIVED</div>
                <div className="dash-data1" style={{color:"white"}}>AMOUNT <br/> SENT OUT</div>
                <div className="dash-data1" style={{ color:"white",}} >BALANCE</div>
              </div>
              <div><hr/></div>
              {displayData?.map((p, i) => (
                <div key={i}>
                  <div className="flexReduced" >
                    <div className="dash-data" style={{color:"blue"}}>{p.quantityin}</div>
                    <div className="dash-data" style={{color:"red"}}>{p.quantityout}</div>
                    <div className="dash-data" style={{color: p.stock<=0 ? "red" : "blue"}}>{Math.abs(p.stock)}</div>
                    <div className="dash-data" style={{color:"blue"}}><span style={{color:"gray"}}>&#8358;</span> {Money(p.amountIn)}</div>
                    <div className="dash-data" style={{color:"red"}}><span style={{color:"gray"}}>&#8358;</span> {Money(p.amountOut)}</div>
                    <div className="dash-data" style={{color: p.balance<=0 ? "red" : "green", }}><span style={{color:"gray"}}>&#8358;</span> {Money(p.balance)}</div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>

          </div>
          {/* TOTAL AMOUNT  GROUP HERE */}
        {
          user && 
        <p  className="dash-btn-grp">
        <button
          className= {user?.result ?  "add-transaction" : "add-transaction disabled"}
          disabled={!user?.result}
          onClick={() => {dispatch({type: UPDATE_TRUE}); dispatch({type: RECEIVE_TRUE}) }}>
           <div><AddIcon sx={{fontSize: "2rem"}}/></div> 
          <div>RECEIVE</div>
        </button>
        <button
          className= {user?.result ?  "add-transaction" : "add-transaction disabled"}
          disabled={!user?.result}
          onClick={() => {dispatch({type: UPDATE_TRUE}); dispatch({type: RECEIVE_FALSE})}}>
          <div><RemoveIcon sx={{fontSize: "2rem"}}/></div> 
          <div>SEND</div>
        </button>
        </p>
        }

      </section>
    </main>
  )
}

export default Dashboard