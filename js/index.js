// calculation starts
// card 1
document.getElementById('btn-triangle').addEventListener('click', function(){
    const shapeName = document.getElementById('nam-triangle').innerText;
    const shapeInputField = document.getElementById('input-1').value;
    const shapeInputField2 = document.getElementById('input-2').value;
    const areaCalculation = 0.5 * parseFloat(shapeInputField) * parseFloat(shapeInputField2);
    console.log(shapeName, shapeInputField, shapeInputField2, areaCalculation)
})