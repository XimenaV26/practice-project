import {
  logoutFirebase,
  signIn,
  userInfo,
} from "../../../utils/firebase/firebaseAuth";
import { login, logout } from "./";

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    await signIn(email, password);
    const userData = userInfo();
    dispatch(login(userData));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
