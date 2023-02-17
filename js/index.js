// calculation starts
// card 1
let serial = 0;
document.getElementById('btn-triangle').addEventListener('click', function(){
    serial +=1
    const shapeName = document.getElementById('name-triangle').innerText;
    const shapeInputField = document.getElementById('input-1').value;
    const shapeInputField2 = document.getElementById('input-2').value;
    if (
        shapeInputField == "" ||
        shapeInputField2 == "" ||
        shapeInputField <= 0 ||
        shapeInputField2 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const areaCalculation = 0.5 * parseFloat(shapeInputField) * parseFloat(shapeInputField2);
    

    displayData(serial, shapeName, areaCalculation)
})

// card 2
document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial +=1
    const shapeName = document.getElementById('name-rectangle').innerText;
    const shapeInputField3 = document.getElementById('input-3').value;
    const shapeInputField4 = document.getElementById('input-4').value;
    if (
        shapeInputField3 == "" ||
        shapeInputField4 == "" ||
        shapeInputField3 <= 0 ||
        shapeInputField4 <= 0
      ) {
        return alert("please enter any valid number");
      }
    const areaCalculation = parseFloat(shapeInputField3) * parseFloat(shapeInputField4);
    

    displayData(serial, shapeName, areaCalculation)
})
// card 3
document.getElementById('btn-pgram').addEventListener('click', function(){
    serial +=1;
    const shapeName = document.getElementById('name-pgram').innerText;
    const paraBase = getTextElementValueById('para-base')
    const paraHeight = getTextElementValueById('para-height')

    const areaCalculation = paraBase * paraHeight;
    displayData(serial, shapeName, areaCalculation);

    
})

// card 4
document.getElementById("btn-rhombus").addEventListener('click', function(){
    serial += 1;
    const shapeName = document.getElementById('name-rhombus').innerText;
    const paraBase = getTextElementValueById('rhombus-d1')
    const paraHeight = getTextElementValueById('rhombus-d2')
    const areaCalculation = paraBase * paraHeight;
    displayData(serial, shapeName, areaCalculation);
})
// card 5
document.getElementById("btn-pentagon").addEventListener('click', function(){
    serial += 1;
    const shapeName = document.getElementById('title-pentagon').innerText;
    const paraBase = getTextElementValueById('penta-p')
    const paraHeight = getTextElementValueById('penta-b')
    const areaCalculation = 0.5 * paraBase * paraHeight;
    displayData(serial, shapeName, areaCalculation);
})