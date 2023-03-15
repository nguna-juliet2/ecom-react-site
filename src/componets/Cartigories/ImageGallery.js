 
import React, { useState, useEffect } from 'react';
import classes from './ImageGallery.module.css';



const  Imagecard=() =>{
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setClothes(data));
  }, []);

  return (
    <div className={classes.grid}>
      {clothes.map(item => (
        <div key={item.id} className={classes.griditem}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Imagecard;


