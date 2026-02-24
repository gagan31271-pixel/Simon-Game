let game=[];
let user=[];
let btns=["red","green","yellow","blue"];

let start=false;
let level=0;

let h4=document.querySelector("h4");

document.addEventListener("keypress",function(){
    if(start==false){
       console.log("Game started");
       start=true;

       levelup();
    }
});

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")},400
    )
}

function levelup(){
    user=[];
    level++;
    h4.innerText=`Level Number ${level}`;

    // random btns choose
    let randIDX=Math.floor(Math.random()*3);
    let randCol=btns[randIDX];
    let randbtn=document.querySelector(`.${randCol}`);
    game.push(randCol);
    console.log(game);
    flash(randbtn);
}

function checkans(idx){
    if(user[idx]===game[idx]){
        if(user.length === game.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h4.innerText=`Game over , your Highest score ${level} .\n Press any key to start`;
        document.querySelector("body").style.backgroundColor="rgba(153, 20, 20, 0.5)";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },1000);
         restart();

    }
}

function btnpress(){
    let b=this;
    flash(b);
    userCol=b.getAttribute("id");
    user.push(userCol);
    console.log(user);
    checkans(user.length-1);
}

let allbtn=document.querySelectorAll(".b");
for(a of allbtn){
    a.addEventListener("click",btnpress);
}

function restart(){
    start=false;
    game=[];
    user=[];
    level=0;
}