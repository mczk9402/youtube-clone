import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from 'store/index';
import { useContext } from 'react';

const Header = () => {
  const [term, setTerm] = useState('');
  const { globalState, setGlobalState } = useContext(Store);

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setGlobalState({ type: 'SET_TERM', payload: { term } });
    history(`/search?query=${term}`);
    console.log('a');
  };

  useEffect(() => {
    setTerm(globalState.term);
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/">VideoTube</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="検索"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </header>
  );
};

export default Header;
