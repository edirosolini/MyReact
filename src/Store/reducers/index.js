import user from "./userReducer";
import toast from "./toastReducer";
import { combineReducers } from "redux";

export default combineReducers({ user, toast });
