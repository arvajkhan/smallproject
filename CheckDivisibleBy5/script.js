function btn(){
    let a = document.querySelector(".num1").value;
    let para = document.querySelector(".para");
    a = Number(a);
    if(a % 5 == 0){
        para.innerHTML = `${a} is divisible by 5 ✅` 
    }else{
        para.innerHTML = `${a} is divisible by 5 ❌` 
    }
}