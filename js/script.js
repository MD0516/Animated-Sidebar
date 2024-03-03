document.addEventListener('DOMContentLoaded',()=>{
    const sidenav=document.querySelector('.side-nav');
    const btnNav=document.querySelector('#btnNav');
    const overlayScreen=document.querySelector('.nav-overlay');

    btnNav.addEventListener('click',()=>{
        sidenav.classList.add('open');
    });
    overlayScreen.addEventListener('click',()=>{
        sidenav.classList.remove('open');
    });
});