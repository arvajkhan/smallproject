function btn(){
    let value = document.querySelector(".value").value;
    let para = document.querySelector(".para");
    if(value % 2 === 0){
        para.innerHTML = "This is Divisible By 2 :" + value
    }else if(value % 3 === 0 ){
      para.innerHTML = "This is Divisible By 3 :" + value  
    }else{
        para.innerHTML = "This is not divisible by 2 and 3"
    }
}