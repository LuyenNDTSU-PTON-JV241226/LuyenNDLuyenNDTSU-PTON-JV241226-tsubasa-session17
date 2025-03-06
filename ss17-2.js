let evt = document.getElementById("event");
let btn = document.getElementById("btn");
let mode = true;

 btn.onclick = function(){
    if (mode === true){
        evt.style.backgroundColor = 'black';
        evt.style.color = 'white';
    }else{
        evt.style.backgroundColor = 'white';
        evt.style.color = 'black';
    }
    mode = !mode;
};

