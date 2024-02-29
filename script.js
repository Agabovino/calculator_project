let displayContent = document.querySelector(".inner-display-content");

let powerBtn = document.querySelector(".power");
let addBtn = document.querySelector(".add");
let clearAndOnBtn = document.querySelector(".cleaner-and-powerOn");
let equalBtn = document.querySelector(".equal");

let memoryKeys = document.getElementsByClassName("memory");
memoryKeys = Array.from(memoryKeys);

let opKeys = document.getElementsByClassName("operationKeys");
opKeys = Array.from(opKeys);

let numberKeyArray = document.getElementsByClassName("numberKeys");
numberKeyArray = Array.from(numberKeyArray);

let functionType;
let isOn = false;
let isItCalculating = false;
let insertedMemoryValue = 0;
let memoryValue;


/*----------CALCULATOR BASIC FUNCTIONS----------*/

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return (num1 / num2);
}

function extract(num1){
    return num1 * (1/2);
}

function getMarkUp(){

}

function getPercentage(num1, num2){

    if(num1 == 0 || num2 == 0){
        if(num1 == 0){
            return num2/100;
        }else{
            return num1/100;
        }
    }else{
        return num1*(num2/100);
    }
}

/*----------BTNS EVENT LISTENERS----------*/

powerBtn.addEventListener("click", ()=>{

    if(isOn == true){
        displayContent.textContent = "";
        isOn = false;
    }else{
        displayContent.textContent = "0";
        isOn = true;
    }  
});

clearAndOnBtn.addEventListener("click", ()=>{
  
    if(isOn){
        displayContent.textContent = "0";
    }else{
        displayContent.textContent = "0";
        isOn = true;
    }
});

memoryKeys.map((currentBtn)=>{
    currentBtn.addEventListener('click', ()=>{

      if(isOn){ switch(currentBtn.textContent){
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
        }}
    });
})

opKeys.map((currentBtn)=>{
   
    currentBtn.addEventListener("click", ()=>{

    if(isOn){
        if(currentBtn.textContent == '√'){
        functionType = currentBtn.textContent;
        memoryValue = Number(displayContent.textContent);

        }else{
            functionType = currentBtn.textContent;
            memoryValue = Number(displayContent.textContent);
            displayContent.textContent = "0";
    }}

    });

});

equalBtn.addEventListener("click", ()=>{

    let numberedDisplayValue = Number(displayContent.textContent);
       
    switch(functionType){
         
        case '√':
            console.log(memoryValue);
            displayContent.textContent = extract(memoryValue);
            break; 

        case 'MU':
            getMarkUp();
            break; 

        case '÷':
            displayContent.textContent = divide(memoryValue, numberedDisplayValue);
            break;
            
        case '%':
            displayContent.textContent = getPercentage(memoryValue, numberedDisplayValue);
            break;

        case 'X':

            displayContent.textContent = multiply(memoryValue, numberedDisplayValue);
            break;  
            
         case '-':
            displayContent.textContent = subtract(memoryValue, numberedDisplayValue);
            break;

        case '+':
            
            displayContent.textContent = add(memoryValue, numberedDisplayValue);   
            break;    
    }
});

numberKeyArray.map((currentBtn)=>{
   
        currentBtn.addEventListener("click", ()=> {

            if(isOn){
                
                if(displayContent.textContent == '0'){

                    displayContent.textContent = '';
                    displayContent.textContent += currentBtn.textContent;

                }else{
                    displayContent.textContent += currentBtn.textContent;
                }       
            }
        });
});