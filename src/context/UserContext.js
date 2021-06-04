import React, {useState} from 'react'
import { useEffect } from 'react'
import getFavs from '../services/getFavs'
import Cookies from 'js-cookie'
import { Notification, notify } from "../components/notification/Notification";
const Context = React.createContext({})

export function UserContextProvider ({children}) {
  const [favs, setFavs] = useState([])
  const [jwt, setJWT] = useState(
    () => Cookies.get('jwt')
  )

  useEffect(() => {
    if(!navigator.onLine){
      notify("Funcionando offline","warning");
      if(localStorage.getItem("favs") === "") {
        notify("No se encontraron favoritos pre-caragados","warning");
      } else {
        setFavs(JSON.parse(localStorage.getItem("favs")));
      }
    }
    else{
      if (!jwt) return setFavs([])

      getFavs({jwt}).then(favis=>{
      if(favis.length===0)notify("No tienes Favoritos todavia",'warning','top-center')
      localStorage.setItem("favs", JSON.stringify(favs));
      setFavs(favis)
    }).catch(
      e=> notify(JSON.parse(e).message,'error','top-center') );
    }
  }, [jwt])
  

  return <Context.Provider value={{
    favs,
    jwt,
    setFavs,
    setJWT
  }}>
    {children}
    <Notification/>
  </Context.Provider>
}

export default Context