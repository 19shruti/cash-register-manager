

let paid_Input = document.querySelector("#paid-Input");
let cost_Input = document.querySelector("#cost-Input");
let checkBtn = document.querySelector("#checkBtn");
let cashBt1n=document.querySelector("#cashBt1n");


let twothousand_count = document.querySelector("#twothousand_count");
let fivehund_count = document.querySelector("#fivehund_count");
let hund_count = document.querySelector("#hund_count");
let twenty_count = document.querySelector("#twenty_count");
let ten_count = document.querySelector("#ten_count");
let five_count = document.querySelector("#five_count");
let one_count = document.querySelector("#one_count");
let output=document.querySelector("#output");
function nextBtnHandler(){
        if(cost_Input.value>0){
            cashBt1n.style.display = "none";
            output.style.display = "block";
        }
        else{
            alert("Enter Valid Bill Amount!");
            output.style.display = "none";
        }    
    }
    cashBt1n.addEventListener("click", nextBtnHandler);4

    function resetTable(){
        twothousand_count.innerHTML ==="";
        fivehund_count.innerHTML ==="";
        hund_count.innerHTML ==="";
        twenty_count.innerHTML ==="";
        ten_count.innerHTML ==="";
        five_count.innerHTML ==="";
        one_count.innerHTML==="";
    }  

// checkBtn.addEventListener("click", function () {

    function clickBtn(){
  
    let cost = Number(cost_Input.value); 
   
   let paid = Number(paid_Input.value);
    let total_change = (paid - cost);

    if(total_change === 0){
        output.style.display = "none";
        alert("Nothing to return!");
    }
    else if(total_change > 0){
        // balanceDisplay.innerText = "₹" + balance;
        alert("the change to return :: "+ total_change);
        document.getElementById("chan").innerHTML="the change to return ::"+ total_change;
        
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
    
        outputSection.style.display = "block";
    }
    else  {
        // output.style.display = "none";
        alert("Insufficient Cash! Add More Cash.");    
        
    }   
    

   
    // resetTable();
   
    
}
checkBtn.addEventListener("click",clickBtn);
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
// function unhide(output) {
//     var item = document.getElementById(output);
//     if (item) {
//     item.classNameout=(item.out=='hidden')?'unhidden':'hidden';
//     }}
// checkBtn.addEventListener("click",clickBtn)