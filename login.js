// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWTIELrkLw89MT3tVRzmeBwsI4N1pdsIg",
    authDomain: "field-genie-71297.firebaseapp.com",
    projectId: "field-genie-71297",
    storageBucket: "field-genie-71297.appspot.com",
    messagingSenderId: "150048388304",
    appId: "1:150048388304:web:a37a25eb69011e3f861ad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//submit buttons
const submit = document.getElementById('submit1');
submit.addEventListener("click", function (event) {
    event.preventDefault()

    //inputs
    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;

    signInWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("loging....");
            window.location.href = "chatbot.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });

})
