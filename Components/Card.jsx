import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Card = ({ name, username, id }) => {

  const { theme } = useContext(ContextGlobal);
  // const [ existingFavs, setExistingFavs ] = useState(JSON.parse(localStorage.getItem('storedFavoriteCards')) || []);

    const addFav = ()=>{

  // Guarda de la Card a la cual se selecciono
  const favoriteData = { id, name, username };

  // Optiene las Cards que se guardaron en el LOCALSTORAGE y tambien estan en FAVS
  const existingFavs = JSON.parse(localStorage.getItem('storedFavoriteCards')) || [];

  // Guarda la Card que se selecciono junto con las demas Cards en el FAVS
  existingFavs.push(favoriteData);
  
  // Guarda todas las Cards de FAVS en el LOCALSTORAGE
  localStorage.setItem('storedFavoriteCards', JSON.stringify(existingFavs));
    }

  return (
    <div className={`card ${theme}`}>
      <Link to={`/detail/${id}`}>
        <img className="card-doctor" src="./images/doctor.jpg" alt="DH-FotoDoctor" />
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Username: {username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
