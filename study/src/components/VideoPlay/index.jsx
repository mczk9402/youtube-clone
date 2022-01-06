import React from 'react';
import Youtube from 'react-youtube';
import styles from './style.module.scss';

const VideoPlay = ({ id }) => {
  return (
    <div className={styles.wrapper}>
      <Youtube className={styles.video} videoId={id} />
    </div>
  );
};

export default VideoPlay;
