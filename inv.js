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
const cryamt=[];
const goldamt=[];
const fixamt=[];
const equamt=[];

dbref.child('investment').get()
.then((snapshot) => {
    let sum1=0;
    let sum2=0;
    let sum3 =0;
    let sum4=0;
    snapshot.forEach((childsnapshot)=>{
        const temp=[]
            
            if(childsnapshot.val().category=="stock"){
    
                temp.push(childsnapshot.val().category);
                temp.push(childsnapshot.val().details);
                temp.push(childsnapshot.val().amount);
                sum1+=  Number(childsnapshot.val().amount);
                equamt.push(temp);
            }
            

            if(childsnapshot.val().category=="crypto"){
               
                temp.push(childsnapshot.val().category);
                temp.push(childsnapshot.val().details);
                temp.push(childsnapshot.val().amount);
                sum2+=  Number(childsnapshot.val().amount);
                cryamt.push(temp);
            }
            if(childsnapshot.val().category=="gold"){
               
                temp.push(childsnapshot.val().category);
                temp.push(childsnapshot.val().details);
                temp.push(childsnapshot.val().amount);
                sum3 +=  Number(childsnapshot.val().amount);
                goldamt.push(temp);
            }
            if(childsnapshot.val().category=="fd"){
          
                temp.push(childsnapshot.val().category);
                temp.push(childsnapshot.val().details);
                temp.push(childsnapshot.val().amount);
                sum4+=  Number(childsnapshot.val().amount);
                fixamt.push(temp);
            }
            


        })
        console.log(equamt);
            console.log(sum1);
            console.log(fixamt);
            console.log(sum4);
            console.log(cryamt);
            console.log(sum2);
            console.log(goldamt);
            console.log(sum3);

            const equity = document.querySelector('#prop');
            
            let totalsum = document.createElement('p');
            totalsum.innerText = sum1;
        
            equity.prepend(totalsum);
            let text = document.createElement('p');
            text.innerText='Total amount invested in Equity';
            text.style.fontSize='medium'
            equity.prepend(text);


            const crypto = document.querySelector('#auto');
    
            let totalsum2 = document.createElement('p');
            totalsum2.innerText = sum2;
            
            crypto.prepend(totalsum2);
            let text2 = document.createElement('p');
            text2.innerText='Total amount invested in Cryptocurrency';
            text2.style.fontSize='medium'
            crypto.prepend(text2);


            
            const gold1 = document.querySelector('#gold');
    
            let totalsum3 = document.createElement('p');
            totalsum3.innerText = sum3;
            
            gold1.prepend(totalsum3);
            let text3 = document.createElement('p');
            text3.innerText='Total amount invested in Gold';
            text3.style.fontSize='medium'
            gold1.prepend(text3);


            const fixed = document.querySelector('#fixed');
    
            let totalsum4 = document.createElement('p');
            totalsum4.innerText = sum4;
            
            fixed.prepend(totalsum4);
            let text4 = document.createElement('p');
            text4.innerText='Total amount invested in Fixed Deposits';
            text4.style.fontSize='medium'
            fixed.prepend(text4);

            const table=document.querySelector("#tb");
            for (let i = 0; i < equamt.length; i++ ) {
                var row = table.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                
                cell1.innerHTML = equamt[i][1];
                cell1.style.padding='10px';
                cell2.innerHTML = equamt[i][2] ;
                cell3.innerHTML = equamt[i][0];
        
                
                table.appendChild(row);
        
            }
            const table2=document.querySelector("#tb2");
            for (let i = 0; i < cryamt.length; i++ ) {
                var row = table2.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                
                cell1.innerHTML = cryamt[i][1];
                cell1.style.padding='10px';
                cell2.innerHTML = cryamt[i][2] ;
                cell3.innerHTML = cryamt[i][0];
        
                
                table2.appendChild(row);
        
            }
            const table3=document.querySelector("#tb3");
            for (let i = 0; i < goldamt.length; i++ ) {
                var row = table3.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                
                cell1.innerHTML = goldamt[i][1];
                cell1.style.padding='10px';
                cell2.innerHTML = goldamt[i][2] ;
                cell3.innerHTML = goldamt[i][0];
        
                
                table3.appendChild(row);
        
            }
            const table4=document.querySelector("#tb4");
            for (let i = 0; i < fixamt.length; i++ ) {
                var row = table3.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                
                cell1.innerHTML = fixamt[i][1];
                cell1.style.padding='10px';
                cell2.innerHTML = fixamt[i][2] ;
                cell3.innerHTML = fixamt[i][0];
        
                
                table4.appendChild(row);
        
            }

})

function showf1(){
    const form1=document.getElementById("form1");
    form1.style.display="block";
}

function hidef1(){
    const form1=document.getElementById("form1");
    form1.style.display="none";
}

function showf2(){
    const form2=document.getElementById("form2");
    form2.style.display="block";
}

function hidef2(){
    const form2=document.getElementById("form2");
    form2.style.display="none";
}
function showf3(){
    const form3=document.getElementById("form3");
    form3.style.display="block";
}

function hidef3(){
    const form3=document.getElementById("form3");
    form3.style.display="none";
}

function showf4(){
    const form4=document.getElementById("form4");
    form4.style.display="block";
}

function hidef4(){
    const form4=document.getElementById("form4");
    form4.style.display="none";
}