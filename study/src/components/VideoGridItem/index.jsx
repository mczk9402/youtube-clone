import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const VideoGridItem = ({ id, src, title }) => {
  return (
    <Link className={styles.item} to={{ pathname: '/watch', search: `?v=${id}` }}>
      <img src={src} alt={title} />
      <span>{title}</span>
    </Link>
  );
};

export default VideoGridItem;
