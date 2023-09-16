import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ContextGlobal);
  console.log('Theme:', theme);

  return (
      <nav className={`navbar ${theme}`}>
        <Link to ="/">
          <img src="./images/DH.ico" alt="DH-logo" />
        </Link>
        <p>
          <Link to ="home">Home</Link>
        </p>
        <p>
          <Link to ="contact">Contact</Link>
        </p>
        <p>
          <Link to ="favs">Favs</Link>
        </p>
        <button onClick={toggleTheme} >Cambiar el Fondo</button>
      </nav>
  )
};

export default Navbar