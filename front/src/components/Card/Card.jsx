import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/Actions';
import style from './Card.module.css';

function Card({
  id,
  name,
  status,
  specie,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const location = useLocation();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, specie, gender, origin, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div key={id} className="cards">
      <div className="face front">
        <img className={style.imgCard} src={image} alt="" />
        <p className="Name">{name}</p>
      </div>
      <div className="face back">
        <div>
          <button className="btnClose" onClick={() => onClose(id)}>
            X
          </button>
          {isFav ? (
            <button onClick={handleFavorite}>💚</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
          <Link to={`/detail/${id}`}>
            <p>{name}</p>
          </Link>
          <p>Status "{status}"</p>
          <p>Specie "{specie}"</p>
          <p>Gender "{gender}"</p>
          <p>Origin "{origin}"</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);