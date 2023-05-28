const firebaseConfig = {
    apiKey: "AIzaSyC1SEbuwGykdFj8AKgHGeP3SKtfI-0z8yU",
    authDomain: "longterm-7fb30.firebaseapp.com",
    databaseURL: "https://longterm-7fb30-default-rtdb.firebaseio.com",
    projectId: "longterm-7fb30",
    storageBucket: "longterm-7fb30.appspot.com",
    messagingSenderId: "895831735442",
    appId: "1:895831735442:web:2ef15c4332359132a4ba4b",
    measurementId: "G-NR7M0C27L3"
};

firebase.initializeApp(firebaseConfig);
const db=firebase.database();
const dbref=db.ref();

const form = document.querySelector('.new-item-form');

const type = document.querySelector('#type');
const details = document.querySelector('#details');
const taxcat = document.querySelector("#taxcat");
const asscat = document.querySelector('#asscat');
const investment = document.querySelector("#investment");
const insurance = document.querySelector("#insurance");
const loans = document.querySelector("#loans");
const amount = document.querySelector('#amount');



form.addEventListener('change', (e)=>{
    e.preventDefault();
    if(type.value==='tax'){
        taxcat.classList.remove("hide");
        asscat.classList.add("hide");
        investment.classList.add("hide");
        loans.classList.add("hide");
        insurance.classList.add("hide");
    }
    else if(type.value==='invest'){
        taxcat.classList.add("hide");
        asscat.classList.add("hide");
        investment.classList.remove("hide");
        loans.classList.add("hide");
        insurance.classList.add("hide");
    }
    else if(type.value==='insurans'){
        taxcat.classList.add("hide");
        asscat.classList.add("hide");
        investment.classList.add("hide");
        loans.classList.add("hide");
        insurance.classList.remove("hide");
    }
    else if(type.value==='assets'){
        taxcat.classList.add("hide");
        asscat.classList.remove("hide");
        investment.classList.add("hide");
        loans.classList.add("hide");
        insurance.classList.add("hide");
    }
    else if(type.value==='lone'){
        taxcat.classList.add("hide");
        asscat.classList.add("hide");
        investment.classList.add("hide");
        loans.classList.remove("hide");
        insurance.classList.add("hide");
    }
})




form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(type.value==="assets"){
        savemsgs(type.value, asscat.value, details.value, amount.value);
    }
    else if(type.value==="lone"){
        savemsgs(type.value, loans.value, details.value, amount.value);
    }
    else if(type.value==="insurans"){
        savemsgs(type.value, insurance.value, details.value, amount.value);
    }
    else if(type.value==="invest"){
        savemsgs(type.value, investment.value, details.value, amount.value);
    }
    else{
        savemsgs(type.value, taxcat.value, details.value, amount.value);
    }
    
    window.location.reload();
});


const savemsgs = (typeval, categoryval, detailsval, amountval) => {
    if(type.value === 'assets'){
        var newdb = dbref.child('assets').push();
        newdb.set({
            type: typeval,
            category: categoryval,
            details: detailsval,
            amount: amountval
        });
    }
    else if(type.value === 'invest'){
        var newdb = dbref.child('investment').push();
        newdb.set({
            type: typeval,
            category: categoryval,
            details: detailsval,
            amount: amountval
        });
    }
    else if(type.value === 'insurans'){
        var newdb = dbref.child('insurance').push();
        newdb.set({
            type: typeval,
            category: categoryval,
            details: detailsval,
            amount: amountval
        });
    }
    else if(type.value === 'lone'){
        var newdb = dbref.child('loan').push();
        newdb.set({
            type: typeval,
            category: categoryval,
            details: detailsval,
            amount: amountval
        });
    }
    else{
        var newdb = dbref.child('tax').push();
        newdb.set({
            type: typeval,
            category: categoryval,
            details: detailsval,
            amount: amountval
        });
    }
    
    
}
