console.log(document.querySelectorAll(".btn"));
let inputString="hi";
for (let i=0;i<document.querySelectorAll(".btn").length;i++){
    // inputString=inputString+document.querySelectorAll(".btn")[i].innerHTML;
    document.querySelectorAll(".btn")[i].addEventListener("click",handleClick);
};

function handleClick(event){
    let inputVal=event.target.innerHTML;
    console.log(inputVal);
    let textField=document.querySelector(".inputField");
    console.log(textField);
    textField.value+=inputVal;
}

document.querySelector(".answer").addEventListener("click",handleCalculate);
function handleCalculate(event){
let inputText=document.querySelector(".inputField");
let ans=eval(inputText.value);
console.log(ans);
inputText.value=ans;
}

document.querySelector(".back").addEventListener("click",function(event){
    let inputField=document.querySelector(".inputField");
    let inputText=inputField.value;
    inputField.value=inputText.substring(0,inputText.length-1);
});

document.querySelector(".clear").addEventListener("click",function(event){
    document.querySelector(".inputField").value="";
});