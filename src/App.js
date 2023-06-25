import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Payment from "./components/Payment";
import './App.css';
import { useState } from "react";

function App() {
  const [payments,setPayments] = useState([
    {
      name:"Name.com Inc",
      date:"jun 22",
      type:"Automatic payment",
      url:"",
      amount:"$9.99"
    },
    {
      name:"Name.com Inc",
      date:"jun 21",
      type:"Automatic payment",
      url:"",
      amount:"$9.88"
    },
    {
      name:"Name.com Inc",
      date:"jun 20",
      type:"Recurring payment",
      url:"",
      amount:"$5.66"
    },
    {
      name:"Name.com Inc",
      date:"mar 22",
      type:"Recurring payment",
      url:"",
      amount:"$5"
    },
    {
      name:"Name.com Inc",
      date:"jun 22",
      type:"Automatic payment",
      url:"",
      amount:"$9.99"
    },
    {
      name:"Name.com Inc",
      date:"jun 22",
      type:"Automatic payment",
      url:"",
      amount:"$9.99"
    },{
      name:"Name.com Inc",
      date:"jun 22",
      type:"Automatic payment",
      url:"",
      amount:"$9.99"
    }
  ]);

  return (
    <div>
      <Navbar />
      <div className="payment-container">
        <Input/>
        <Payment paymentlist={payments}/>
      </div>
    </div>
  );
}

export default App;
