"use strict";
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
firebase.initializeApp(firebaseConfig);
const db=firebase.database();
const dbref=db.ref();

class expenses {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    owed(){
        return `${this.client} owes me Rs${this.amount} for ${this.details}`;
    }
    incoming() {
        return `received Rs${this.amount} from ${this.client} for ${this.details}`;
    }
    outgoing() {
        return `Rs${this.amount} paid ${this.client}  for ${this.details} `;
    }
    income() {
        return `Monthly income of Rs${this.amount} from ${this.client} received`;
    }
    
}

const form = document.querySelector('.new-item-form');

const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const category = document.querySelector("#category");
const incat = document.querySelector("#incat");
const amount = document.querySelector('#amount');
const ul = document.querySelector('.item-list');

class ListTemplate {
    constructor(c) {
        this.container = c;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.style.color = "white";
        if(heading=='owed'){
            p.innerText = item.owed();
        }
        else if(heading==='incoming'){
            p.innerText = item.incoming();
        }
        else if(heading==='outgoing'){
            p.innerText = item.outgoing();
        }
        else if(heading==='income'){
            p.innerText = item.income();
        }
        li.append(p);
        
        
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
const list = new ListTemplate(ul);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let doc;
    doc = new expenses(tofrom.value, details.value, amount.valueAsNumber);
    
    /*else if(type.value === 'outgoing'){
        doc = new outgoing(tofrom.value, details.value, amount.valueAsNumber);
    }*/
    list.render(doc, type.value, 'end');
    if(type.value=='income'){
        savemsgs(type.value, tofrom.value, incat.value, details.value, amount.value);
    }
    else{
        savemsgs(type.value, tofrom.value, category.value, details.value, amount.value);
    }
    
    window.location.reload();
    
    
});
function show() {
    ul.classList.remove("item-list");
}
function hide() {
    ul.classList.add("item-list");
}

const savemsgs = (typeval, tofromval, categoryval, detailsval, amountval) => {
    if(type.value === 'incoming'){
        var newdb = dbref.child('received').push();
        newdb.set({
            type: typeval,
            tofrom: tofromval,
            category: categoryval,
            details: detailsval,
            amount: amountval
        });
    }
    if(type.value === 'owed'){
        var newdb = dbref.child('owedtome').push();
        newdb.set({
            type: typeval,
            tofrom: tofromval,
            category: categoryval,
            details: detailsval,
            amount: amountval
        });
    }
    else if(type.value === 'outgoing'){
        var newdb = dbref.child('spent').push();
        newdb.set({
            type: typeval,
            tofrom: tofromval,
            category: categoryval,
            details: detailsval,
            amount: amountval
        });
    }
    else if(type.value === 'income'){
        var newdb = dbref.child('income').push();
        newdb.set({
            type: typeval,
            tofrom: tofromval,
            category: categoryval,
            details: detailsval,
            amount: amountval
        });
    }    
}



form.addEventListener('change', (e)=>{
    e.preventDefault();
    if(type.value==='income'){
        incat.classList.remove("hide");
        category.classList.add("hide");
    }
    else{
        incat.classList.add("hide");
        category.classList.remove("hide");
    }
})