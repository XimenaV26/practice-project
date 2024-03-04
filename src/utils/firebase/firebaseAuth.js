import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async () => {
  await auth.signOut();
};

export const userInfo = () => {
  if (auth.currentUser === null) return {};

  const { displayName, email, phoneNumber, photoURL, uid } = auth.currentUser;

  return {
    displayName,
    email,
    phoneNumber,
    photoURL,
    uid,
  };
};
