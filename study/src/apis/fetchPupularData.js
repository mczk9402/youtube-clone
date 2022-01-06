import axios from 'axios';

const KEY = 'AIzaSyCnc9xZoEVkAO9WOPAWUg8Y7SFEfjJHOCQ';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

const params = {
  part: 'snippet',
  maxResults: 5,
  key: KEY,
  resionCode: 'JP',
  type: 'video',
};

export const fetchPupularData = async () => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      chart: 'mostPopular',
    },
  });
};

export const fetchSelectedData = async (id) => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      id,
    },
  });
};

export const fetchRelatedData = async (id) => {
  return await youtube.get('/search', {
    params: {
      ...params,
      relatedToVideoId: id,
    },
  });
};

export const fetchSearchData = async (query) => {
  return await youtube.get('/search', {
    params: {
      ...params,
      q: query,
    },
  });
};
