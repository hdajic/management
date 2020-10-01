import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export function Info(text) {
    toast.info(text, { autoClose: 10000, position: toast.POSITION.BOTTOM_RIGHT});
}

export function Error(text) {
    toast.error(text, { autoClose: 10000, position: toast.POSITION.BOTTOM_RIGHT});
}

