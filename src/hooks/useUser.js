import {useCallback, useContext, useState} from 'react'
import Context from '../context/UserContext'
import loginService from '../services/login'
import registerService from '../services/register'
import addFavService from '../services/addFav'
import deleteFavService from '../services/delFav'
import logoutService from '../services/logout'
import Cookies from 'js-cookie'
import {notify} from "../components/notification/Notification";
export default function useUser () {
  const {favs, jwt, setFavs, setJWT} = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })
  const [registerErr,setRegisterErr]=useState("")
  const login = useCallback((email, password) => {
    if(navigator.onLine){
    setState({loading: true, error: false })
    loginService({email, password})
      .then(jwt => {
        Cookies.set('jwt', jwt)
        setState({loading: false, error: false })
        setJWT(jwt)
        notify("Loggeado Correctamente","success")
      })
      .catch(err => {
        Cookies.remove('jwt')
        setState({loading: false, error: true })
        setRegisterErr(err)
      })}
      else{
        notify("Funcionando offline","error");
      }
  }, [setJWT])

  const register = useCallback((name, email, password, passwordConfirm) => {
    if(navigator.onLine){
    setState({loading: true, error: false })
    registerService({name, email, password, passwordConfirm})
      .then(jwt => {
        Cookies.set('jwt', jwt)
        setState({loading: false, error: false })
        setJWT(jwt)
        notify("Registrado Correctamente","success")
      })
      .catch(err => {
        Cookies.remove('jwt')
        setState({loading: false, error: true })
        setRegisterErr(err)
      })}
    else{
      notify("Funcionando offline","error");
    }
  }, [setJWT])

  const addFav = useCallback( ({id}) => {
    if(navigator.onLine){
			
    addFavService({id, jwt})
      .then((favs)=> {notify("Agregado a Favoritos","info"); setFavs(favs)})
      .catch(e => {
        notify(JSON.parse(e).message,'error')
      })
    }
    else{
      notify("Funcionando offline","error");
    }
  }, [jwt, setFavs])

  const delFav = useCallback(({id}) => {
    if(navigator.onLine){
    deleteFavService({id, jwt})
      .then( (message)=>{
        if (message.includes("Succesfully")){
          let newfavs = [...favs]
          newfavs =newfavs.filter( el=>el._id!==id)
          setFavs(newfavs);
          notify("Eliminado de Favoritos","info")
        }
      } )
      .catch(e => {
        notify(JSON.parse(e).message,'error')
      })
    }else{
      notify("Funcionando offline","error");
    }
  }, [jwt, setFavs,favs]) 

  const logout = useCallback(() => {
    if(navigator.onLine){
    logoutService({jwt})
    .then( (message)=>{
      Cookies.remove('jwt')
      setJWT(null)
      notify(message,'info')
    } )
    .catch(e => {
      notify(JSON.parse(e).message,'error')
    })}else{
      notify("Funcionando offline","error");
    }
    
  }, [setJWT,jwt])

  return {
    addFav,
    delFav,
    favs,
    jwt,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    register,
    registerErr
  }
} 