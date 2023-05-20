let btn = document.querySelector('.burger_line')
let logo = document.querySelector('.navbar-brand');
let navbar=document.querySelector('.navbar');

let element = document.querySelectorAll('.nav-link');
let after = window.getComputedStyle(element[0], '::after');
for(let i=0;i<element.length;i++){
    element[i].style.setProperty('--bg-color', '#2685FD');
}


// btn.addEventListener('click', function () {
//     btn.style.display = "none";
//     new_nav.style.display = "block";
//     new_nav.style.zIndex = "1000";
//     close_btn.style.display = "block";
//     close_btn.style.zIndex = "5000";
//     close_btn.style.right = "20px";
//     close_btn.style.color = "white";
//     logo.style.display = "none";

// })
// close_btn.addEventListener('click', function () {
//     new_nav.style.display = "none";
//     new_nav.style.zIndex = "-5000";
//     close_btn.style.display = "none";
//     btn.style.display = "block";
//     document.body.style.overflow = 'visible';
//     logo.style.display = "block";
//     btn.style.opacity = 1;
// })

//change navbar color on scroll
let aboutSection=document.getElementById('about');
window.addEventListener('scroll', function() {
    if(window.scrollY>=(aboutSection.offsetTop-200)){
        navbar.style.backgroundColor='#2685FD';
        navbar.style.transitionDuration = "1s";
        for(let i=0;i<element.length;i++){
            element[i].style.setProperty('--bg-color', 'white');
        }
        
    }
    else{
        navbar.style.backgroundColor='transparent';
        navbar.style.transitionDuration = ".6s";
        for(let i=0;i<element.length;i++){
            element[i].style.setProperty('--bg-color', '#2685FD');
        }
    }
});


// effect about left on scroll
const observeer=new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('showw');
        } else{
            entry.target.classList.remove('showw');
        }
    });
});
const hiddeenElements=document.querySelectorAll('.hiddeen');
hiddeenElements.forEach((el) => observeer.observe(el) );
//end about left team on scroll


// effect about right on scroll
const observeeer=new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('showww');
        } else{
            entry.target.classList.remove('showww');
        }
    });
});
const hiddeeenElements=document.querySelectorAll('.hiddeeen');
hiddeeenElements.forEach((el) => observeeer.observe(el) );
//end about right  on scroll


// effect team on scroll
const observer=new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el) );
//end effect team on scroll



//effect header text 
let headerTXT=document.querySelector('.effect');
window.addEventListener('scroll', () => {
    let val=window.scrollY;
    headerTXT.style.left=val* -1 + 'px';
})
let customTXT=document.querySelector('.cust_tex');
window.addEventListener('scroll', () => {
    let val=window.scrollY;
    customTXT.style.top=val*  + 'px';
})


let scrYposition=document.querySelector('.nav_header');
var arrowup=document.querySelector('.arrowup');
arrowup.style.opacity='0'
window.addEventListener('scroll',function(){
    if(this.window.scrollY>=(scrYposition.offsetTop-800)){
        arrowup.style.opacity='1'

    }
    if(this.window.scrollY<(scrYposition.offsetTop+500)){
        arrowup.style.opacity='0'

    }

})
arrowup.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    });
})


let menu_btn=document.querySelector('.burger_line')
let new_close_btn=document.querySelector('.close_btn')
let anchor=document.querySelectorAll('.sidebar-menu li')
for(let i=0;i<anchor.length;i++){
    anchor[i].addEventListener('click',toggleSidebarOpen)
}
menu_btn.addEventListener('click',toggleSidebarOpen)
new_close_btn.addEventListener('click',toggleSidebarOpen)

function toggleSidebarOpen(){
    behavior:"smooth"
    document.body.classList.toggle('sidebar-open')
}

let loading=document.querySelector('.loadere')
document.body.style.overflowY='hidden'
window.addEventListener('load',function(){
    this.setTimeout(function(){
        loading.style.opacity='0';
        loading.style.transition='1s'
        loading.style.visibility='hidden'
        document.body.style.overflowY='visible'
    },2000)
})