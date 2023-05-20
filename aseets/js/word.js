let crete_file=document.querySelector('.btn');
let overlay=document.querySelector('.overlay');
let file_name=document.querySelector('.name_file')
crete_file.addEventListener('click',function(event){
    event.preventDefault();
    if(file_name.value==""){
        alert('you make a wrong');
        overlay.style.display='block';
    }
    else{
        overlay.style.display='none';
    }
})