import axios from 'axios';
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './Action-types';

// export const addFav = (character) => {
//   const endpoint = 'http://localhost:3001/fav';
//   return async (dispatch, getState) => {
//     try {
//       // Verificar si el personaje ya está en la lista de favoritos
//       const state = getState();
//       const isCharacterInFavorites = state.myFavorites.some(
//         (favCharacter) => favCharacter.id === character.id
//       );
//       if (isCharacterInFavorites) {
//         console.log('El personaje ya está en favoritos.');
//         return;
//       }
//       const { data } = await axios.post(endpoint, character);
//       console.log(character);
//       if (!data.length) throw Error('No hay favoritos');
//       dispatch({
//         type: ADD_FAV,
//         payload: data,
//       });
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
// };
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/fav";
  return async (dispatch) => {
    try {
      console.log(character);
      const { data } = await axios.post(endpoint, character);
      
      if (!data.length) throw Error("no hay favoritos!");
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      console.log(data);
      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
