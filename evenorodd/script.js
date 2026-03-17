function btn(){
    let values = document.querySelector(".value").value
    let para = document.querySelector(".para")
    let n = Number( values);
    if(n % 2 == 0){
        para.innerHTML = "Even Number"
    }if(n % 2 == 1){
        para.innerHTML = "Odd number"
    }
}