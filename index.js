var btnEnter=document.querySelector("#btn-enter")
var textInput=document.querySelector("#text-input");
var cashReceived=document.querySelector("#cash-received");
var outputBox=document.querySelector("#output");
var outputCash=document.querySelector("#outputcash");
var btncash=document.querySelector("#btn-cash");
var subt=document.querySelector("#sub");
var btnres=document.querySelector("#res");
 
function clickHandler(){
   var inpuT=textInput.value;
   outputBox.innerText=inpuT;
}
btnEnter.addEventListener("click",clickHandler);
btncash.addEventListener("click",clickHandler1);
btnres.addEventListener("click",sub);
function clickHandler1(){
    var cashReceive=cashReceived.value;
    outputCash.innerText=cashReceive;
}

function sub(){
    var n1=document.getElementById('text-input').value;
    var n2=document.getElementById('cash-received').value;
    var result=n2-n1;
    subt.innerText=result;
}
const coins=[1,2,5,10,20,100,500,1000];
let amount=sub();

function change(amount, coins) {
    if (amount === 0) {
        return [0, []];
    }
    // if (coins.length === 0 && amount > 0) {
    //     return [Infinity, []];
    // }
    if (coins[0] > amount) {
        return change(amount, coins.slice(1));
    } else {
        var loseIt = change(amount, coins.slice(1));  // just one call of change
        var useIt = change(amount - coins[0], coins); // just one call of change
        if (loseIt[0] < 1 + useIt[0]) {
            return loseIt;
        } else {
            return [1 + useIt[0], useIt[1].concat(coins[0])];
        }
    }
} 

// coins=[1,2,10,20,100,500,1000];
// amount=sub();
console.log(change());    



