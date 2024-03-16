console.log("Welcome to Tic Tac Toe")

let Turn="X"
let gameover=false

//Function to change turn
const changeTurn=()=>{
  return Turn==="X"?"O":"X"
}

//Function to check a win
const checkWin=()=>{
  let boxtext=document.getElementsByClassName('boxtext');
  let wins=[
    [0,1,2,2,5,0],
    [3,4,5,2,15,0],
    [6,7,8,2,25,0],
    [0,3,6,-8.5,15,90],
    [1,4,7,1.5,15,90],
    [2,5,8,11.5,15,90],
    [0,4,8,1,15,45],
    [2,4,6,1,15,135],
  ]
  wins.forEach(e =>{
   if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && ((boxtext[e[0]].innerText!=='')))
   {
     document.querySelector('.Info').innerText=boxtext[e[0]].innerText + " Won"
     gameover=true
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='206px'
     document.querySelector(".line").style.width= '30vw';
     document.querySelector(".line").style.transform= `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
   }
  })
}

//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
   let boxtext=element.querySelector('.boxtext');
   element.addEventListener('click',()=>{
       if(boxtext.innerText==='')
       {
         boxtext.innerText=Turn;
         Turn=changeTurn();
         checkWin();
         if(!gameover)
         {
            document.getElementsByClassName("Info")[0].innerText="Turn for "+ Turn;
         }
       }
   })
})

//Add onclick listener to reset button
reset.addEventListener('click',(element)=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    Turn="X"
    gameover=false
    document.querySelector(".line").style.width= '0vw';
    document.getElementsByClassName("Info")[0].innerText="Turn for "+ Turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px'
})
