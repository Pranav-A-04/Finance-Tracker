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
const healthamt=[];
const vehicleamt=[];
const lifeamt=[];
const inctax=[];
dbref.child('insurance').get()
.then((snapshot) => {
    const insuarr=[];
    snapshot.forEach((childsnapshot)=>{
        childsnapshot.forEach((ccsnapshot)=>{
            insuarr.push(ccsnapshot.val());
        })
        
    })
    console.log(insuarr);
    
    const n=insuarr.length;
    for(i=0; i<n; i++){
        if(i%4==0){
            if(insuarr[i+1]==='property'){
                inctax.push(insuarr[i]);
            }
            else if(insuarr[i+1]==='life'){
                lifeamt.push(insuarr[i]);
            }
            else if(insuarr[i+1]==='motor'){
                vehicleamt.push(insuarr[i]);
            }
            else if(insuarr[i+1]==='health'){
                healthamt.push(insuarr[i]);
            }
        }

    }
    let sum1=0;
    inctax.forEach((item)=>{
        sum1=sum1+Number(item);
    })
    console.log(sum1);
    const property = document.querySelector('#prop');
    
    let totalsum = document.createElement('p');
    totalsum.innerText = sum1;
   
    property.prepend(totalsum);
    let text = document.createElement('p');
    text.innerText='Total amount invested in property insurance';
    text.style.fontSize='medium'
    property.prepend(text);
    
    let sum2=0;
    vehicleamt.forEach((i)=>{
        sum2=sum2+Number(i);
    })
    console.log(sum2);
    const vehicle = document.querySelector('#vehicle');
    
    let totalsum2 = document.createElement('p');
    totalsum2.innerText = sum2;
    
    vehicle.prepend(totalsum2);
    let text2 = document.createElement('p');
    text2.innerText='Total amount invested in Motor Insurance';
    text2.style.fontSize='medium';
    vehicle.prepend(text2);
    
    

    let sum3=0;
    lifeamt.forEach((i)=>{
        sum3=sum3+Number(i);
    })
    console.log(sum3);
    const life = document.querySelector('#life');
    
    let totalsum3 = document.createElement('p');
    totalsum3.innerText = sum3;
    
    life.prepend(totalsum3);

    let text3 = document.createElement('p');
    text3.innerText='Total amount invested in Life Insurance';
    text3.style.fontSize='medium';
    life.prepend(text3);

    let sum4=0;
    healthamt.forEach((i)=>{
        sum4=sum4+Number(i);
    })
    console.log(sum4);
    const health = document.querySelector('#health');
    
    let totalsum4 = document.createElement('p');
    totalsum4.innerText = sum4;
    
    health.prepend(totalsum4);

    let text4 = document.createElement('p');
    text4.innerText='Total amount invested in Health Insurance';
    text4.style.fontSize='medium';
    health.prepend(text4);
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


const proparr=[];
const servicearr=[];
const vehiclearr=[];
const wealtharr=[];

dbref.child('insurance').get().
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
            if(arr[i+1]==='property'){
                temparr.push(arr[i]) 
                temparr.push(arr[i+1])
                temparr.push(arr[i+2]);
                proparr.push(temparr);
            }
            else if(arr[i+1]==='motor'){
                temparr.push(arr[i]) 
                temparr.push(arr[i+1])
                temparr.push(arr[i+2]);
                proparr.push(temparr);
            }
            else if(arr[i+1]==='life'){
                temparr.push(arr[i]) 
                temparr.push(arr[i+1])
                temparr.push(arr[i+2]);
                wealtharr.push(temparr);
            }
            else if(arr[i+1]==='health'){
                temparr.push(arr[i]) 
                temparr.push(arr[i+1])
                temparr.push(arr[i+2]);
                servicearr.push(temparr);
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
    for (let i = 0; i < proparr.length; i++ ) {
        var row = table2.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        cell1.innerHTML = proparr[i][1];
        cell1.style.padding='10px';
        cell2.innerHTML = proparr[i][2] ;
        cell3.innerHTML = proparr[i][0];

        
        table2.appendChild(row);

    }
    const table3=document.querySelector("#tb3");
    for (let i = 0; i < wealtharr.length; i++ ) {
        var row = table3.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        cell1.innerHTML = wealtharr[i][1];
        cell1.style.padding='10px';
        cell2.innerHTML = wealtharr[i][2] ;
        cell3.innerHTML = wealtharr[i][0];

        
        table3.appendChild(row);

    }
    const table4=document.querySelector("#tb4");
    for (let i = 0; i < servicearr.length; i++ ) {
        var row = table4.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        cell1.innerHTML = servicearr[i][1];
        cell1.style.padding='10px';
        cell2.innerHTML = servicearr[i][2] ;
        cell3.innerHTML = servicearr[i][0];

        
        table4.appendChild(row);

    }


    
})