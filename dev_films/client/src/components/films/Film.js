import React, { useEffect, useState } from 'react';
import api from '../../api';

const Film = ({id}) => {
  const [film, setFilm] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.films.fetchById(id)
      .then(film => {
        setFilm(film);
        setIsLoading(false);
      })
  }, [id] )

  return isLoading ? (<h1>Loading film...</h1>) : (
    <div className="ui two column stackable grid">
      <div className="four wide column">
        <img className="ui medium bordered rounded image" src={film.img} alt="Film" />
      </div>
      <div className="twelve wide column content">
        <h1 className="header">{film.title}</h1>
        <div className="meta">
            <span className="price">${film.price}</span>
        </div>
        <hr />
        <div className="ui list">
          <div className="item">Director: {film.director}</div>
          <div className="item">Duration: {film.duration}</div>
        </div>
        <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p>
            {film.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Film;
