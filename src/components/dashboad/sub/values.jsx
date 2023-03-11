import { useSelector} from 'react-redux';

import "../dashboard.css";

const Values = () =>{
    const {allDashboard} = useSelector((state)=> state.dashboard);
    const {allHistory} = useSelector((state)=> state.history);

    const Money = (num) => {
        const moneyFormat = `${Intl.NumberFormat().format(Math.abs(num).toFixed(2))}`
        return moneyFormat
      }
    

    const handleQuantityIn = (list) =>{
        const qIn = allHistory?.filter((item)=> (list.category.includes(item.category)&(item.type.includes("incomming"))))
        const qInRed = qIn?.reduce((prev, acc)=> Number(prev)+ Number(acc.quantity), 0) || 0;
        return qInRed
      }
      const handleQuantityOut = (list) =>{
       const qOut = allHistory?.filter((item)=> (list.category.includes(item.category)&(item.type.includes("outgoing"))))
       const qOutRed = qOut?.reduce((prev, acc)=> Number(prev)+ Number(acc.quantity), 0) || 0;
       return qOutRed
      }
      const handleAmountIn = (list) =>{
       const amtIn =  allHistory?.filter((item)=> (list.category.includes(item.category)&(item.type.includes("incomming"))))
       const amtInRed = amtIn?.reduce((prev, acc)=> Number(prev)+ Number(acc.amount), 0) || 0;
       return amtInRed
      }
      const handleAmountOut = (list) =>{
       const amtOut = allHistory?.filter((item)=> (list.category.includes(item.category)&(item.type.includes("outgoing"))))
       const amtOutRed = amtOut?.reduce((prev, acc)=> Number(prev)+ Number(acc.amount), 0) || 0;
       return amtOutRed   
      }
    

    return(
        <div style={{color:"black", textAlign:"", background:"white" }}>
        { 
            allDashboard?.map((list)=>(
              <div key={list._id} style={{background:"white"}}>
              <div style={{display:"flex",background:"white" }}>
                    <div className="dash-value-data1">{Money(handleQuantityIn(list))}</div>
                    <div className="dash-value-data2">{Money(handleQuantityOut(list))}</div>
                    <div className="dash-value-data3">{Money(handleQuantityIn(list)-handleQuantityOut(list))}</div>
                    <div className="dash-value-data4">{Money(handleAmountIn(list))}</div>
                    <div className="dash-value-data5">{Money(handleAmountOut(list))}</div>
                    <div className="dash-value-data6">{Money(handleAmountIn(list)-handleAmountOut(list))}</div>
               </div>
                    <hr style={{border:"0.2px solid lightgray"}}/>
               </div>
           ))}
           </div>

    )
}

export default Values;