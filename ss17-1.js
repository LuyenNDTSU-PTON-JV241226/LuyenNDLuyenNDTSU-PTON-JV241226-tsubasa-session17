let h1 = document.getElementById("h1");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2")
btn1.onclick = function(){
    h1.style.display = 'none';
}
btn2.onclick = function(){
    h1.style.display = 'block';
}