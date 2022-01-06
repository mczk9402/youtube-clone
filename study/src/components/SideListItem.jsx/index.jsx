import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const SideListItem = ({ id, src, title }) => {
  return (
    <Link className={styles.sideListItem} to={{ pathname: '/watch', search: `?v=${id}` }}>
      <img className={styles.sideListItem__image} src={src} alt={title} />
      <span className={styles.sideListItem__title}>{title}</span>
    </Link>
  );
};

export default SideListItem;
