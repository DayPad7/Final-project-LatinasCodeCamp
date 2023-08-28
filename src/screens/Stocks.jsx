import React, { useState } from 'react'
import Popup from '../components/Popup'

//Requirements
//Have multiple types of stocks that a user can buy and sell, on unique stock price
const Stocks = (props) => {
const [stockTotalPrice, setStockTotalPrice] = useState (0)
const [inputStocks, SetinputStocks] = useState (0)
const [triggerPopUp, setTriggerPopUp] = useState (false)
const [triggerPopUpSell, setTriggerPopUpSell] = useState (false)
const [inputStockSell, SetinputSell] = useState (0)



// Apple Stocks
const handleSubmitStocks = (e) => {
    
e.preventDefault ();


if (!inputStocks) {
    alert ('Por favor digite el numero de acciones que quieras comprar')
    return
}
if (inputStocks) {
   setStockTotalPrice((inputStocks) * (props.stocks.price))
   
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
       <section className='text-xl  text-center'>
      <h3 className='font-semibold'> Verificación</h3> 
      <p> Hola!  Estas seguro de realizar esta compra? </p> 
      <p> Te recordamos que cada accion cuesta:  {props.stocks.price} y el total seria de USD {stockTotalPrice}  </p>
      
      <button onClick={ComprarStocks}  
      className= " w-40  text-xl rounded-md py-2 m-1 bg-red-300 hover:bg-red-400 ..."
      >Continuar</button>  
      <button onClick={Cancelar}  
      className= " w-40  text-xl rounded-md py-2 m-1 bg-red-300 hover:bg-red-400 ..."
      >Cancelar</button>  
</section>
      </Popup>

      <Popup trigger={triggerPopUpSell}>
       <section className='text-xl  text-center'>
      <h3 className='text-1xl font-semibold'> Verificación </h3> 
      <p> Hola!  Estas seguro de realizar esta transacción? </p> 
      <p> Te recordamos que cada accion cuesta: USD {props.stocks.price} y el total a recibir seria de  USD {stockTotalPrice} </p>
      <button onClick={Stocksell} className=" w-40  text-xl rounded-md py-2 m-1 bg-red-300 hover:bg-red-400 ..."
     > Confirmar </button>
      <button onClick={Cancelar} className= " w-40  text-xl rounded-md py-2 m-1 bg-red-300 hover:bg-red-400 ..."
     >Cancelar</button>  
</section>
      </Popup>

      <section className=" flex flex-col text-center h-full w-full m-10 ">

<h1 className='text-2xl font-bold text-center   py-1'
>Acciones {props.stocks.name}
</h1>
<h4 className='text-1xl font-semibold text-center text-black'>  Estas son tus acciones: {props.stocks.usershare} </h4>

<br></br>
<h2 className='text-center text-2xl font-medium'>
  Mercado de acciones
  </h2>


 <div className='text-center text-xl '>
    
    <p> Información </p>
    <p>Precio por cada accion: USD {props.stocks.price}</p>
    <p>Monto disponible: {props.stocks.amount} </p>
  

 </div>
 <section className=" flex flex-col text-center h-full w-full">

<form onSubmit={handleSubmitStocks}>
<label className='block' htmlFor="buyStocks"> 

<span className="  text-lg font-medium">
   Digita la cantidad de acciones que deseas comprar

    </span>

</label>
<br />
<input value = {inputStocks} onChange={(e)=> SetinputStocks( parseInt (e.target.value))}
type="number"  className= "mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"  placeholder='Cantidad de acciones'/>
<br />
<br />
<button onClick={handleSubmitStocks} className= " w-40 font-medium text-xl rounded-md py-2  bg-red-300 hover:bg-red-400 ..."> ¡Comprar!</button>

</form>
<br />

<form onSubmit={handleSubmitStockSell}>
<label className='block' htmlFor="sellStocks"> 
<span className="  text-lg font-medium">
   Digita la cantidad de acciones que deseas vender

    </span>

</label>
<br />
<br />
<input value = {inputStockSell} onChange={(e)=> SetinputSell( parseInt (e.target.value))}
type="number"  className= "mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 " placeholder='Cantidad de acciones'/>
<br />
<br></br>
<button onClick={handleSubmitStockSell} className= " w-40 font-medium text-xl rounded-md py-2  bg-red-300 hover:bg-red-400 ...">  ¡Vender!</button>

      
      </form>
</section>
</section>
</>
  )
}

export default Stocks