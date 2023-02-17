
// function for calculation area data display

function displayData(serial, name, result) {
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${result}</td>
    <td>cm<sup>2</sup></td>
    <button class="btn btn-secondary">Convert to m<sup>2</sup></button>
    </td>
    `;
    container.appendChild(tr);
}

// common function for cards
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}