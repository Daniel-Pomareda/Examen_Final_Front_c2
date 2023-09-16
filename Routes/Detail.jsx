import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {

  const { id } = useParams();
  const { theme } = useContext (ContextGlobal);
  const [ userData, setUserData ] = useState(null);

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, [id]);

  return (
    <>
      <div className={`card ${theme}`}>
        <h1>Detail Dentist id {id}</h1>
        {userData ? (
          <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Website: {userData.website}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Detail;