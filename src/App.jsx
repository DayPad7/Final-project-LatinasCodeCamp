
import React, { useState } from 'react';
import Login from './screens/Log-In';
import HomePage from './screens/HomePage';
import "./index.css";




function App () {

  const [login, setLogin] = useState(false)
  const [cash, setCash] = useState(100)
  const [appleStocks, setappleStock]= useState ({
    'name': ' Apple Inc',
    'price': 500 , 
    'amount': 100 ,
    'usershare': 10,
})
const [techStocks, settechStock]= useState ({
    'name': 'Tech',
    'price': 300 , 
    'amount': 20 ,
    'usershare': 10,
})
  const [pin, setPin] = useState("1234")


return (
<div className= 'App'
>

      {!login && (<Login realPin={pin}  setLoginStatus={setLogin} />)}

      {login && (<HomePage realPin={pin}  setRealPin = {setPin} 
      setLoginStatus={setLogin} 
      initialCash = {cash}   setCash= {setCash}
      appleStocks ={appleStocks} setappleStock = {setappleStock}
      techStocks= {techStocks} settechStock = {settechStock}
      />)}
      
      
   
   

</div>

  );
  
}

export default App;