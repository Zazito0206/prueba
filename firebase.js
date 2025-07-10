// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyBQYiNwWdydK2HsXDP4qT3NgkzUim8QIRE",
  authDomain: "escritoresenprocesoes.firebaseapp.com",
  projectId: "escritoresenprocesoes",
  storageBucket: "escritoresenprocesoes.firebasestorage.app",
  messagingSenderId: "1000364156177",
  appId: "1:1000364156177:web:8449bcfca4356326e1d8b0"
};

// Inicializa Firebase SOLO si aún no está inicializado
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Variables globales para usar en cualquier archivo JS
window.auth = firebase.auth();
window.db = firebase.firestore();
window.storage = firebase.storage();
