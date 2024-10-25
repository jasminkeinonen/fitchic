import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyBdeJ37HESOcpU0AXekjPOrplJ8Iy4Key4",
  authDomain: "testi-8cebb.firebaseapp.com",
  projectId: "testi-8cebb",
  storageBucket: "testi-8cebb.appspot.com",
  messagingSenderId: "606097980634",
  appId: "1:606097980634:web:2930b0ed3f4c7f3b8ef9e3"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);