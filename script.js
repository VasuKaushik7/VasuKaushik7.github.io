score=0;
flag=true;
count=0;
var audio=new Audio('music.mp3');
var audiogo=new Audio('gameover.mp3');
setTimeout(()=>{audio.play()},2000)
document.onkeydown=function(e){
    console.log(e.keyCode);
    if(e.keyCode==38)
    {
        var dino=document.querySelector('.dino')
        dino.classList.add('animateDino')
        setTimeout(()=>{dino.classList.remove('animateDino')
    console.log("dino")},600)
    }
    if(e.keyCode==39)
    {
        var dino=document.querySelector('.dino')
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dx+200+"px"
        dino.classList.remove('dinoLeft')
       
    }
    if(e.keyCode==37)
    {
        var dino=document.querySelector('.dino')
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dx-200+"px"
        dino.classList.add('dinoLeft')
       
    }
}
setInterval(()=>{
dino =document.querySelector('.dino');
dragon=document.querySelector('.dragon')

dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'));

// console.log("dx-ox : ",dx-ox,"\n dy-oy:",dy-oy);
offsetX=Math.abs(dx-ox);
offsetY=Math.abs(dy-oy);

if(offsetX<93 && offsetY<50)
{
    console.log("GameOver");
    dragon=document.querySelector('.dragon');
    dragon.classList.remove('animateDragon');
    gameOver=document.querySelector('.gameOver');
    gameOver.innerHTML="GameOver Reload To Restart"
    audio.pause();
    audiogo.play();
    setTimeout(()=>{audiogo.pause()},1500)
    gameOver.classList.add('gameOverRed')
    restart=document.querySelector('.restart');
    restart.style.display='block';
}
else if(offsetX<140 && offsetY>20 &&flag){
    flag=false
    score+=100;
    updateScore(score)
    setTimeout(()=>{flag=true},1000)
    if(count%3==0){
        count+=1;
        console.log(`jumped in if ${count} times`)
    setTimeout(()=>{
        dragon=document.querySelector('.dragon');
        animDur=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('animation-duration'));
        // console.log(animDur);
        newDur=animDur-0.3;
        dragon.style.animationDuration=newDur+'s';
    },500)}
    else{
        count+=1;
    //     count=0;
    //     setTimeout(()=>{
    //     dragon=document.querySelector('.dragon');
    //     animDur=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('animation-duration'));
    //     // console.log(animDur);
    //     newDur=animDur-0.1;
    //     dragon.style.animationDuration=newDur+'s';
    // },5000)
    console.log(`jumped ${count} times`)
        
    }
}
},100)

function updateScore(score)
{
    
    scoreH=document.querySelector('.score');
    scoreH.innerHTML=`Your Score :${score}`;
}
function restarted(){
    // consolr.log('restart')
    location.reload();
}