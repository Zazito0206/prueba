// ---- MODAL LOGIN ----
const openLoginBtn = document.getElementById('open-login-modal');
const loginModal = document.getElementById('login-modal');
const closeLoginBtn = document.getElementById('close-login-modal');

// Abrir modal
openLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Cerrar modal con botón
closeLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function(e) {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// ---- LOGIN CON GOOGLE ----
const googleLoginBtn = document.getElementById('google-login');
if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', function () {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                loginModal.style.display = 'none';
                alert('¡Bienvenido, ' + result.user.displayName + '!');
                // Actualiza la UI si es necesario
            })
            .catch(error => {
                alert('Error al iniciar sesión con Google: ' + error.message);
            });
    });
}

// ---- LOGIN CON FACEBOOK ----
const facebookLoginBtn = document.getElementById('facebook-login');
if (facebookLoginBtn) {
    facebookLoginBtn.addEventListener('click', function () {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                loginModal.style.display = 'none';
                alert('¡Bienvenido, ' + result.user.displayName + '!');
                // Actualiza la UI si es necesario
            })
            .catch(error => {
                alert('Error al iniciar sesión con Facebook: ' + error.message);
            });
    });
}
