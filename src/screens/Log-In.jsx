import react, {useState} from "react";
import Popup from "../components/Popup";
const Login = (props) => {

 
  const [errorName, SetErrorName]= useState (false);
  const [errorUsername, SetErrorUsername]= useState (false);
  const [errorPin, SetErrorPin]= useState (false);
  const [inputPin, SetInputPin]= useState ("");

 
  const [triggerPopUp, setTriggerPopUp] = useState (false);

   
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("invoke - handleSubmit")
    console.log(props.fullname);
    console.log (props.username);
    SetErrorName(false)
    SetErrorUsername(false)
   


    var validationError = false

    if  (!props.fullname){
      console.log("invoke - handleSubmit - no full name")
      SetErrorName(true)
      validationError = true
    };

    if  (!props.username) {
      console.log("invoke - handleSubmit - no name")

      SetErrorUsername (true);
      validationError = true

    };


  if (validationError === false) {
    console.log("turning on popup")
setTriggerPopUp(true);
  }

  validationError = false

  };

  const handleSubmitPopup = (e) => {
    e.preventDefault();
   
    console.log("handlesubmitpopup")
    console.log(inputPin)
    console.log(props.realPin)

    SetErrorPin(false);
    
    if  (!inputPin) {
      console.log("invoke - handleSubmit - no pin")
      SetErrorPin (true);
      return
    };

    if (inputPin === props.realPin) {
      console.log("loggin in")
      props.setLoginStatus(true); 
    };
    if (inputPin !== props.realPin){
      console.log ("wrong pin")
      
      SetErrorPin (true);
      return
    }

  };

 
 
 
  // render error msg
  const renderErrortxt = (text) => {
     return text != ""  && ( 
        <p className="error_msg"> {text} </p>
  
      )
  
  
  };

    return (
<>
      <Popup trigger={triggerPopUp}>

       <section  className=" flex flex-col text-center ">
      <h3 className="text-xl font-semibold text-center text-slate-700 "> 
      ¡Bienvenido {props.fullname}!
      </h3> 
      <br></br>
      <form onSubmit={handleSubmitPopup}> 
        <label className="block" htmlFor="pin"> 
       <span className=" block text-lg font-medium text-slate-700">
  Ingresa tu PIN
    </span> 
    <input value= {inputPin} onChange={(e) => SetInputPin (e.target.value)}type="password" 
    className="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 "placeholder="*******   " id="PIN" name= 'pin'/>
      <div className=" text-center text-red-600 "> {errorPin && renderErrortxt ("⚠️ Algo esta mal! Por favor ingresa nuevamente tu PIN ⚠️")} </div>

         </label>
     
<br></br>
<button type= 'submit' className= " w-40 font-medium text-xl rounded-md py-3  bg-red-300 hover:bg-red-400 ..." >  Continuar  </button>  
      
       </form>
</section>
      </Popup>


        <section className=" flex flex-col text-center h-full w-full" >
         <h1 className="text-4xl font-bold text-center text-red-400 tracking-wide py-7">Login</h1>
       <form onSubmit={handleSubmit}>

        <label className="block" htmlFor = "fullname">  
        <span className=" block text-lg font-medium text-slate-700">
    Nombre Completo
    </span>
         <input value={props.fullname} onChange={(e) => props.setFullname (e.target.value)} type="fullname" className="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 "
        placeholder= "Ejemplo: Tu Nombre Completo Acá" id="fullname" name="fullname"/>
        <div className=" text-center text-red-600 "> {errorName && renderErrortxt ("⚠️ Por favor ingresa tu Nombre Completo ⚠️")} </div>
        </label>
       
       <br></br>
          
       <label className="block" htmlFor = "username"> 
       <span className=" block text-lg font-medium text-slate-700">
    Username
    </span>
       <input value={props.username} onChange={(e) => props.setUsername (e.target.value)} type="username"
        className="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 "
         placeholder= "Ejemplo: Username87" id="username" name="username"/>
         <div className= " text-center text-red-600 ">  {errorUsername && renderErrortxt (" ⚠️ Por favor ingresa tu Username ⚠️ ")}</div>
        </label>
        
       <br></br>  
       <br></br>
     <button type= 'submit' className= " w-1/2 font-medium text-xl rounded-md py-3  bg-red-300 hover:bg-red-400 ..." >  Continuar  </button>    
     </form>
     
     
     </section>
     </>
    )
};


export default Login;

