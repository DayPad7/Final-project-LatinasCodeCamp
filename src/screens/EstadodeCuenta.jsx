import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const EstadodeCuenta = (props) => {
  const [inputCash, SetInputCash] = useState(0);

  const handleSubmitfondos = (e) => {
    e.preventDefault();

    var validationError = false;

    if (!inputCash) {
      validationError = true;
      alert("Por favor digite el monto a depositar");
      return;
    }

    if (inputCash) {
      props.setCash(inputCash + props.initialCash);
    }
  };

  return (
    <div>
      <section className=" flex flex-col text-center h-full w-full m-10 ">
        <h1 className="text-2xl font-bold text-center text-red-400 tracking-wide py-1">
          Estado de Cuenta
        </h1>

        <h3 className=" text-center text-lg font-medium text-slate-700">
          {" "}
          Monto en USD = {props.initialCash}
        </h3>

        <form onSubmit={handleSubmitfondos}>
          <label className="block" htmlFor="newcash">
            <span className=" text-center block text-lg font-medium text-slate-700">
              Deposita la cantidad que deseas
            </span>
            <input
              value={inputCash}
              onChange={(e) => SetInputCash(parseInt(e.target.value))}
              type="number"
              className="  mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 "
              placeholder=" 3000 "
            />
          </label>
          <br></br>

          <button
            onClick={handleSubmitfondos}
            className=" w-40 font-medium text-xl rounded-md py-2  bg-red-300 hover:bg-red-400 ..."
          >
            {" "}
            Depositar{" "}
          </button>
        </form>
      </section>
    </div>
  );
};

export default EstadodeCuenta;
