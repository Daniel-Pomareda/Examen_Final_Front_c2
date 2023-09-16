import React , { useState } from "react";

const Form = () => {

const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [mensaje, setMensaje] = useState("");

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regex.test(email);
  }

  const registrar = (e)  => {
    e.preventDefault();

      if (nombre.trim().length >= 5 && validarEmail(email)) {
        setMensaje('Hola ' + nombre + ' sus datos han sido ingresados correctamente');
      } else {
        setMensaje("Por favor verifique su información nuevamente.")
      }
  };

  return (
    <div>
      <h2>Registrar</h2>
      <form onSubmit={registrar}>
        <input type="text" placeholder="Ingrese su nombre completo" onChange={(e) => setNombre(e.target.value)}/><br />
        <input type="email" placeholder="Ingrese su email" onChange={(e) => setEmail(e.target.value)}/><br />
        <input type="submit" value="Enviar"/>
      </form>
      <p>{mensaje}</p>
    </div>
  );
};

export default Form;
