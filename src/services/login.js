import {API} from '../utils/apiURI'

export default function login ({ email, password }) {
  return fetch(`${API}/users/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  }).then(res => {
    return res.json()
  }).then(res => {
    if(res.status==="fail") throw JSON.stringify(res)
    const { token } = res
    return token
  })
}
