import React , { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {

  const { theme } = useContext(ContextGlobal);

  return (
    <div id="centradoContact" className={`contact ${theme}`} >
      <h2>¿Desea conocer más?</h2>
      <p>Envienos sus preguntas y nos estaremos poniendo en contacto lo mas pronto posible.</p>
      <Form/>
    </div>
  )
}

export default Contact