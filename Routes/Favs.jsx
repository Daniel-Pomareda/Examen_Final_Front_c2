import React, { useContext , useState , useEffect }  from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from "../Components/Card";

const Favs = () => {

  const { theme } = useContext(ContextGlobal);

  // Estado para almacenar las tarjetas favoritas en FAVS
  const [ storedFavoriteCards, setStoredFavoriteCards ] = useState([]);

  // Obtener las tarjetas favoritas del localStorage al cargar el componente
  useEffect(() => {
    const existingFavs = JSON.parse(localStorage.getItem('storedFavoriteCards')) || [];
    setStoredFavoriteCards(existingFavs)
  }, []);
    
  return (
      <div className={`card ${theme}`}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {storedFavoriteCards.map((favoriteData) => (
            <Card
              key={favoriteData.id}
              id={favoriteData.id}
              name={favoriteData.name}
              username={favoriteData.username}
            />
          ))}
        </div>
      </div>
  );
};

export default Favs;
