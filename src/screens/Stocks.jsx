import React, { useState } from 'react'
import Popup from '../components/Popup'

//Requirements
//Have multiple types of stocks that a user can buy and sell, on unique stock price
const Stocks = (props) => {
const [stockTotalPrice, setStockTotalPrice] = useState (0)
const [inputStocks, SetinputStocks] = useState ()
const [triggerPopUp, setTriggerPopUp] = useState (false)
const [triggerPopUpSell, setTriggerPopUpSell] = useState (false)
const [inputStockSell, SetinputSell] = useState ()



// Apple Stocks
const handleSubmitStocks = (e) => {
    console.log ('handlesubmit')
e.preventDefault ();


if (!inputStocks) {
    alert ('Por favor digite el numero de acciones que quieras comprar')
    return
}
if (inputStocks) {
   setStockTotalPrice((inputStocks) * (props.stocks.price))
   console.log ('pop up on')
   setTriggerPopUp(true);

};
}

//verificacion de compra del popup

const ComprarStocks = (e) => {
                                                   
if ((stockTotalPrice <= props.initialCash) && ( inputStocks <= props.stocks.amount)) {
  
  //To do:

  //crea una copia de apple stock
  //props.stocks.amount = props.stocks.amount - inputStocks
  //props.stocks.usershare = props.stocks.usershare + inputStocks
    //props.setStocks (props.stocks)

  
  // pone la copia de apple stock como el apple stock verdadero
  //

  // 
  props.setStocks({...props.stocks, amount: props.stocks.amount - inputStocks, usershare: props.stocks.usershare + inputStocks})
  
  //call apple stock useState to reduce the stock number && increase userStock
  //call cash useState to reduce number

  props.setCash (props.initialCash - stockTotalPrice )

  

  alert ('Compra Existosa ')
  setTriggerPopUp (false);

}
if (stockTotalPrice > props.initialCash) {
    alert ('No tienes suficiente dinero para realizar esta transacción Por favor revisa tu Estado de Cuenta')
    setTriggerPopUp (false);
  
  
  }

  



}


//cerrar el popup

const Cancelar = (e) => {
    setTriggerPopUp (false);
    setTriggerPopUpSell (false)
    return


}

  // vender acciones 
const Stocksell = (e) => {
  
    if (inputStockSell <= props.stocks.usershare) {
        

        props.setStocks({...props.stocks, amount: props.stocks.amount + inputStockSell, usershare: props.stocks.usershare - inputStockSell})
        props.setCash (props.initialCash + stockTotalPrice )

  

  alert ('Venta Exitosa ')
  setTriggerPopUpSell (false);
  
    
}
if (inputStockSell > props.stocks.usershare) {
    alert ('No se logró realizar la transacción debido a que no tienes suficientes acciones.')
    setTriggerPopUpSell (false)
    
  
  
  }

}
const handleSubmitStockSell = (e) => {
    e.preventDefault ();
   
    if (!inputStockSell) {
        alert ('Por favor digite el numero de acciones que quieras vender')
        return
    }
      

    if (inputStockSell) {
        setStockTotalPrice((inputStockSell) * (props.stocks.price))
      setTriggerPopUpSell (true)
     }
}




  return (
<>
<Popup trigger={triggerPopUp}>
       <section>
      <h3> Verificación</h3> 
      <p> Hola!  Estas seguro de realizar esta compra? </p> 
      <p> Te recordamos que cada accion cuesta:  {props.stocks.price} y el total seria de USD {stockTotalPrice}  </p>
      
      <button onClick={ComprarStocks} >Continuar</button>  
      <button onClick={Cancelar} >Cancelar</button>  
</section>
      </Popup>

      <Popup trigger={triggerPopUpSell}>
       <section>
      <h3> Verificación </h3> 
      <p> Hola!  Estas seguro de realizar esta transacción? </p> 
      <p> Te recordamos que cada accion cuesta:  {props.stocks.price} y el total a recibir seria de  USD {stockTotalPrice} </p>
      <button onClick={Stocksell}> Confirmar </button>
      <button onClick={Cancelar} >Cancelar</button>  
</section>
      </Popup>



<h1>Acciones {props.stocks.name}</h1>
<h4> Estas son tus acciones: {props.stocks.usershare} </h4>
<section className='Marketstocks'>

<h2>Mercado de acciones</h2>


 <div className='Infostocks'>
    
    <p> Información </p>
    <p>Precio por cada accion: USD {props.stocks.price}</p>
    <p>Monto disponible: {props.stocks.amount} </p>
  

 </div>

<form onSubmit={handleSubmitStocks}>
<label htmlFor="buyStocks"> Digita la cantidad de acciones de {props.stocks.name} que deseas comprar</label>
<br />
<input value = {inputStocks} onChange={(e)=> SetinputStocks( parseInt (e.target.value))}
type="number" placeholder='cantidad de acciones'/>
<br />
<br />
<button onClick={handleSubmitStocks}> ¡Comprar!</button>

</form>

<form onSubmit={handleSubmitStockSell}>
<label htmlFor="sellStocks"> Digita la cantidad de acciones que deseas vender</label>
<br />
<input value = {inputStockSell} onChange={(e)=> SetinputSell( parseInt (e.target.value))}
type="number" placeholder='cantidad de acciones'/>
<br />
<br />
<button onClick={handleSubmitStockSell}> ¡Vender!</button>

      
      </form>
</section>
</>
  )
}

export default Stocks