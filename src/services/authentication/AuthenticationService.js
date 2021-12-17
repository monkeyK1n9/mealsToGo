import { initializeApp, getApps } from "@firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "@firebase/auth";

export const loginRequest = (email, password) => {
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, email, password)
}

export const registerRequest = (email, password) => {
    const auth = getAuth()
    return createUserWithEmailAndPassword(auth, email, password)
}