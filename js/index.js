// calculation starts
// card 1
let serial = 0;
document.getElementById('btn-triangle').addEventListener('click', function(){
    serial +=1
    const shapeName = document.getElementById('nam-triangle').innerText;
    const shapeInputField = document.getElementById('input-1').value;
    const shapeInputField2 = document.getElementById('input-2').value;
    const areaCalculation = 0.5 * parseFloat(shapeInputField) * parseFloat(shapeInputField2);
    

    displayData(serial, shapeName, areaCalculation)
})

// card 2
document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial +=1
    const shapeName = document.getElementById('name-rectangle').innerText;
    const shapeInputField3 = document.getElementById('input-3').value;
    const shapeInputField4 = document.getElementById('input-4').value;
    const areaCalculation = parseFloat(shapeInputField3) * parseFloat(shapeInputField4);
    

    displayData(serial, shapeName, areaCalculation)
})
// card 3