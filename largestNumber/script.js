function btn(){
    let p1 = Number(document.querySelector(".first_value").value);
    let p2 = Number(document.querySelector(".second_value").value);
    let para = document.querySelector(".para");
    if(p1 > p2){
        para.innerHTML = "Largest value" + " " + p1;
    }else if(p2 > p1){
        para.innerHTML = "Largest value" + " " + p2
    }else{
        para.innerHTML = "Both Value are equal"
    }

}