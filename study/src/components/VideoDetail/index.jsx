import VideoPlay from 'components/VideoPlay';
import React from 'react';
import { useContext } from 'react';
import { Store } from 'store';
import Linkify from 'react-linkify';
import styles from './style.module.scss';

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);

  console.log(globalState);
  if (!globalState.selected.id) return <span>no data</span>;

  return (
    <div className={styles.container}>
      <VideoPlay id={globalState.selected.id} />
      <div className={styles.wrapper}>
        <p className={styles.title}>{globalState.selected.snippet.title}</p>
        <hr />
        <Linkify>
          <p className={styles.description}>{globalState.selected.snippet.description}</p>
        </Linkify>
      </div>
    </div>
  );
};

export default VideoDetail;
