import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const notify = (message,type,position) => {
    let config ={
        position: position?position:"bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }
        if (type==="warning"){
            toast.warn(message, config);
        }
        else if(type==="dark"){
            toast.dark(message, config);
        }
        else if(type==="info") toast.info(message, config);
        else if(type==="success") toast.success(message, config);
        else if(type==="error") toast.error(message,config);
        else if(type==="default") toast(message,config)
    }

export  function Notification() {
    
         
        
    return (
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />

    )
}
