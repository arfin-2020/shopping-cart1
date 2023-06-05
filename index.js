const capturingInputFieldValueById = (elementId) => {
    const inputElement = document.getElementById(elementId);
    const inputFieldparseFloatValue = Number(inputElement.value);
    return inputFieldparseFloatValue;
}

const innerTextValueUsingID = (elementId)=>{
    const capturingElement = document.getElementById(elementId);
    const PreviousPrice = Number(capturingElement.innerText);
    return PreviousPrice;
}
// Here I implemented Subtotal, Tax, Total 

const totalCalculationOfSubtotalTaxTotalUsingID = (iphonePrice, iphoneCasePrice, subtotalId, taxId, totalId) => {
  
    const subTotalElement = document.getElementById(subtotalId);
    const iphoneTotalPrice = innerTextValueUsingID(iphonePrice);
    const iphoneCaseTotalPrice = innerTextValueUsingID(iphoneCasePrice);
    const subTotalCalculation = Number(iphoneTotalPrice + iphoneCaseTotalPrice);
    subTotalElement.innerText = subTotalCalculation;
    const taxElement = document.getElementById(taxId);

    // tax calculation
    const taxWillBe = parseFloat((subTotalCalculation * 5) / 100);
    taxElement.innerText = taxWillBe;

    // total Calculation
    const totalElement = document.getElementById(totalId);
    const totalSum = (subTotalCalculation + taxWillBe);
    totalElement.innerText = totalSum.toFixed(2);;
}

const updateProductTotal = (price, inputFieldId, subtotalId, taxId, totalId, workFor, productName) => {
    const inputFieldElement = document.getElementById(inputFieldId);
    const productPriceElement = document.getElementById(price);
    const inputFieldValue = capturingInputFieldValueById(inputFieldId);
    inputFieldElement.value = inputFieldElement.value
    let countdownValueByClicking;
    let totalSumationOfIphonePrice;
    let totalSumationOfCasePrice;
    if (productName === 'iphone' && workFor === 'plus') {

        countdownValueByClicking = inputFieldValue + 1;
        inputFieldElement.value = countdownValueByClicking;
        // Product price calculation

        const iphonePrice = 1219;
        totalSumationOfIphonePrice = Number(countdownValueByClicking * iphonePrice);
    } else if(productName === 'iphone' && workFor === 'minus') {
        countdownValueByClicking = inputFieldValue - 1;
        inputFieldElement.value = countdownValueByClicking;
        // Product price calculation

        const iphonePrice = 1219;
        totalSumationOfIphonePrice = Number(countdownValueByClicking * iphonePrice);
    }else if (productName === 'iphoneCase' && workFor === 'plus') {

        countdownValueByClicking = inputFieldValue + 1;
        inputFieldElement.value = countdownValueByClicking;
        // Product price calculation

        const iphonePrice = 59;
        totalSumationOfCasePrice = Number(countdownValueByClicking * iphonePrice);
    } else if(productName === 'iphoneCase' && workFor === 'minus') {
        countdownValueByClicking = inputFieldValue - 1;
        inputFieldElement.value = countdownValueByClicking;
        // Product price calculation

        const iphonePrice = 59;
        totalSumationOfCasePrice = Number(countdownValueByClicking * iphonePrice);
    }

       productPriceElement.innerText = totalSumationOfIphonePrice || totalSumationOfCasePrice;

    // Update subtotal, tax, and total
    totalCalculationOfSubtotalTaxTotalUsingID('iphone-price','iphoneCase-price', subtotalId, taxId, totalId);
}

// Plus button click handler for iPhone
document.getElementById('btn-plus-iphone').addEventListener("click", function () {
    updateProductTotal('iphone-price', 'iphone-inputField', 'Subtotal', 'tax', 'total', 'plus', 'iphone');
});

// Minus button click handler for iPhone
document.getElementById('btn-minus-iphone').addEventListener("click", function () {
    updateProductTotal('iphone-price', 'iphone-inputField', 'Subtotal', 'tax', 'total', 'minus', 'iphone');
});

// Plus button click handler for iPhone Case
document.getElementById('btn-plus-iphoneCase').addEventListener("click", function () {
    updateProductTotal('iphoneCase-price', 'iphoneCase-inputField', 'Subtotal', 'tax', 'total', 'plus', 'iphoneCase');
});

// Minus button click handler for iPhone Case
document.getElementById('btn-minus-iphoneCase').addEventListener("click", function () {
    updateProductTotal('iphoneCase-price', 'iphoneCase-inputField', 'Subtotal', 'tax', 'total', 'minus', 'iphoneCase');
});
