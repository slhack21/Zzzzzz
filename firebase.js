
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAB57QvsJb1EtBLZEq5k3Q7CYeLP61d8x8",
  authDomain: "ihl-reparation-58e25.firebaseapp.com",
  projectId: "ihl-reparation-58e25",
  storageBucket: "ihl-reparation-58e25.firebasestorage.app",
  messagingSenderId: "1025865567525",
  appId: "1:1025865567525:web:d1ce02766a8dad37c89ecc",
  measurementId: "G-HTD3HHVTTD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
