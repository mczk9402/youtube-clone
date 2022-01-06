import React from 'react';
import styles from './style.module.scss';

const VideoGrid = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default VideoGrid;
