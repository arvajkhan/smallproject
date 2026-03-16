let btn = document.querySelector(".btn");
btn.addEventListener("click",function (){
    let principal = document.querySelector(".principal").value
    let rate = document.querySelector(".rate").value
    let time = document.querySelector(".time").value
    let amount = document.querySelector(".amount");
    let para = document.querySelector(".para");

    if(principal === " " || rate === " " || time === " "){
        para.innerHTML = "Please fill all field";
        return
    }
    let simpleInterest = (principal * rate * time) / 100;
    let totalAmount = Number(principal) + simpleInterest;

    amount.value = totalAmount;
    para.innerHTML = "Simple Interest" + simpleInterest;

})







