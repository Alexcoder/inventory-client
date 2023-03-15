// import { useGlobalContext } from "../../state/context";
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import '../dashboard.css';


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

const summary =[
  {
    status: "RECEIVED",
    amount: `${Money(InTotal)}.00`
  },
  {
    status: "SENT",
    amount: `${Money(OutTotal)}.00`
  },
  {
    status: "BALANCE",
    amount: `${Money(Balance)}.00`
  },
]

const postsPerPage = 1
const [current, setCurrent]=useState(1)
const first = (current-1)* postsPerPage
const last = (current)* postsPerPage

useEffect(()=>{
  setTimeout(()=>{
    setCurrent(current>2? 1 : current+1)
},6000)
},[current])

  return (
    <main className="summary">
          <div className="summary-sub-cont" >

            <div className="summary-group-cont"> 
            { 
              summary.slice(first,last).map((sum)=>
              <div key={sum.status} 
               className="summary-group-item"
               style={{
                background: sum.status==="RECEIVED"? "green":
                sum.status==="SENT"? "darkred" : "yellow",
                color: sum.status==="RECEIVED"? "white":
                sum.status==="SENT"? "white" : "black",
                transition: "3s ease in"
               }}>
                <div >{sum.status}</div>
                <span>&#8358; {sum.amount}</span> 
             </div>
            )}
              </div>
          </div>


        
    </main>
  )
}

export default Summary