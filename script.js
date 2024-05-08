const checkButton=document.getElementById('check-btn');
const textInput=document.getElementById('text-input');
const result=document.getElementById('result');

checkButton.addEventListener('click',()=>{
  const inputValue=textInput.value.trim().toLowerCase();
  const inputValueProcess=inputValue.replace(/[^a-z0-9]/g, '');
  const reversedValue=inputValueProcess.split('').reverse().join('');
  if(inputValue===''){
    alert('Please input a value');
  }
  else{
    if(inputValueProcess===reversedValue){
        result.textContent=`${inputValue} is a palindrome.`;
    }
    else{
        result.textContent=`${inputValue} is not a palindrome.`;
    }
}});