import Layout from 'components/Layout';
import SideList from 'components/SideList';
import VideoDetail from 'components/VideoDetail';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Store } from 'store/index';
import { fetchSelectedData, fetchRelatedData } from 'apis/fetchPupularData';

const Watch = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setVideos = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('v');
    if (id) {
      const [selected, related] = await Promise.all([fetchSelectedData(id), fetchRelatedData(id)]);
      setGlobalState({ type: 'SET_SELECED', payload: { selected: selected.data.items.shift() } });
      setGlobalState({ type: 'SET_RELATED', payload: { related: related.data.items } });
      console.log(globalState.selected);
    }
  };

  useEffect(() => {
    setVideos();
  }, [location.search]);

  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  );
};

export default Watch;
