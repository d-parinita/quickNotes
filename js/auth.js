//sign up

function signup_user() {
    event.preventDefault()
    const em = document.getElementById('email').value
    const ps = document.getElementById('password').value
    const nm = document.getElementById('name').value
    console.log(em, ps)

    if(ps.length < 6) {
        return window.alert('Password should not have less than 6 characters')
    }

    firebase.auth().createUserWithEmailAndPassword(em, ps)
        .then((userCredential) => {
            console.log(userCredential)
            const user = userCredential.user;
            console.log(user)
            user.updateProfile({
                displayName: nm
            })
            .then(() => {
                showToaster('Successfully signed up')
                setTimeout(() => {
                    window.location.href = "../notes.html";
                }, 3000);
            })
            .catch((error) => {
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            showToaster(errorMessage)
        });
}

//toaster msg

function showToaster(msg) {
    document.getElementById("snackbar").innerHTML = msg
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

//login

function login_user() {
    event.preventDefault()
    const em = document.getElementById('email').value
    const ps = document.getElementById('password').value
    console.log(em, ps)

    firebase.auth().signInWithEmailAndPassword(em, ps)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = "../notes.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            showToaster(errorMessage)
        });
}

//forgotPassword

function forgot_password() {
    const em = document.getElementById('email').value
    if(!em) return showToaster('Please enter your email id')
    firebase.auth().sendPasswordResetEmail(em)
        .then(() => {
            showToaster('Email has been sent to reset your password')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            showToaster(errorMessage)
        });
}
