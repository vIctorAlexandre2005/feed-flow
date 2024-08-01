import { auth } from "../firebase";

export function Logout() {
    auth.signOut();
}