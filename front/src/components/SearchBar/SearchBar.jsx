import { useState } from 'react';
import style from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(id);
      setId('');
    }
  };

  return (
    <div className={style.Container}>
    <div className={style.NavBar}>
      <input onChange={handleChange} type="search" value={id}/>
      <button className={style.btn} onClick={() => {onSearch(id);setId("");}}><span>Agregar</span></button>
      <button className={style.btn} onClick={() => onSearch(Math.floor(Math.random() * 826))}><span>Random</span></button>
    </div>
    </div>
  );
}

// Para pasarle a la funcion onSearch el argumento, debo pasarlo con un callback

export default SearchBar;
