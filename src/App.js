import React, { useState, useEffect } from 'react';

import Api from './service/api';

import style from './App.module.scss';
import './assets/logo-chuck.png';
import imageChuck from './assets/logo-chuck.png';

function App() {

  const [frase, setFrase] = useState([]);
  
  useEffect(() => {
    getCharacters();
  }, []);
  
  const getCharacters = async () => {
    const response = await Api.get('/random');
    const data = await response.data;
    setFrase(data);
  };

  return (
    <>
      <section className={style.section}>
        <img className={style.imageChuck} src={imageChuck} alt="chuck" />

        <div className={style.boxFrase}>
          <p>{frase.value}</p>
        </div>

        <button className={style.button} onClick={() => {window.location.reload()}}>New phrase</button>
      </section>
    </>
  );
}

export default App;
