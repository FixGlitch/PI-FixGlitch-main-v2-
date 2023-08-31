import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import img from '../../assets/Logo.png';

const Nav = ({ onSearch}) => {
  return (
    <div>
      <div className={styles.Logo}>
      <img src="https://www.pinclipart.com/picdir/big/149-1496181_rick-and-morty-portal-png-banner-transparent-portal.png" loading="lazy"></img>
      <img src={img} loading="lazy"></img>
    </div>
      <SearchBar className={styles.SearchBar} onSearch={onSearch} />
      <div className={styles.btncont}>
      <button className={styles.btn}>
        <Link to="/about"><span>About</span></Link>
      </button>
      <button className={styles.btn}>
      <Link to="/favorites"><span>Favoritos</span></Link>
      </button>
      <button className={styles.btn}>
        <Link to="/home"><span>Home</span></Link>
      </button>
      </div>
    </div>
  );
}

export default Nav;

