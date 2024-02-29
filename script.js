let displayContent = document.querySelector(".inner-display-content");

let powerBtn = document.querySelector(".power");
let addBtn = document.querySelector(".add");
let memoryKeys = document.getElementsByClassName('memory');
memoryKeys = Array.from(memoryKeys);

let numberKeyArray = document.getElementsByClassName("numberKeys");
numberKeyArray = Array.from(numberKeyArray);

let isOn = false;
let insertedMemoryValue = 0;
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

memoryKeys.map((currentBtn)=>{
    currentBtn.addEventListener('click', ()=>{

        switch(currentBtn.textContent){
            case 'M+':
                insertedMemoryValue = Number(displayContent.textContent);
                console.log(insertedMemoryValue); 
                break; 

            case 'M-':
                insertedMemoryValue -= Number(displayContent.textContent);
                console.log(insertedMemoryValue);
                break;
                
            case 'MR':
                displayContent.textContent = insertedMemoryValue;
                break;
                
            case 'MC':
                insertedMemoryValue = 0;
                console.log(insertedMemoryValue);
                break;  
        }
    });
})

/*----------NUMBERS BTNS EVENT LISTENERS----------*/

numberKeyArray.map((currentBtn)=>{
   
        currentBtn.addEventListener("click", ()=> {
            if(isOn){
                displayContent.textContent += currentBtn.textContent;
            }
        });
});