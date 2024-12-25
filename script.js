let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let chBtn = document.querySelector(".chBtn");
let msgCont = document.querySelector(".msg-container");

let first="X";
let turn="X";

let countX=0;
let countO=0;

chBtn.addEventListener("click",()=>{
    if (first==="X"){
        first="O";
        turn="O";
        alert(`NOW PLAYER 1: ${first}`);
    }else{
        first="X";
        turn="X";
        alert(`NOW PLAYER 1: ${first}`);
    }
});





reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        chBtn.disabled=false;
        msgCont.classList.add("hide");
        first=turn;
        
    });

});

const winPattern =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        chBtn.disabled=true;
        if (first==="X"){
            box.innerText ="X";
            first="O";
        }else{
            box.innerText ="0";
            first="X";
        }
        box.disabled = true;

        checkWinner();
        
    });
    
});

const showWinner=(winner)=>{
    if (winner==="X"){
        countX++;
        msgCont.innerText=`Congratulation ${winner} is winner.\nX wins :${countX} times, O wins: ${countO} times.`;
        msgCont.classList.remove("hide");
    }else{
        countO++;
        msgCont.innerText=`Congratulation ${winner} is winner.\nO wins:${countO} times, X wins: ${countX} times.`;
        msgCont.classList.remove("hide");
    }
}

const boxDisable =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}



const checkWinner =()=>{
    for(pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if (pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                boxDisable();
            }
        }
        
    }
}



