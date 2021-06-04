import React,  {useState} from 'react'
import { AppRouter } from './router/AppRouter';
import { UserContextProvider } from "./context/UserContext";

function App() {
 

  return (
      <UserContextProvider >
        <AppRouter/>
      </UserContextProvider>
  )
}

export default App;