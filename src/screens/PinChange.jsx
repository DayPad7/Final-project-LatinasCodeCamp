import React, { useState } from 'react'
import Popup from '../components/Popup';

const PinChange = (props) => {
    const [actualpin, setPin] = useState ("");
    const [newPin, setnewPin] = useState ("");
    const [confirmPin, setconfirmPin] = useState ("");
    const [erroractualPin, setactualPin] = useState(false);
    const [errornewPin, setnewerrorPin] = useState(false);
    const [erroConfirm, seterrorConfirm]= useState (false);
    const [triggerPopUp, setTriggerPopUp] = useState (false);

    const triggerLogout = (e) => {
      props.setLoginStatus(false); 
    }

    const handleSubmitPinChange = (e) => {
        e.preventDefault();

        console.log (newPin)
        console.log (confirmPin)
        console.log (actualpin)
        seterrorConfirm(false)
        setnewerrorPin(false)
        setactualPin (false)
        
        
   


    var validationErrorpin = false


    if  (!newPin) {

       setnewerrorPin(true);
      validationErrorpin = true

    };

    if  (!confirmPin) {

       seterrorConfirm(true);
      validationErrorpin = true

    };
    if  (!actualpin) {

      setactualPin(true);
     validationErrorpin = true
    };
    
    if (validationErrorpin === true) {
      alert ("¡Asegurate de llenar todo los campos!")
      return
    }

    if (actualpin !== props.realPin){
      alert ("Pin Invalido ¡Vuelve a intentarlo!")
      return
    };

   if (newPin !== confirmPin){
    alert ("¡Asegurate de verificar tu nuevo PIN!")
      return
  
    };
    //success validation
if (newPin == confirmPin && props.realPin == actualpin ){
  props.setRealPin (newPin)
  setTriggerPopUp(true);
}

  }

  
   




     


  return (
    <>
  
    <Popup className='absolute' trigger={triggerPopUp}>
       <section className='text-xl font-semibold text-center text-slate-700 '>
      <h4>¡ Se ha cambiado su PIN exitosamente! </h4> 
      <p>Por favor vuelva a iniciar sesion 🤗  </p>

<br></br>
      <button onClick={triggerLogout}  
      className= " w-1/2 font-medium text-xl rounded-md py-3  bg-red-300 hover:bg-red-400 ...">
        Continuar
        </button>  
    
</section>
      </Popup>

    <section className=" flex flex-col text-center h-full w-full">

    <h3 className='text-xl font-bold text-center text-red-400 tracking-wide py-1'>Cambio de PIN</h3>
    <p className=' block text-lg font-medium text-slate-700'>Completa los siguientes espacios para cambiar tu PIN</p>

<form onSubmit={handleSubmitPinChange}>
<label  className= 'block' htmlFor='actualpin'> 
<span className=" block text-lg font-medium text-slate-700">
   Ingresa tu PIN 
    </span>

<input  value= {actualpin} onChange={(e) => setPin (e.target.value)}
type="password"  
className="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 "
 placeholder='********' />
</label>


<label className='block' htmlFor='newPin'> 
<span className=" block text-lg font-medium text-slate-700">
   Ingresa tu  nuevo PIN 
    </span>
<input  value= {newPin} onChange={(e) => setnewPin (e.target.value)}
type="password" className= "mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 " placeholder='********'/>
 </label>

<label className= 'block'htmlFor='confirmPin'> 
<span className=" block text-lg font-medium text-slate-700">
   Confirma tu  nuevo PIN 
    </span>
  <input value= {confirmPin} onChange={(e) => setconfirmPin (e.target.value)} 
type="password"  className= "mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 " 
placeholder='********' />  
 </label>


<br></br>
<br></br>
<button type= 'submit' className= " w-60 font-medium text-xl rounded-md py-3  bg-red-300 hover:bg-red-400 ..." >  Continuar  </button>     


</form>







    </section>


    </>
  
  )
}

export default PinChange