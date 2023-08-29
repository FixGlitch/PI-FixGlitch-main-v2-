import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './Nav.module.css';
import img from '../../assets/Logo.png';

const Nav = ({ onSearch, setAccess }) => {
  const location = useLocation();
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <div>
      <div className={styles.Logo}>
        <img src="https://www.pinclipart.com/picdir/big/149-1496181_rick-and-morty-portal-png-banner-transparent-portal.png" loading="lazy" alt="Logo"/>
        <img src={img} loading="lazy"></img>
      </div>

      {location.pathname === '/home' && (
        <div>
          <SearchBar className={styles.SearchBar} onSearch={onSearch} />
        </div>
      )}

      {location.pathname === '/favorites' && (
        <div className={styles.titleContainer}>
          <h2>My Favorites</h2>
        </div>
      )}

      {location.pathname === '/about' && (
        <div className={styles.titleContainer}>
          <h2>About Page</h2>
        </div>
      )}

      <div className={styles.btncont}>
        <button className={styles.btn}>
          <Link to="/about">
            <span>About</span>
          </Link>
        </button>

        <button className={styles.btn}>
          <Link to="/favorites">
            <span>Favorites</span>
          </Link>
        </button>

        <button className={styles.btn}>
          <Link to="/home">
            <span>home</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Nav;

