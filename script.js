"use strict";
let myname = document.getElementById('name');
let mypic = document.getElementById('pic');
let mydesignation = document.getElementById('designation');
let myphone = document.getElementById('phone');
let myemail = document.getElementById('email');
let myaddress = document.getElementById('address');
let myskills = document.getElementById('skills');
let myskills2 = document.getElementById('skills2');
let myskills3 = document.getElementById('skills3');
let myeducation = document.getElementById('education');
let myexperience = document.getElementById('experience');
let mylanguage1 = document.getElementById('language1');
let mylanguage2 = document.getElementById('language2');
let mylanguage3 = document.getElementById('language3');
let myabout = document.getElementById('about');
let submitBtn = document.getElementById('submitBtn');
let form = document.getElementById('form');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem("name", myname.value);
    // ye code image ko local storage me set karna ka he
    if (mypic.files && mypic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem('pic', textImg);
        });
        reader.readAsDataURL(mypic.files[0]);
    }
    // bas yaha per image localStorage me set ho gaye
    localStorage.setItem("designation", mydesignation.value);
    localStorage.setItem("phone", myphone.value);
    localStorage.setItem("email", myemail.value);
    localStorage.setItem("address", myaddress.value);
    localStorage.setItem("skills", myskills.value);
    localStorage.setItem("skills2", myskills2.value);
    localStorage.setItem("skills3", myskills3.value);
    localStorage.setItem("education", myeducation.value);
    localStorage.setItem("experience", myexperience.value);
    localStorage.setItem("language1", mylanguage1.value);
    localStorage.setItem("language2", mylanguage2.value);
    localStorage.setItem("language3", mylanguage3.value);
    localStorage.setItem("about", myabout.value);
    window.location.href = "./resumee/resume.html";
});
