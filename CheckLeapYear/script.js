function btn(){
    let value = Number(document.querySelector(".value").value);
    let para = document.querySelector(".para")
    if(value % 4 === 0 && value % 100 !== 0){
        para.innerHTML = "This is Leap Year" + value;
    }else{
       para.innerHTML = "This is Leap Not Year" + value;
    }
}