import React, {useState, createContext,useContext} from 'react';
import { useSelector } from 'react-redux';



const initialState= {
    user:"",
    type:"",
    location: "",
    category: "",
    quantity: "",
    price: "",
    date: new Date(),
}

export const StateContext = createContext()

export const Context =({children})=>{
    const [formData, setFormData]= useState(initialState)
    const [search, setSearch] = useState()
    const [transaction, setTransaction] = useState(false)
    const { allposts } = useSelector((state)=> state.posts)
    const user =  JSON.parse(localStorage.getItem("profile"));
    const creator =   user?.result._id
    const filteredByUser = allposts.filter((p)=> p.creator === creator)

    const IncommingAntifoam = filteredByUser.filter(({type, category})=> type ==="incomming" & category==="antifoam")
    const AntifoamIn = IncommingAntifoam.reduce((x,y)=> x + y.quantity, 0)
    const AntifoamAmountIn = IncommingAntifoam.reduce((x,y)=> x + y.amount, 0)
    const OutgoingAntifoam = filteredByUser.filter(({type, category})=> type ==="outgoing" & category==="antifoam")
    const AntifoamOut = OutgoingAntifoam.reduce((x,y)=> x + y.quantity, 0)
    const AntifoamAmountOut = OutgoingAntifoam.reduce((x,y)=> x+y.amount, 0)
  
    const IncommingRetarder = filteredByUser.filter(({type, category})=> type ==="incomming" & category==="retarder")
    const RetarderIn = IncommingRetarder.reduce((x,y)=> x+y.quantity, 0)
    const RetarderAmountIn = IncommingRetarder.reduce((x,y)=> x + y.amount, 0)
    const OutgoingRetarder = filteredByUser.filter(({type, category})=> type ==="outgoing" & category==="retarder")
    const RetarderOut = OutgoingRetarder.reduce((x,y)=> x + y.quantity, 0)
    const RetarderAmountOut = OutgoingRetarder.reduce((x,y)=> x + y.amount, 0)
  
    const IncommingFluidLoss = filteredByUser.filter(({type, category})=> type ==="incomming" & category==="fluidloss")
    const FluidLossIn = IncommingFluidLoss.reduce((x,y)=> x+y.quantity, 0)
    const FluidLossAmountIn = IncommingFluidLoss.reduce((x,y)=> x + y.amount, 0)
    const OutgoingFluidLoss = filteredByUser.filter(({type, category})=> type ==="outgoing" & category==="fluidloss")
    const FluidLossOut = OutgoingFluidLoss.reduce((x,y)=> x + y.quantity, 0)
    const FluidLossAmountOut = OutgoingFluidLoss.reduce((x,y)=> x + y.amount, 0)
  
    const IncommingDispersant= filteredByUser.filter((p)=> p.type ==="incomming" & p.category==="dispersant")
    const DispersantIn = IncommingDispersant.reduce((x,y)=> x + y.quantity, 0)
    const DispersantAmountIn = IncommingDispersant.reduce((x,y)=> x + y.amount, 0)
    const OutgoingDispersant = filteredByUser.filter((p)=> p.type ==="outgoing" & p.category==="dispersant")
    const DispersantOut = OutgoingDispersant.reduce((x,y)=> x + y.quantity, 0)
    const DispersantAmountOut = OutgoingDispersant.reduce((x,y)=> x + y.amount, 0)
  
    const IncommingCement= filteredByUser.filter((p)=> p.type ==="incomming" & p.category==="cement")
    const CementIn = IncommingCement.reduce((x,y)=> x+y.quantity, 0)
    const CementAmountIn = IncommingCement.reduce((x,y)=> x + y.amount, 0)
    const OutgoingCement = filteredByUser.filter((p)=> p.type ==="outgoing" & p.category==="cement")
    const CementOut = OutgoingCement.reduce((x,y)=> x+y.quantity, 0)
    const CementAmountOut = OutgoingCement.reduce((x,y)=> x + y.amount, 0)
  
    const IncommingBentonite= filteredByUser.filter((p)=> p.type ==="incomming" & p.category==="bentonite")
    const BentoniteIn = IncommingBentonite.reduce((x,y)=> x+y.quantity, 0)
    const BentoniteAmountIn = IncommingBentonite.reduce((x,y)=> x+y.amount, 0)
    const OutgoingBentonite = filteredByUser.filter((p)=> p.type ==="outgoing" & p.category==="bentonite")
    const BentoniteOut = OutgoingBentonite.reduce((x,y)=> x+y.quantity, 0)
    const BentoniteAmountOut = OutgoingBentonite.reduce((x,y)=> x + y.amount, 0)
  
    const IncommingCalciumChloride= filteredByUser.filter((p)=> p.type ==="incomming" & p.category==="calciumchloride")
    const CalciumChlorideIn = IncommingCalciumChloride.reduce((x,y)=> x + y.quantity, 0)
    const CalciumChlorideAmountIn = IncommingCalciumChloride.reduce((x,y)=> x + y.amount, 0)
    const OutgoingCalciumChloride = filteredByUser.filter((p)=> p.type ==="outgoing" & p.category==="calciumchloride")
    const CalciumChlorideOut = OutgoingCalciumChloride.reduce((x,y)=> x + y.quantity, 0)
    const CalciumChlorideAmountOut = OutgoingCalciumChloride.reduce((x,y)=> x + y.amount, 0)
  
    const IncommingButylGlycol= filteredByUser.filter((p)=> p.type ==="incomming" & p.category==="butylglycol")
    const ButylGlycolIn = IncommingButylGlycol.reduce((x,y)=> x+y.quantity, 0)
    const ButylGlycolAmountIn = IncommingButylGlycol.reduce((x,y)=> x + y.amount, 0)
    const OutgoingButylGlycol = filteredByUser.filter((p)=> p.type ==="outgoing" & p.category==="butylglycol")
    const ButylGlycolOut = OutgoingButylGlycol.reduce((x,y)=> x + y.quantity, 0)
    const ButylGlycolAmountOut = OutgoingButylGlycol.reduce((x,y)=> x + y.amount, 0)
  
    const IncommingSurfactant= filteredByUser.filter((p)=> p.type ==="incomming" & p.category==="surfactant")
    const SurfactantIn = IncommingSurfactant.reduce((x,y)=> x+y.quantity, 0)
    const SurfactantAmountIn = IncommingSurfactant.reduce((x,y)=> x+y.amount, 0)
    const OutgoingSurfactant = filteredByUser.filter((p)=> p.type ==="outgoing" & p.category==="surfactant")
    const SurfactantOut = OutgoingSurfactant.reduce((x,y)=> x + y.quantity, 0)
    const SurfactantAmountOut = OutgoingSurfactant.reduce((x,y)=> x+y.amount, 0)
  
    const IncommingViscosifier= filteredByUser.filter((p)=> p.type ==="incomming" & p.category==="viscosifier")
    const ViscosifierIn = IncommingViscosifier.reduce((x,y)=> x+y.quantity, 0)
    const ViscosifierAmountIn = IncommingViscosifier.reduce((x,y)=> x + y.amount, 0)
    const OutgoingViscosifier = filteredByUser.filter((p)=> p.type ==="outgoing" & p.category==="viscosifier")
    const ViscosifierOut = OutgoingViscosifier.reduce((x,y)=> x + y.quantity, 0)
    const ViscosifierAmountOut = OutgoingViscosifier.reduce((x,y)=> x + y.amount, 0)

    // Calculates Quantity And Amount Based On Filtered Type By User
    const IncommingAmount= filteredByUser.filter((p)=> p.type ==="incomming")
    const IncommingTotalAmount = IncommingAmount.reduce((x,y)=> x+y.amount, 0)
    const OutgoingAmount = filteredByUser.filter((p)=> p.type ==="outgoing")
    const OutgoingTotalAmount = OutgoingAmount.reduce((x,y)=> x + y.amount, 0)

    

    // Calculates Quantity And Amount Based On Filtered Category and Type By User
    const HandleTotal=(type, category)=>{
      const detailPost = filteredByUser.filter((t)=> t.type===type & t.category===category);
      const detailPostTotalQuantity = detailPost.reduce((x,y)=> x + y.quantity,0);
      const detailPostTotalAmount = detailPost.reduce((x,y)=> x + y.amount,0);

      return(
        <div>
          <h5 style={{marginBottom:"-1.5rem",}}
            >{type==="incomming"? "Total Quantity Received Till Date" : "Total Quantity Sent Till Date"}
              : <span style={{color: type==="incomming"? "blue" : "red"}}>
                 {detailPostTotalQuantity}
              </span>
          </h5>
          <h5 
          >{type==="incomming"? "Total Amount Received Till Date " : "Total Amount Sent Till Date "} 
           : $<span style={{color: type==="incomming"? "blue" : "red"}}>
              {detailPostTotalAmount}.00
            </span>
          </h5>
        </div>
      )
      }

  
 return(
    <StateContext.Provider
    value={{
      formData, setFormData, FluidLossIn, FluidLossOut,AntifoamIn, AntifoamOut,
      DispersantIn, DispersantOut, RetarderIn, RetarderOut, CementIn, CementOut, BentoniteIn, BentoniteOut,
      CalciumChlorideIn, CalciumChlorideOut, ButylGlycolIn, ButylGlycolOut, SurfactantIn, SurfactantOut,
      ViscosifierIn, ViscosifierOut,AntifoamAmountIn,AntifoamAmountOut,RetarderAmountIn, RetarderAmountOut,
      FluidLossAmountIn, FluidLossAmountOut,DispersantAmountIn, DispersantAmountOut,CementAmountIn,
      CementAmountOut, BentoniteAmountIn,BentoniteAmountOut,CalciumChlorideAmountIn, CalciumChlorideAmountOut,
      ButylGlycolAmountIn, ButylGlycolAmountOut,SurfactantAmountIn, SurfactantAmountOut, ViscosifierAmountIn,
      ViscosifierAmountOut,IncommingTotalAmount, OutgoingTotalAmount, HandleTotal, user, creator, 
      filteredByUser,search, setSearch, transaction, setTransaction
      }}
    >
      {children}
    </StateContext.Provider>
 )   
}

export const useGlobalContext =()=> useContext(StateContext);