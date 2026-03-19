function btn(){
    let a = document.querySelector(".num1").value;
    let para = document.querySelector(".para")
    let cube = a * a * a
    para.innerHTML = "Cube Number : " + cube
}