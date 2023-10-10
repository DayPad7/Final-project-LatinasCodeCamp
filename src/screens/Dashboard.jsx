import React from "react";
const Dashboard = (props) => {
  const imprimirEstado = () => {
    window.print();
  };
  return (
    <>
      <section className=" flex flex-col text-center h-full w-full m-10 ">
        <h1 className="text-3xl font-bold text-center text-red-400 tracking-wide py-1">
          ¡Bienvenido a Latinas Stock Banks!
        </h1>
        <h1 className="text-2xl font-bold ">{props.fullname} </h1>
        <h1 className="text-1xl font-bold ">{props.username} </h1>

        <br></br>

        <section className="  text-1xl font-normal py2">
          <p> Este es un Resumen de tu Situacion Financiera. </p>
          <p> Acá encontraras toda tu informacion en una sola pagina</p>
        </section>

        <section className=" flex flex-col text-center ">
          <h3 className="text-2xl font-bold text-center text-red-400 tracking-wide py-3">
            Saldo Disponible
          </h3>
          <p className="text-2xl font-medium text-slate-700">
            USD {props.initialCash}
          </p>
          <br></br>
          <section className="  text-1xl font-normal py2">
            <h3 className="text-2xl font-bold text-center text-red-400 tracking-wide py-3">
              Tus Acciones
            </h3>

            <p>Actualmente cuentas con los siguientes tipos de acciones </p>

            <p className="text-2xl font-medium ">{props.stocks.name} </p>
            <p>Acciones: {props.stocks.usershare} </p>
            <p> Valor por Accion: USD {props.stocks.price}</p>
            <p>
              {" "}
              Equivalente de tus acciones en USD :{" "}
              {props.stocks.price * props.stocks.usershare}{" "}
            </p>

            <br />
            <p className="text-2xl font-medium">{props.stockS.name} </p>
            <p>Acciones: {props.stockS.usershare} </p>
            <p> Valor por Accion: USD {props.stockS.price}</p>
            <p>
              {" "}
              Equivalente de tus acciones en USD :{" "}
              {props.stockS.price * props.stockS.usershare}
            </p>
          </section>
          . . . . .<br></br>
          <br></br>
          <div className="flex flex-col justify-center items-center">
            <img
              className=" w-20 "
              src="https://www.gran-turismo.com/gtsport/decal/4827871999580702208_1.png"
              alt=""
            />
          </div>
          <br></br>
          <br></br>
          <button onClick={imprimirEstado} className="text-red-400">
            {" "}
            Imprimir
          </button>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
