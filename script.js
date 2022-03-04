document.querySelector('.cross').style.display='none';
document.querySelector('.hamp').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.hamp').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.hamp').style.display='none'
        setTimeout(() =>{
            document.querySelector('.cross').style.display='inline'
    }, 300);
}
})
document.querySelector('.cross').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(!document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.hamp').style.display='none'
        document.querySelector('.cross').style.display='inline'
    }
    else{
        document.querySelector('.cross').style.display='none'
        setTimeout(() =>{
        document.querySelector('.hamp').style.display='inline'   
    }, 350);
}
})