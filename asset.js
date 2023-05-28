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
const propertyamt=[];
const autoamt=[];
const goldamt=[];
dbref.child('assets').get()
.then((snapshot) => {
    const assetarr=[];
    snapshot.forEach((childsnapshot)=>{
        childsnapshot.forEach((ccsnapshot)=>{
            assetarr.push(ccsnapshot.val());
        })
        
    })
    console.log(assetarr);
    
    const n=assetarr.length;
    for(i=0; i<n; i++){
        if(i%4==0){
            if(assetarr[i+1]==='land'){
                propertyamt.push(assetarr[i]);
            }
            else if(assetarr[i+1]==='Jewelerry'){
                goldamt.push(assetarr[i]);
            }
            else if(assetarr[i+1]==='vehicles'){
                autoamt.push(assetarr[i]);
            }
        }

    }
    let sum1=0;
    propertyamt.forEach((item)=>{
        sum1=sum1+Number(item);
    })
    console.log(sum1);
    const property = document.querySelector('#prop');
    
    let totalsum = document.createElement('p');
    totalsum.innerText = sum1;
   
    property.prepend(totalsum);
    let text = document.createElement('p');
    text.innerText='Total amount invested in property';
    text.style.fontSize='medium'
    property.prepend(text);
    
    let sum2=0;
    goldamt.forEach((i)=>{
        sum2=sum2+Number(i);
    })
    console.log(sum2);
    const gold = document.querySelector('#gold');
    
    let totalsum2 = document.createElement('p');
    totalsum2.innerText = sum2;
    
    gold.prepend(totalsum2);
    let text2 = document.createElement('p');
    text2.innerText='Total amount invested in Gold';
    text2.style.fontSize='medium'
    gold.prepend(text2);
    
    

    let sum3=0;
    autoamt.forEach((i)=>{
        sum3=sum3+Number(i);
    })
    console.log(sum3);
    const auto = document.querySelector('#auto');
    
    let totalsum3 = document.createElement('p');
    totalsum3.innerText = sum3;
    
    auto.prepend(totalsum3);

    let text3 = document.createElement('p');
    text3.innerText='Total amount invested in Vehicles';
    text3.style.fontSize='medium'
    auto.prepend(text3);
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

const proparr=[];
const goldarr=[];
const vehiclearr=[];

dbref.child('assets').get().
then((snapshot)=>{
    
    const arr=[];
    snapshot.forEach((childsnapshot)=>{
        childsnapshot.forEach((ccsnapshot)=>{
            arr.push(ccsnapshot.val());
        })
        
    })
    console.log(arr);
    
    
    const n=arr.length;
    for(i=0;i<n;i++){
        
        if(i%4==0){
            const temparr=[];
            if(arr[i+1]==='land'){
                temparr.push(arr[i]) 
                temparr.push(arr[i+1])
                temparr.push(arr[i+2]);
                proparr.push(temparr);
            }
            else if(arr[i+1]==='vehicles'){
                temparr.push(arr[i]) 
                temparr.push(arr[i+1])
                temparr.push(arr[i+2]);
                vehiclearr.push(temparr);
            }
            else if(arr[i+1]==='Jewelerry'){
                temparr.push(arr[i]) 
                temparr.push(arr[i+1])
                temparr.push(arr[i+2]);
                goldarr.push(temparr);
            }
        }
        
    }
    console.log(proparr);
    const table=document.querySelector("#tb");
    for (let i = 0; i < proparr.length; i++ ) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        cell1.innerHTML = proparr[i][1];
        cell1.style.padding='10px';
        cell2.innerHTML = proparr[i][2] ;
        cell3.innerHTML = proparr[i][0];

        
        table.appendChild(row);

    }
    const table2=document.querySelector("#tb2");
    for (let i = 0; i < vehiclearr.length; i++ ) {
        var row = table2.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        cell1.innerHTML = vehiclearr[i][1];
        cell1.style.padding='10px';
        cell2.innerHTML = vehiclearr[i][2] ;
        cell3.innerHTML = vehiclearr[i][0];

        
        table2.appendChild(row);

    }
    const table3=document.querySelector("#tb3");
    for (let i = 0; i < goldarr.length; i++ ) {
        var row = table3.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        cell1.innerHTML = goldarr[i][1];
        cell1.style.padding='10px';
        cell2.innerHTML = goldarr[i][2] ;
        cell3.innerHTML = goldarr[i][0];

        
        table3.appendChild(row);

    }


    
})

    
    
    /*proparr.forEach((ele)=>{
        for(i = 0;)
    })*/


