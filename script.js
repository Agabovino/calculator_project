let displayContent = document.querySelector(".inner-display-content");

let powerBtn = document.querySelector(".power");
let addBtn = document.querySelector(".add");

let numberKeyArray = document.getElementsByClassName("numberKeys");
numberKeyArray = Array.from(numberKeyArray);


let oneBtn = document.querySelector(".one");
console.log(oneBtn.textContent);

let isOn = false;
let memoryValue;



/*----------FUNCTIONS----------*/

function add(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}

/*----------EVENT LISTENERS----------*/

powerBtn.addEventListener("click", ()=>{

    if(isOn == true){
        displayContent.textContent = "";
        isOn = false;
    }else{
        displayContent.textContent = "0";
        isOn = true;
    }
    
});

addBtn.addEventListener("click", ()=>{

});

/*----------NUMBERS BTNS EVENT LISTENERS----------*/

numberKeyArray.map((currentBtn)=>{
   
        currentBtn.addEventListener("click", ()=> {
            if(isOn){
                displayContent.textContent += currentBtn.textContent;
            }
        });
});