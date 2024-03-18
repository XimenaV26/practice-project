import {
  logoutFirebase,
  signIn,
  userInfo,
} from "../../../utils/firebase/firebaseAuth";
import { login, logout } from "./";

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    // Inicio de sesion
    const status = await signIn(email, password);
    // Si es correcto
    if (status.ok) {
      // Obtener datos del usario
      const userData = userInfo();

      // Guardar datos del usuario
      dispatch(login(userData));
    } else {
      // Si esta incorrecto, se dispara el logout y se manda el mensaje de error
      dispatch(logout());
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
