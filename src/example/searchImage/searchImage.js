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

// {
// 	data: {
// 		photos: [
// 			{
// 				id: '52087678033',
// 				owner: '74939715@N05',
// 				secret: '6fd4a68b58',
// 				server: '65535',
// 				farm: 66,
// 				title: 'Wind blown',
// 				ispublic: 1,
// 				isfriend: 0,
// 				isfamily: 0,
// 			},
// 		],
// 	},
// }
