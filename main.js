// output the header row
//TODO: Write two nested for loops to output the rest of the multiplication table

function generateTable(size) {
    let table = new Array;
    for (let i = 0; i < size; i++) {
        table[i] = new Array;
        for (let j = 0; j < size; j++) {
            table[i][j] = i * j;
        }
    }
    return table;
}

function formatTable(array) {
    const table = document.createElement("table");
    const caption = document.createElement("caption");
    const tbody = document.createElement("tbody");

    const thead = document.createElement("thead");
    const hr = document.createElement("tr");
    const x = document.createElement("td");

    caption.innerHTML = "<h1>Multiplication Table</h1>";

    x.textContent = "x";
    x.classList.add("cell", "header");
    hr.appendChild(x);

    for (let k = 0; k < array[0].length; k++){
        const hd = document.createElement("td");

        hd.textContent = k;
        hd.classList.add("cell", "header");

        hr.appendChild(hd);
    }

    thead.appendChild(hr);

    for (let i = 0; i < array.length; i++){
        const tr = document.createElement("tr");
        const row = array[i];

        const factor = document.createElement("td");
        factor.textContent = i;
        factor.classList.add("cell", "header");
        tr.appendChild(factor);

        for (let j = 0; j < row.length; j++){
            const td = document.createElement("td");
            td.textContent = row[j];
            td.classList.add("cell");
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(caption);
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

const button = document.getElementById("theButton");
const input = document.getElementById("input");

button.onclick = function () {
    document.getElementById("inbox").remove();
    var inbox = document.createElement("div");
    inbox.id = "inbox";
    inbox.appendChild(formatTable(generateTable(input.value)));
    document.getElementById("box").appendChild(inbox);

}

function main() {

    document.getElementById("inbox").appendChild(formatTable(generateTable(11)));

}

main();
