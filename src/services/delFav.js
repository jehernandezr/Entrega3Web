import {API} from '../utils/apiURI'

export default function delFav ({ id, jwt }) {
  return fetch(`${API}/users/deleteMyFavorite/${id}`, {
    method: 'DELETE',
    headers: {
      "Authorization":"Bearer "+jwt,
      "Content-Type": "application/json"
    }
  }).then(res => {
    return res.json()
  }).then(res => {
    if(res.status==="fail") throw JSON.stringify(res)
    return res.message;
  })
}
