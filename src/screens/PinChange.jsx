import React, { useState } from 'react'
import Popup from '../components/Popup';

const PinChange = (props) => {
    const [actualpin, setPin] = useState ();
    const [newPin, setnewPin] = useState ();
    const [confirmPin, setconfirmPin] = useState ();
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
  
    <Popup trigger={triggerPopUp}>
       <section>
      <h4>¡ Se ha cambiado su PIN exitosamente! </h4> 
      <p>Por favor vuelva a iniciar sesion 🤗  </p>

<br></br>
      <button onClick={triggerLogout} >Continuar</button>  
    
</section>
      </Popup>

    <section className='Cambio_de_Pin'>

    <h3>Cambio de PIN</h3>
    <p>Completa los siguientes espacios para cambiar tu PIN</p>

<form onSubmit={handleSubmitPinChange}>
<label htmlFor='actualpin'> Ingresa tu PIN </label>
<input  value= {actualpin} onChange={(e) => setPin (e.target.value)}
type="password" placeholder='  ******** ' />

<label htmlFor='newPin'> Ingresa tu Nuevo PIN </label>
<input  value= {newPin} onChange={(e) => setnewPin (e.target.value)}
type="password" placeholder='******** '/>
<label htmlFor='confirmPin'> Confirma tu nuevo PIN </label>
<input value= {confirmPin} onChange={(e) => setconfirmPin (e.target.value)} 
type="password" placeholder='******** ' />

<br></br>
<br></br>
      <button type= 'submit'>Continuar</button>  


</form>







    </section>


    </>
  
  )
}

export default PinChange