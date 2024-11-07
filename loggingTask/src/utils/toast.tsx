import { toast, ToastOptions } from "react-toastify";

export const showSuccessToast = (message: string, options?: ToastOptions) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    ...options,
  });
};

export const showErrorToast = (message: string, options?: ToastOptions) => {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    ...options,
  });
};
