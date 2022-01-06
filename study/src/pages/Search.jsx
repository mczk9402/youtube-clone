import { fetchSearchData } from 'apis/fetchPupularData';
import Layout from 'components/Layout';
import VideoGrid from 'components/VideoGrid';
import VideoGridItem from 'components/VideoGridItem';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Store } from 'store/index';

const Search = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  // 読み込まれた時の処理
  const setSearchResult = async () => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    console.log(query);
    if (query) {
      await fetchSearchData(query).then((res) => {
        console.log(res.data);
        setGlobalState({ type: 'SET_SEARCHED', payload: { searched: res.data.items } });
      });
    }
  };

  useEffect(() => {
    setSearchResult();
  }, [location.search]);

  return (
    <Layout>
      <VideoGrid>
        {globalState.searched ? (
          globalState.searched.map((search, index) => (
            <VideoGridItem
              id={search.id.videoId}
              key={index}
              src={search.snippet.thumbnails.medium.url}
              title={search.snippet.title}
            />
          ))
        ) : (
          <div>Search</div>
        )}
      </VideoGrid>
    </Layout>
  );
};

export default Search;
