import { ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps extends ToastContainerProps { }

export const Toast = (props: ToastProps) => <ToastContainer {...props} />