
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, doc, setDoc, collection, getDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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
const db = getFirestore(app);
const auth = getAuth(app);

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    document.body.innerHTML = "<h3>Accès refusé. Connecte-toi d'abord.</h3>";
    return;
  }

  const docRef = doc(db, "roles", user.email);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists() || docSnap.data().role !== "admin") {
    document.body.innerHTML = "<h3>Accès refusé. Tu n'es pas admin.</h3>";
    return;
  }

  document.getElementById("publishBtn").addEventListener("click", async () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("imageUrl").value;

    try {
      await addDoc(collection(db, "articles"), {
        title,
        description,
        imageUrl,
        createdAt: new Date(),
        author: user.email
      });
      document.getElementById("message").textContent = "Article publié avec succès !";
    } catch (error) {
      document.getElementById("message").textContent = "Erreur : " + error.message;
    }
  });
});
