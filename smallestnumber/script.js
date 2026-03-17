function btn(){
    let n1 = Number(document.querySelector(".first_value").value);
    let n2 = Number(document.querySelector(".second_value").value);
    let para = document.querySelector(".para");

    if(n1 < n2){
        para.innerHTML = "Smallest Value" + n1;
    }else if(n2 < n1){
        para.innerHTML = "Smallest Value" + n2;
    }else{
        para.innerHTML = "Both Value are equal"
    }
}

