import { fetchRelatedData } from 'apis/fetchPupularData';
import SideListItem from 'components/SideListItem.jsx';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Store } from 'store';
import styles from './style.module.scss';

const SideList = () => {
  const { globalState, setGlobalState } = useContext(Store);

  const setRelatedVideo = async (id) => {
    await fetchRelatedData(id).then((res) => {
      setGlobalState({ type: 'SET_RELATED', payload: { related: res.data.items } });
    });
  };

  useEffect(() => {
    setRelatedVideo(globalState.selected.id);
    // 動画を取得するたびに発火してくれる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.selected]);

  if (!globalState.related) return <div>No Data</div>;

  return (
    <div className={styles.sideList}>
      {globalState.related.map((item, index) => (
        <SideListItem
          key={index}
          id={item.id.videoId}
          src={item.snippet && item.snippet.thumbnails.medium.url}
          title={item.snippet && item.snippet.title}
        />
      ))}
    </div>
  );
};

export default SideList;
