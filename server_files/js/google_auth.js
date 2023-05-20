import {initializeApp} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNk2maGCUh4NnLhV3mKvMpTmx5uYkcH-g",
    authDomain: "all-in-one-aio.firebaseapp.com",
    databaseURL: "https://all-in-one-aio-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "all-in-one-aio",
    storageBucket: "all-in-one-aio.appspot.com",
    messagingSenderId: "752140232690",
    appId: "1:752140232690:web:3050f7cc5947a4be0d6d6b"
};
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

function googleSigning() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log('token:' + token + '\ n');
            console.log(user);
        }).catch((error) => {
        console.log(error.message);
    });


}

let googleBtn = document.querySelector('#googleLogin');
googleBtn.addEventListener('click', googleSigning);