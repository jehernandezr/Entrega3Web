import {API} from '../utils/apiURI'

export default function register (data) {
  return fetch(`${API}/users/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...data})
  }).then(res => {
    return res.json()
  }).then(res => {
    if(res.status==="fail") throw JSON.stringify(res)
    const { token } = res
    return token
  })
}