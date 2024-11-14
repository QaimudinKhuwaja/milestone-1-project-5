let myname:any = localStorage.getItem('name')
window.addEventListener('load', ()=>{


let mypic = localStorage.getItem('pic')
let mydesignation = localStorage.getItem('designation')
let myphone = localStorage.getItem('phone')
let myemail = localStorage.getItem('email')
let myaddress = localStorage.getItem('address')

let myskills = localStorage.getItem("skills");
let myskills2 = localStorage.getItem("skills2");
let myskills3 = localStorage.getItem("skills3");
let myeducation = localStorage.getItem("education");
let myexperience = localStorage.getItem("experience");
let mylanguage1 = localStorage.getItem("language1");
let mylanguage2 = localStorage.getItem("language2");
let mylanguage3 = localStorage.getItem("language3");
let myabout = localStorage.getItem("about");




let resname:any = document.getElementById('resName')
resname.textContent = myname

let respic:any= document.getElementById('respic')
respic.src = mypic

let resdesignation:any = document.getElementById('resdesignation')
resdesignation.textContent = mydesignation

let resphone:any= document.getElementById('resphone')
resphone.textContent = myphone

let resemail:any= document.getElementById('resemail')
resemail.textContent = myemail

let resaddress:any= document.getElementById('resaddress')
resaddress.textContent = myaddress

let resskills:any= document.getElementById('resskills')
resskills.textContent = myskills

let resskills2:any= document.getElementById('resskills2')
resskills2.textContent = myskills2

let resskills3:any= document.getElementById('resskills3')
resskills3.textContent = myskills3

let reseducation:any= document.getElementById('reseducation')
reseducation.textContent = myeducation

let resexperience:any= document.getElementById('resexperience')
resexperience.textContent = myexperience

let reslanguage1:any= document.getElementById('reslanguage1')
reslanguage1.textContent = mylanguage1

let reslanguage2:any= document.getElementById('reslanguage2')
reslanguage2.textContent = mylanguage2

let reslanguage3:any= document.getElementById('reslanguage3')
reslanguage3.textContent = mylanguage3


let resabout:any= document.getElementById('resabout')
resabout.textContent = myabout


})

            // edit button
let editbtn:any= document.getElementById('editbtn')
editbtn.addEventListener('click',()=>{
    window.history.back();
   })
//    eends

// share link button

let resshare:any = document.getElementById('resshare')
let anc = document.getElementById('anc')


myname.toLowerCase().replace(/\s+/g, "-");


let baseUrl = "http://127.0.0.1:5500/resumee/resume.html";
let uniqueUrl = `${baseUrl}?/ ${myname} `

resshare.addEventListener('click', ()=>{
    anc?.setAttribute('href', uniqueUrl)
})

// eends

// copy link button

let copybtn=document.getElementById('copybtn');
copybtn?.addEventListener('click', () =>{
navigator.clipboard.writeText(uniqueUrl).then(()=>{
    alert('Link copied successfully')
})
});
// eends