console.log("hello")
const button = document.getElementById('button')
timedPressed = 0 
button.addEventListener("click",()=>{
    timedPressed+=1 
    if(timedPressed<3){ alert(`You've pressed a button ${timedPressed} times`)}
    else if(timedPressed==3){alert(` Alright no more alerts as that would take to long now it'll just log to the console`)}
    else if (timedPressed < 10 ) {console.log(`You've pressed a button ${timedPressed} times `)}
    else if( timedPressed%10==0){console.log(`You've pressed a button ${timedPressed} times `)}
})