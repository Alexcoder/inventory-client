// import { useGlobalContext } from "../../state/context";
import {useSelector} from "react-redux";
import './dashboard.css';


const Summary = () => { 

  // const {allDashboard}= useSelector((state)=> state.dashboard)
  const {allHistory}= useSelector((state)=> state.history)

  const Money = (num) => {
    const moneyFormat = `${Intl.NumberFormat().format(Math.abs(num).toFixed(2))}`
    return moneyFormat
  }

  const In = allHistory?.filter((p)=> p.type==="incomming")
  const Out = allHistory?.filter((p)=> p.type==="outgoing")

  const InTotal = In?.reduce((x,y)=> x+y.amount, 0) || 0;
  const OutTotal = Out?.reduce((x,y)=> x+y.amount, 0) || 0;
  const Balance = InTotal - OutTotal;



  return (
    <main className="summary">
          <div className="summary-sub-cont" >

            <div className="summary-group-cont">                            
            <div className="summary-group-item">
               <div >RECEIVED</div>
               <div>
                 <span>&#8358;</span>  {Money(InTotal)}.00
               </div>
              </div>
            <div className="summary-group-item">
               <div >SENT</div>
               <div>
                 <span>&#8358;</span>  {Money(OutTotal)}.00
               </div>
              </div>
            <div className="summary-group-item">
               <div >BALANCE</div>
               <div>
                 <span>&#8358;</span>  {Money(Balance)}.00
               </div>
              </div> 

              </div>
          </div>


        
    </main>
  )
}

export default Summary