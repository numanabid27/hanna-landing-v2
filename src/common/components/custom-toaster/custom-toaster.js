'use client';

import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function CustomToast() {
  return (
    <ToastContainer
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      limit={1}
      theme="dark"
      transition={Zoom}
      toastClassName={(context) =>
        context?.type === 'success'
          ? 'custom-toast-success'
          : context?.type === 'error'
          ? 'custom-toast-error'
          : 'custom-toast-default'
      }
    />
  );
}
