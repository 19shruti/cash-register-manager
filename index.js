

let paid_Input = document.querySelector("#paid-Input");
let cost_Input = document.querySelector("#cost-Input");
let checkBtn = document.querySelector("#checkBtn");


let twothousand_count = document.querySelector("#twothousand_count");
let fivehund_count = document.querySelector("#fivehund_count");
let hund_count = document.querySelector("#hund_count");
let twenty_count = document.querySelector("#twenty_count");
let ten_count = document.querySelector("#ten_count");
let five_count = document.querySelector("#five_count");
let one_count = document.querySelector("#one_count");

    
checkBtn.addEventListener("click", function () {

    let paid = Number(paid_Input.value);
    let cost = Number(cost_Input.value);
    let total_change = (paid - cost);
    alert("total change is ::  " + total_change);
    let twothousand = Math.floor(total_change / 2000);
    let left_over = (total_change % 2000);
    let fivehund = Math.floor(left_over / 500);
    left_over = (left_over % 500);
    let hund = Math.floor(left_over / 100);
    left_over = (left_over % 100);
    let twenty = Math.floor(left_over / 20);
    left_over = (left_over % 20);
    let ten = Math.floor(left_over/ 10);
    left_over = (left_over % 10);
    let five = Math.floor(left_over/ 5);
    left_over = (left_over % 5);
    let one = left_over;

    twothousand_count.innerHTML = twothousand;
    fivehund_count.innerHTML = fivehund;
    hund_count.innerHTML = hund;
    twenty_count.innerHTML = twenty;
    ten_count.innerHTML = ten;
    five_count.innerHTML = five;
    one_count.innerHTML = one;
})
// function setVisibility(checkBtn,output,text1,paid_Input,checkBtn)  {
//     if(document.getElementById('cashBt1n').value=='Show Layer'){
//         document.getElementById('cashBt1n').value = 'Hide Layer';
//         document.getElementById('checkBtn').style.display = 'none';
//         document.getElementById('output').style.display = 'none';
//         }else{
//         document.getElementById('cashBt1n').value = 'hide Layer';
//         document.getElementById('checkBtn').style.display = 'inline';
//         document.getElementById('output').style.display = 'inline';
//         }
//         }
    
function toggleVisibility(cashBt1n) {
  
    var e = document.getElementById(cashBt1n);
    if(e.style.display == 'block' )
       e.style.display = 'none';
    else
       e.style.display = 'block';
}
