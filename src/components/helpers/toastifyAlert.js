import { Bounce, toast } from "react-toastify";

const toastifyAlert = (type,message) => {
    const toastConfig =  {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
      
      return toast[type](message,toastConfig); 
}

export default toastifyAlert