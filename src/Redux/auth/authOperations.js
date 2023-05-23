import { AsyncStorage } from "react-native"; // імпорт AsyncStorage для збереження токенів аутентифікації
import { auth } from "../../firebase/config"; // імпорт сервісу для взаємодії з сервером
import { authSlice } from "./authReducer";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "firebase/auth";

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

export const signInWithVerificationCode = ({ phone, code }) => {
  console.log(phone, code);
  const appVerifier = auth.RecaptchaVerifier("recaptcha-container", {
    size: "invisible",
  });
  console.log("appVerifier", appVerifier);
};

export const authSignUpUser =
  ({ nickName, email, password, avatarUrl }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: nickName,
        photoURL: avatarUrl,
      });
      const user = auth.currentUser;
      const uid = user.uid;
      const displayName = user.displayName;
      const photoURL = user.photoURL;
      const emailUser = user.email;
      dispatch(
        updateUserProfile({
          userId: uid,
          nickName: displayName,
          avatarUrl: photoURL,
          email: emailUser,
        })
      );
    } catch (error) {
      console.log("error", error);
      console.log("error message", error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log("error", error);
        console.log("error message", error.message);
      });
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  await signOut(auth)
    .then(() => {
      dispatch(authSignOut());
      alert("Sign-out successful!");
    })
    .catch((error) => {
      console.log("error", error);
      console.log("error message", error.message);
    });
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const emailUser = user.email;
        dispatch(
          updateUserProfile({
            userId: uid,
            nickName: displayName,
            avatarUrl: photoURL,
            email: emailUser,
          })
        );
        dispatch(authStateChange({ stateChange: true }));
      }
    });
  } catch (error) {
    console.log("error", error);
    console.log("error message", error.message);
  }
};

export const updateUserData = (data) => async (dispatch, getState) => {
  try {
    await updateProfile(auth.currentUser, {
      photoURL: data,
    });
    const user = auth.currentUser;
    const uid = user.uid;
    const displayName = user.displayName;
    const photoURL = user.photoURL;
    const emailUser = user.email;
    dispatch(
      updateUserProfile({
        userId: uid,
        nickName: displayName,
        avatarUrl: photoURL,
        email: emailUser,
      })
    );
  } catch (error) {
    console.log("error", error);
    console.log("error message", error.message);
  }
};

export const authDeleteUser = () => async (dispatch, getState) => {
  const user = auth.currentUser;
  await deleteUser(user)
    .then(() => {
      dispatch(authSignOut());
      alert("User deleted!");
    })
    .catch((error) => {
      console.log("error", error);
      console.log("error message", error.message);
    });
};

export const loginWithPhone = async (phoneNumber, verificationCode) => {
  try {
    // Виклик API для автентифікації за допомогою телефона
    const response = await auth.loginWithPhone(phoneNumber, verificationCode);

    // Отримання токенів аутентифікації з відповіді сервера
    const { accessToken, refreshToken } = response.data;

    // Збереження токенів аутентифікації в AsyncStorage
    await AsyncStorage.setItem("accessToken", accessToken);
    await AsyncStorage.setItem("refreshToken", refreshToken);

    // Повернення успішного результату
    return response.data;
  } catch (error) {
    // Обробка помилок
    throw error.response.data;
  }
};
