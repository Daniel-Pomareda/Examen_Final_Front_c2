import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {

  const { theme , data } = useContext(ContextGlobal);
  // 

  return (
      <main className={`card ${theme}`}>
        <h1>Home</h1>
        <div className="card-grid">
            {data.map((users) => (
              <Card
                key={users.id}
                id={users.id}
                name={users.name}
                username={users.username}
              />
            ))}
        </div>
      </main>
  )
}

export default Home