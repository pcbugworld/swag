const COLOR_VALUES = {"red": 1, "yellow": 2, "blue": 3, "green" : 4, "black": 5, "white": 6, "purple": 3.14, "orange": 2.71, "none": 1.049 }
var form = document.getElementById("calculator");
form.addEventListener('submit', displaySwag);

function displaySwag(event) {
    event.preventDefault();
    const nameVal =  document.getElementById("name").value;
    const clothingVal =  document.getElementById("clothingColor").value;
    const hairVal =  document.getElementById("hairDye").value;
    const handednessRadios = document.getElementsByName('handedness');

    let handednessVal;
    for (var i = 0, length = handednessRadios.length; i < length; i++) {
        if (handednessRadios[i].checked) {
            handednessVal = handednessRadios[i].value;
        }
    }
    const accessoryVal =  parseInt(document.getElementById("accessoryCount").value);
    const swagScore = calculateSwag(nameVal, clothingVal, hairVal, handednessVal, accessoryVal);
    const resultDisplay = document.querySelector('#results');
    resultDisplay.textContent = `Your swag score is ${Number.parseFloat(swagScore).toFixed(2)}%`; 
    return false;    
}

function calculateSwag(name, clothingColor, hairDye, handedness, accessoryCount) {
    nameLength = name.length;
    clothingScore = COLOR_VALUES[clothingColor];
    hairScore = COLOR_VALUES[hairDye];
    handValue = handedness === 'right' ? 6 : 7;
    return (Math.pow((clothingScore / handValue), (accessoryCount + 1)) / (hairScore + nameLength)) * 100;    
}
