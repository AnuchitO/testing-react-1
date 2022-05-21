import axios from 'axios'

export const runSearch = (apiKey, query) => {
  return axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
    .then((response) => {
      return response.data.photos
    })
    .catch((error) => {
      console.log('Encountered an error with fetching and parsing data', error)
      return error
    })
}
