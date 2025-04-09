
// auth.js
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

document.getElementById('signupBtn')?.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert('Inscription réussie !'))
    .catch(error => alert('Erreur : ' + error.message));
});

document.getElementById('loginBtn')?.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert('Connexion réussie !'))
    .catch(error => alert('Erreur : ' + error.message));
});
