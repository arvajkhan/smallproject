function btn(){
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    num1 = Number(num1);
    num2 = Number(num2);
    
    // swap of destructuring
    [num1,num2] = [num2, num1]

    document.querySelector(".para").innerHTML = 
    `After Swap: first Value: = ${num1} Second Value: ${num2} `

}