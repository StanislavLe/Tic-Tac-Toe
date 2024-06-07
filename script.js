const cross = 'X'; // Zuweisung für Spieler mit Kreuz Symbol
const circle = 'O'; // Zuweisung für Spieler mit Kreis Symbol

let fields = [  // Array mit Feldzuständen
    cross,
    cross,
    cross,
    circle,
    circle,
    null,
    circle,
    null,
    circle
];

function render() { // Sobald <body> geladen ist wird die function ausgeführt
    let content = document.getElementById('content'); // Variable content wird der ID content zugewiesen 
    let html = '<table>'; // Dem div container content wird der Anfang einer Tabelle eingefügt
    for (let i = 0; i < 3; i++) { // Eine for Schleife für 3 Felder Breit wird durchgeführt
        html += '<tr>'; // Das HTML tag für eine Spalte in einer Tabelle
        for (let j = 0; j < 3; j++) { // Eine zweite for Schleife wird erstellt wo für jedes einzelne i steht
            let index = i * 3 + j; // Eine Rechnung wird erstellt bei der der index für jedes einzelne feld berechnet wird  
            let field = fields[index]; // Ein Feld ist dann ein Element in dem Array fields[Zahl 0-8]
            html += `<td>${field ? field : ''}</td>`; //Prüft ob ein field den zustanD von Null hat, wenn nein dann kommt ein symbol rein und wenn doch dann ein leeres Feld
        }
        html += '</tr>'; // Spalte in der Tabelle wird geschlossen
    }

    html += '</table>'; // Tabelle wird geschlossen
    content.innerHTML = html; // Tabelle wird in den div Container content geschrieben 
}