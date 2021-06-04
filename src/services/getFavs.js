import {API} from '../utils/apiURI'
export default function getFavs ({ jwt }) {
  return fetch(`${API}/users/getMyFavorite`, {
    method: 'GET',
    headers: {
      "Authorization":"Bearer "+jwt,
      "Content-Type": "application/json"
    }
  }).then(res => {
    return res.json()
  }).then(res => {
    if(res.status==="fail") throw JSON.stringify(res)
    const favs = res.data.movies
    return favs
  })
}
