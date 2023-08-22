import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_rWY0oPkQOw86VljecntcjgNekztXuLYQYlYNCMGE2zcjzd5En7Y9wBjrpM5MQqsA';

const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  const url = `${BASE_URL}/breeds`;
  return axios
    .get(url, {
      headers: {
        'x-api-key':
          'live_rWY0oPkQOw86VljecntcjgNekztXuLYQYlYNCMGE2zcjzd5En7Y9wBjrpM5MQqsA',
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error:', error.message);
    });
}

function fetchCatByBreed(breedId) {
  const url = `${BASE_URL}/images/${breedId}`;
  return axios
    .get(url, {
      headers: {
        'x-api-key':
          'live_rWY0oPkQOw86VljecntcjgNekztXuLYQYlYNCMGE2zcjzd5En7Y9wBjrpM5MQqsA',
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error:', error.message);
    });
}

export { fetchBreeds, fetchCatByBreed };
