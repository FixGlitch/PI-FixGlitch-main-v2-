import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import style from './Card.module.css';

function Card ({
  id,
  name,
  status,
  species,
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
      addFav({ id, name, status, species, gender, origin, image, onClose });
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
        <img src={image} alt="" />
        <p className="Name">{name}</p>
      </div>
      <div className="face back"><button className="btnClose" onClick={() => onClose(id)}>X</button>
      {isFav ? (<button className='btnFavorite' onClick={handleFavorite}>💚</button>)
             : (<button className='btnFavorite' onClick={handleFavorite}>🤍</button>)}
        <div className="ContainerDetail">
          <Link to={`/detail/${id}`}>
            <button className="btnDetail">{name}</button>
          </Link>
          <p>Status "{status}"</p>
          <p>Specie "{species}"</p>
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