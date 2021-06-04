import {API} from '../utils/apiURI'


export default function addFav ({ id, jwt }) {

  return fetch(`${API}/users/addMyFavorite`, {
    method: 'POST',
    headers: {
      "Authorization":"Bearer "+jwt,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id: id})
  }).then(res => {
    return res.json()
  }).then(res => {
    if(res.status==="fail") throw JSON.stringify(res)
    const favs  = res.data.favorite.movies
    return favs
  })
}