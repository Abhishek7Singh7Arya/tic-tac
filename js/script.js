const play_board = document.querySelector(".play-board");
const check_btn = document.querySelector("#check-btn");
const popUp = document.querySelector(".pop-up");
const cross = document.querySelector("#cross");
let img = ["a","b","c"];
let box=[];



play_board.addEventListener('click', (t)=>{
let id = t.target.id;
let ranNum =parseInt( Math.floor(Math.random() * 3),10);
console.log("random number = " + ranNum);
let connectId = document.querySelector(`#${id}`);


if(id=='b1'){
connectId.style.backgroundImage= `url("../images/${img[ranNum]}.jpg")`;
box[0]= ranNum;

}

if(id=='b2'){
    connectId.style.backgroundImage= `url("../images/${img[ranNum]}.jpg")`;
    box[1]= ranNum;
  
}
if(id=='b3'){
    connectId.style.backgroundImage= `url("../images/${img[ranNum]}.jpg")`;
    box[2]= ranNum;
}
if(id=='b4'){
    connectId.style.backgroundImage= `url("../images/${img[ranNum]}.jpg")`;
    box[3]= ranNum;
}
if(id=='b5'){
    connectId.style.backgroundImage= `url("../images/${img[ranNum]}.jpg")`;
    box[4]= ranNum;
  
}
if(id=='b6'){
    connectId.style.backgroundImage= `url("../images/${img[ranNum]}.jpg")`;
    box[5]= ranNum;
}
if(id=='b7'){
    connectId.style.backgroundImage= `url("../images/${img[ranNum]}.jpg")`;
    box[6]= ranNum;
}
if(id=='b8'){
    connectId.style.backgroundImage= `url("../images/${img[ranNum]}.jpg")`;
    box[7]= ranNum;
}
if(id=='b9'){
    connectId.style.backgroundImage= `url("../images/${img[ranNum]}.jpg")`;
    box[8]= ranNum;
 
}


});

let msg=["You Win!","Neither diagonal matches"];


// button Event
const sta = document.querySelector("#status");
check_btn.addEventListener('click',()=>{

   console.log(box[0],box[4],box[8]);
   
popUp.style.visibility="visible";

//    winning cases
    if(box[0] == box[4]&& box[4] == box[8] && box[0]!=undefined){

  sta.innerHTML=msg[0];

    }
    else if(box[2]==box[4] && box[4]==box[6] && box[2]!=undefined){

        sta.innerHTML=msg[0];
    }

    // lose cases
    else{

        sta.innerHTML=msg[1];

    }



});

cross.addEventListener('click',()=>{
popUp.style.visibility="hidden";
document.location.reload(true);
});