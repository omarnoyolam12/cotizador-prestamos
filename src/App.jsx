import { useState, useEffect } from "react";
import Header from "./components/Header";
import Boton from "./components/Boton";

import { formatearDinero, calcularTotal } from "./helpers";

function App() {

  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [mensualidad, setMensualidad] = useState(0);

  const min = 0;
  const max = 20000;
  const step = 100;

  useEffect(()=>{

    // *Calcular total a pagar
    const totalPagar = calcularTotal(cantidad, meses);
    setTotal(totalPagar);

  }, [cantidad, meses]);

  useEffect(()=>{
    
    // *Calcular mensualidad
    setMensualidad(total / meses);

  }, [total]);

  const handleChange = (e)=>{
    setCantidad(Number(e.target.value));
  }

  const handleDecremento = ()=>{
    const valor = cantidad - step;

    if(valor < min){
      return;
    }
    setCantidad(valor);
  }

  const handleIncremento = ()=>{
    const valor = cantidad + step;

    if(valor > max){
      return;
    }
    setCantidad(valor);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>

      <div className="flex justify-between my-6">
        
        <Boton
          signo="-"
          funcionHandle={handleDecremento}
        />
        
        <Boton
          signo="+"
          funcionHandle={handleIncremento}
        />
        
      </div>

      <input 
        type="range" 
        name="" 
        id=""
        className="w-full h-6 bg-gray-200 accent-pink-600 hover:accent-pink-700 transition-all duration-300"
        min={min}
        max={max}
        step={step} 
        onChange={handleChange}
        value={cantidad}
      />

      <p className="text-center my-10 text-5xl font-bold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-clip text-center">
        Elige un <span className="text-indigo-600">Plazo </span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white text-center text-xl font-bold border border-gray-300 outline-none" 
        value={meses}
        onChange={e => setMeses(Number(e.target.value))}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-clip text-center">
          Resumen <span className="text-indigo-600">de pagos </span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">
          {meses} Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(total)} Total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(mensualidad)} Mensualidad
        </p>
      </div>
    </div>
  )
}

export default App
