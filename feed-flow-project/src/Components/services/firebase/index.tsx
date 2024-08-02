import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
};

/* const firebaseConfig = {
  apiKey: "AIzaSyAqTZyNhbyr6kSlej2hXlAiVeAkXYK0lyE",
  authDomain: "feed-flow-d841d.firebaseapp.com",
  projectId: "feed-flow-d841d",
  storageBucket: "feed-flow-d841d.appspot.com",
  messagingSenderId: "144276156896",
  appId: "1:144276156896:web:b912247ae6e0736b357b85"
}; */

/* NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=InBoEIEHiklnOaS4d-nVZMDxUUpbfKIbnjoafG8nkL0
NY_TIMES_API_KEY=EuPjdZijA7SVOJMHl0reSkselAiV9L3S
API_SECRET=Fr3u7TUeWSv5S3pd
APP_API_ID=c5dc736b-7f25-4eb9-ad54-dfeeecb88e46 */

/* const firebaseConfig = {
  apiKey: "AIzaSyB-wYRoHZUteraxh9ki-9SPjjAkZZOMFPA",
  authDomain: "e4devs-81719.firebaseapp.com",
  projectId: "e4devs-81719",
  storageBucket: "e4devs-81719.appspot.com",
  messagingSenderId: "395236028251",
  appId: "1:395236028251:web:c0a3a7e2f24dd18d1db47e",
  measurementId: "G-FV4907L738"
}; */

// Initialize Firebase
// const analytics = getAnalytics(app);
/* const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }; */

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
