import React from 'react';
import Layout from 'components/Layout';
import { useEffect } from 'react';
import { fetchPupularData } from 'apis/fetchPupularData';
import { useContext } from 'react';
import { Store } from 'store';
import VideoGrid from 'components/VideoGrid';
import VideoGridItem from 'components/VideoGridItem';

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);

  useEffect(() => {
    fetchPupularData().then((response) => {
      setGlobalState({ type: 'SET_POPULAR', payload: { popular: response.data.items } });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <VideoGrid>
        {globalState.popular &&
          globalState.popular.map((item, index) => (
            <VideoGridItem
              key={index}
              id={item.id}
              src={item.snippet.thumbnails.default.url}
              title={item.snippet.title}
            />
          ))}
      </VideoGrid>
    </Layout>
  );
};

export default Top;
