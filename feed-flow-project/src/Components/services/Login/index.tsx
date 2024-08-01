import { auth, provider } from "../firebase";

export function handleSignIn() {
    auth.signInWithPopup(provider).catch(alert);
    console.log("Logou");
};