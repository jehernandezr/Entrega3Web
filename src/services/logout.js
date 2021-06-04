import {API} from '../utils/apiURI'

export default function logout ({jwt}) {
  return fetch(`${API}/users/logout`, {
    method: 'GET',
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