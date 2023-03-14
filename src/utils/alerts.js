import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (alertValue, alertText) => {
  const params = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  };

  switch (alertValue) {
    case 'warning':
      toast.warn(`${alertText}`, params);
      break;
    case 'error':
      toast.error(`${alertText}`, params);
      break;
    case 'success':
      toast.success(`${alertText}`, params);
      break;
    case 'info':
      toast.info(`${alertText}`, params);
      break;
    default:
      return;
  }
};
export default notify;
