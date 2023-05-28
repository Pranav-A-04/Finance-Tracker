const firebaseConfig = {
    apiKey: "AIzaSyBp3_6EMBqSrcIltJnohON3UGc6ID9Mmfw",
    authDomain: "customerlogin-eec4f.firebaseapp.com",
    databaseURL: "https://customerlogin-eec4f-default-rtdb.firebaseio.com",
    projectId: "customerlogin-eec4f",
    storageBucket: "customerlogin-eec4f.appspot.com",
    messagingSenderId: "726508662593",
    appId: "1:726508662593:web:962e4bc86c02baac6c7bc0",
    measurementId: "G-2PKKM43YE2"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);

function signout(){
    auth.signOut();
}