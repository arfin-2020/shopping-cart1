

const capturingInputFieldValueById = (elementId)=>{
    const InputElement = document.getElementById(elementId);
    const inputFieldNumberValue = Number(InputElement.value);
    return inputFieldNumberValue;
}

const totalCalculationOfIphoneByID = (elementId,elementId2, totalCalculation,countdownValueByClicking)=>{
    // iPhone price calculation
    const iphonePriceElement = document.getElementById(elementId);
    const iphoneInputElement = document.getElementById(elementId2);
    // iphoneInputElement.value = countdownValueByClicking;
    iphoneInputElement.value = countdownValueByClicking;
    
    // iPhone price sumetion by countdown value;
    const totalSumationOfIphonePrice = totalCalculation;
    iphonePriceElement.innerText = totalSumationOfIphonePrice;
}

// Here I implemented Plus Button Calculation with iphone price.
document.getElementById('btn-plus-iphone').addEventListener("click", function(){

    const inputFieldValue = capturingInputFieldValueById('iphone-inputField');
    const countdownValueByClicking = inputFieldValue + 1; 
    

    // iPhone price calculation + iPhone price sumetion by countdown value;
    const iphonePrice = 1219;
    const totalSumationOfIphonePrice = (countdownValueByClicking * iphonePrice);
    totalCalculationOfIphoneByID('iphone-price',"iphone-inputField",totalSumationOfIphonePrice,countdownValueByClicking)
})

// Here I implemented minus Button Calculation with iphone price. 
document.getElementById('btn-minus-iphone').addEventListener("click", function(){
    // console.log('He click me bro.')
    const iphoneInputElement = document.getElementById()

})