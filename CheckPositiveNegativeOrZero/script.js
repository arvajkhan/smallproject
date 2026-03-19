function btn(){
    let number = Number(document.querySelector(".value").value);
    let para = document.querySelector(".para");
    if(number > 0 ){
        para.innerHTML = "This is Positive Number" + number;
    }else if(number < 0 ){
        para.innerHTML = "This is Negative Number " + number;
    }else{
        para.innerHTML = "This is Zero"
    }
}