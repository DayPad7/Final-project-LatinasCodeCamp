import React from 'react';

const triggerLogout = (setLoginStatus) => {
  setLoginStatus(false); 
}

const Logout = (props) => {
  return (
    <section className='  text-2xl font-semibold text-center text-slate-700 m-10  py-40'>
      <h4>¡ Hasta Pronto! 🤗  </h4> 

      <br></br>
      <button onClick={() => triggerLogout(props.setLoginStatus)} 
        className="w-1/2 font-medium text-xl rounded-md py-2 bg-red-300 hover:bg-red-400 ...">
        Cerrar Sesion
      </button>  
    </section>
  )
}

export default Logout;
