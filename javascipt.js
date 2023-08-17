const boxes=document.querySelectorAll(".boxes");
const heading2=document.getElementById("heading2");
const red=document.getElementById("red");
const yellow=document.getElementById("yellow");
const green=document.getElementById("green");
const blue=document.getElementById("blue");
let colors=[red,yellow,green,blue];
let colors2=["red","yellow","green","blue"];
let userGuess=[];
let computerGuess=[];
let start=false;
let index=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //  console.dir(event.target);
      let user = box.getAttribute("id");
      userGuess.push(user);
      console.log(userGuess);
      checkans(userGuess.length-1);     
    });
})

function checkans(len){
    
        if(userGuess[len]==computerGuess[len]){
            if(userGuess.length==computerGuess.length){
                changeHeading();
            }
          }     
        else{
            heading2.innerHTML=`<p>Press any key to restart the game<br>Total score : ${index}</p>`;
             reset();
        }
};

function changeHeading(){
    index++;
    heading2.innerText='Level '+`${index}`;
    const randomNo=Math.floor(Math.random()*4);
        
    colors[randomNo].style.backgroundColor='white';
    setTimeout(() => {
    colors[randomNo].style.backgroundColor=colors2[randomNo];
    }, 100);


    computerGuess.push(colors2[randomNo]);
    console.log("computer guess ==>",computerGuess);
    userGuess.length=[];
   
}
window.addEventListener("keypress",()=>{
    if(start==false){
        changeHeading();
        start=true;
    }
});

function reset(){
    start=false;
    index=0;
    userGuess=[];
    computerGuess=[];
}


