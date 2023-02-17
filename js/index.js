// calculation starts
// card 1
let serial = 0;
document.getElementById('btn-triangle').addEventListener('click', function () {
    serial += 1
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


    displayData(serial, shapeName, areaCalculation);

})

// card 2
document.getElementById('btn-rectangle').addEventListener('click', function () {
    serial += 1
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


    displayData(serial, shapeName, areaCalculation);
})
// card 3
document.getElementById('btn-pgram').addEventListener('click', function () {
    serial += 1;
    const shapeName = document.getElementById('name-pgram').innerText;
    const paraBase = getTextElementValueById('para-base')
    const paraHeight = getTextElementValueById('para-height')

    const areaCalculation = paraBase * paraHeight;
    displayData(serial, shapeName, areaCalculation);


})

// card 4
document.getElementById("btn-rhombus").addEventListener('click', function () {
    serial += 1;
    const shapeName = document.getElementById('name-rhombus').innerText;
    const rhombusD1 = getTextElementValueById('rhombus-d1')
    const rhombusD2 = getTextElementValueById('rhombus-d2')
    const areaCalculation = rhombusD1 * rhombusD2;

    displayData(serial, shapeName, areaCalculation);
})
// card 5
document.getElementById("btn-pentagon").addEventListener('click', function () {
    serial += 1;
    const shapeName = document.getElementById('title-pentagon').innerText;
    const pentaP = getTextElementValueById('penta-p')
    const pentaB = getTextElementValueById('penta-b')
    const areaCalculation = 0.5 * pentaP * pentaB;
    displayData(serial, shapeName, areaCalculation);
})
// card 6
document.getElementById("btn-ellipse").addEventListener('click', function () {
    serial += 1;
    const shapeName = document.getElementById('title-ellipse').innerText;
    const ellipseA = getTextElementValueById('ellipse-a')
    const ellipseB = getTextElementValueById('ellipse-b')
    const area = 3.14 * ellipseA * ellipseB;
    const areaCalculation = area.toFixed(2);
    displayData(serial, shapeName, areaCalculation);
})

document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = "blog.html"
})