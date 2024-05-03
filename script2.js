const wrapper=document.querySelector('.wrapper');
const loginlink = document.querySelector('.Login-link');
const registerlink = document.querySelector('.register-link');
const loginbtn = document.querySelector('.btn');
const innercross = document.querySelector('.icon-close')

document.getElementById("ali-fb").addEventListener("click",function (){
    window.location.href = "https://www.facebook.com/ali.hunain.5811?mibextid=ZbWKwL";
});
document.getElementById("ali-ins").addEventListener("click",function (){
    window.location.href = "https://www.instagram.com/ali_hunain22?igsh=b25nOTE4ZWhqZWd6";
});

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

loginbtn.addEventListener('click', ()=> {
    wrapper.classList.toggle('active-pop');
});
innercross.addEventListener('click', ()=>{
    wrapper.classList.remove('active-pop');
});
