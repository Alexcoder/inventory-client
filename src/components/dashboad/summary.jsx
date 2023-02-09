import { useGlobalContext } from "../../state/context";
import './dashboard.css';


const Summary = () => { 

  const{ IncommingTotalAmount, OutgoingTotalAmount,  } = useGlobalContext();

  const Money = (num) => {
    const moneyFormat = `${Intl.NumberFormat().format(Math.abs(num).toFixed(2))}`
    return moneyFormat
  }


  return (
    <main className="dash-cont">
              <div className="sumContainer">
            <div className="dash-group-result">
               <div >RECEIVED</div>
               <div>
                 <span>&#8358;</span>  {Money(IncommingTotalAmount)}.00
               </div>
              </div>
            <div className="dash-group-result">
               <div >SENT</div>
               <div>
                 <span>&#8358;</span>  {Money(OutgoingTotalAmount)}.00
               </div>
              </div>
            <div className="dash-group-result">
               <div >BALANCE</div>
               <div>
                 <span>&#8358;</span>  {Money(IncommingTotalAmount - OutgoingTotalAmount)}.00
               </div>
              </div>
          </div>


        
    </main>
  )
}

export default Summary