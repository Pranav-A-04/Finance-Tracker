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
const inctax=[];
const propertytax=[];
const wealthtax=[];
const servicetax=[];
dbref.child('tax').get()
.then((snapshot) => {
    
    const taxarr=[];
    snapshot.forEach((childsnapshot)=>{
        childsnapshot.forEach((ccsnapshot)=>{
            taxarr.push(ccsnapshot.val());
        })
        
    })
    console.log(taxarr);
    
    const n=taxarr.length;
    for(i=0; i<n; i++){
        if(i%4==0){
            if(taxarr[i+1]==='incometax'){
                inctax.push(taxarr[i]);
            }
            else if(taxarr[i+1]==='propertytax'){
                propertytax.push(taxarr[i]);
            }
            else if(taxarr[i+1]==='wealthtax'){
                wealthtax.push(taxarr[i]);
            }
            else if(taxarr[i+1]==='servicetax'){
                servicetax.push(taxarr[i]);
            }
        }

    }
    let sum1=0;
    inctax.forEach((item)=>{
        sum1=sum1+Number(item);
    })
    console.log(sum1);
    const incomeax = document.querySelector('#inc');
    
    let totalsum = document.createElement('p');
    totalsum.innerText = sum1;
   
    incomeax.prepend(totalsum);
    let text = document.createElement('p');
    text.innerText='Total Amount of Income Tax';
    text.style.fontSize='medium';
    incomeax.prepend(text);
    
    let sum2=0;
    propertytax.forEach((i)=>{
        sum2=sum2+Number(i);
    })
    console.log(sum2);
    const prop = document.querySelector('#prop');
    
    let totalsum2 = document.createElement('p');
    totalsum2.innerText = sum2;
    
    prop.prepend(totalsum2);
    let text2 = document.createElement('p');
    text2.innerText='Total amount of Property Tax';
    text2.style.fontSize='medium';
    prop.prepend(text2);
    
    

    let sum3=0;
    wealthtax.forEach((i)=>{
        sum3=sum3+Number(i);
    })
    console.log(sum3);
    const wealth = document.querySelector('#wealth');
    
    let totalsum3 = document.createElement('p');
    totalsum3.innerText = sum3;
    
    wealth.prepend(totalsum3);

    let text3 = document.createElement('p');
    text3.innerText='Total amount of wealth tax';
    text3.style.fontSize='medium';
    wealth.prepend(text3);

    let sum4=0;
    servicetax.forEach((i)=>{
        sum4=sum4+Number(i);
    })
    console.log(sum4);
    const service = document.querySelector('#service');
    
    let totalsum4 = document.createElement('p');
    totalsum4.innerText = sum4;
    
    service.prepend(totalsum4);

    let text4 = document.createElement('p');
    text4.innerText='Total amount of Service Tax';
    text4.style.fontSize='medium';
    service.prepend(text4);
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



const incarr=[];
const proparr=[];
const wealtharr=[];
const servicearr=[];

dbref.child('tax').get().
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
            if(arr[i+1]==='incometax'){
                temparr.push(arr[i]) 
                temparr.push(arr[i+1])
                temparr.push(arr[i+2]);
                incarr.push(temparr);
            }
            else if(arr[i+1]==='propertytax'){
                temparr.push(arr[i]) 
                temparr.push(arr[i+1])
                temparr.push(arr[i+2]);
                proparr.push(temparr);
            }
            else if(arr[i+1]==='wealthtax'){
                temparr.push(arr[i]) 
                temparr.push(arr[i+1])
                temparr.push(arr[i+2]);
                wealtharr.push(temparr);
            }
            else if(arr[i+1]==='servicetax'){
                temparr.push(arr[i]) 
                temparr.push(arr[i+1])
                temparr.push(arr[i+2]);
                servicearr.push(temparr);
            }
        }
        
    }
    console.log(proparr);
    const table=document.querySelector("#tb");
    for (let i = 0; i < incarr.length; i++ ) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        cell1.innerHTML = incarr[i][1];
        cell1.style.padding='10px';
        cell2.innerHTML = incarr[i][2] ;
        cell3.innerHTML = incarr[i][0];

        
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