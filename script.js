const cross = getAnimatedCross(); // Zuweisung für Spieler mit Kreuz Symbol
const circle = getAnimatedCircle(); // Zuweisung für Spieler mit Kreis Symbol
let currentPlayer = 'cross';

let fields = [  // Array mit Feldzuständen
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];

function render() { // Sobald <body> geladen ist wird die function ausgeführt
    let content = document.getElementById('content'); // Variable content wird der ID content zugewiesen 
    let html = '<table>'; // Dem div container content wird der Anfang einer Tabelle eingefügt
    for (let i = 0; i < 3; i++) { // Eine for Schleife für 3 Felder Breit wird durchgeführt
        html += '<tr>'; // Das HTML tag für eine Spalte in einer Tabelle
        for (let j = 0; j < 3; j++) { // Eine zweite for Schleife wird erstellt wo für jedes einzelne i steht
            let index = i * 3 + j; // Eine Rechnung wird erstellt bei der der index für jedes einzelne feld berechnet wird  
            let field = fields[index]; // Ein Feld ist dann ein Element in dem Array fields[Zahl 0-8]
            html += `<td onclick="handleClick(${index})">${field ? field : ''}</td>`; //Prüft ob ein field den zustanD von Null hat, wenn nein dann kommt ein symbol rein und wenn doch dann ein leeres Feld
        }
        html += '</tr>'; // Spalte in der Tabelle wird geschlossen
    }

    html += '</table>'; // Tabelle wird geschlossen
    content.innerHTML = html; // Tabelle wird in den div Container content geschrieben 
}


function getAnimatedCircle() {
    return `
                <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="blue" stroke-width="5"
                        stroke-dasharray="251.2" stroke-dashoffset="251.2">
                        <animate 
                            attributeName="stroke-dashoffset" 
                            from="251.2" 
                            to="0" 
                            dur="500ms" 
                            fill="freeze"
                            begin="0s" />
                    </circle>
                </svg>`;
}


function getAnimatedCross() {
    return `
        <svg viewBox="0 0 100 100">
            <line x1="20" y1="20" x2="80" y2="80" stroke="red" stroke-width="5">
                <animate 
                    attributeName="x2" 
                    from="20" 
                    to="80" 
                    dur="500ms" 
                    fill="freeze"
                    begin="0s" />
                <animate 
                    attributeName="y2" 
                    from="20" 
                    to="80" 
                    dur="500ms" 
                    fill="freeze"
                    begin="0s" />
            </line>
            <line x1="80" y1="20" x2="20" y2="80" stroke="red" stroke-width="5">
                <animate 
                    attributeName="x2" 
                    from="80" 
                    to="20" 
                    dur="500ms" 
                    fill="freeze"
                    begin="0s" />
                <animate 
                    attributeName="y2" 
                    from="20" 
                    to="80" 
                    dur="500ms" 
                    fill="freeze"
                    begin="0s" />
            </line>
        </svg>`;
}


function handleClick(index) {
    if (!fields[index]) {
        if (currentPlayer === 'cross') {
            fields[index] = cross;
            currentPlayer = 'circle';
        } else {
            fields[index] = circle;
            currentPlayer = 'cross';
        }
        render();
    }
}