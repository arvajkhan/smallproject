function btn(){
    let a = Number(document.querySelector(".value1").value);
    let para = document.querySelector(".para")
    let abs;

   if(a >= 0){
        abs  = a;
    }else{
        abs = - a;
    }
    para.innerHTML = "This is Absolute Value :" + abs
}