import React from 'react'
import { useState } from 'react'



const EstadodeCuenta = (props) => {
  const [inputCash, SetInputCash] = useState (0)
  

 

 
const handleSubmitfondos = (e) => {
  e.preventDefault ();




  var validationError = false

  if (!inputCash) {
    validationError = true
    alert ("Por favor digite el monto a depositar")
    return
  }

  if (inputCash) {
    props.setCash((inputCash) + (props.initialCash))

  }
  






}
  

  return (
    <div>

      <h1>Estado de Cuenta  </h1>
      <h3> Monto en USD = {props.initialCash}</h3>

      <form onSubmit={handleSubmitfondos}>
      <label htmlFor='newcash'> Deposita la cantidad que deseas </label>
<input  value= {inputCash} onChange={(e) => SetInputCash ( parseInt (e.target.value))}
type="number" placeholder=' 3000 ' />

<button onClick= {handleSubmitfondos} > Depositar </button>
  
  </form>
      
       </div>
  )
}

export default EstadodeCuenta