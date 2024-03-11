//firebase config
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);

function signup(){
    const email = document.getElementById("email2").value;
    const phone = document.getElementById('phone').value;
    const fullname = document.getElementById("name").value;
    const pwd = document.getElementById("pwd2").value;
    const cpwd = document.getElementById("pwd3").value;
    if(cpwd != pwd){
        alert("passwords do not match!!");
        return;
    }
    if(email == null){
        alert("email field cant be empty!!");
        return;
    }
    if(phone.length != 10){
        alert("please enter a valid phone number!");
    }

    auth.createUserWithEmailAndPassword(email, pwd)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    window.location.assign("home.html");

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });
  document.getElementById("createacc").reset();
    
}

function signin(){
    const email = document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;
    
    auth.signInWithEmailAndPassword(email, pwd)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.assign("home.html")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });
  document.getElementById("loginn").reset();
  
}


function resetpwd(){
  const email = document.getElementById("email").value;
  auth.sendPasswordResetEmail(email)
  .then(() => {
      alert("password reset email sent successfully");
  })
  .catch(error => {
      consolerror(error);
  })
}

function caf(){
    const loginform = document.querySelector("#loginn");
    const createaccform = document.querySelector("#createacc");
    loginform.classList.add("hide");
    createaccform.classList.remove("hide");
}

function btlf(){
    const loginform = document.querySelector("#loginn");
    const createaccform = document.querySelector("#createacc");
    loginform.classList.remove("hide");
    createaccform.classList.add("hide");
}


