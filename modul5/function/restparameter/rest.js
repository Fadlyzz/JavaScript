function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

function calculateSum() {
    const inputElements = document.getElementsByTagName('input');
    const numbers = Array.from(inputElements).map(input => Number(input.value));
    const result = sum(...numbers);
    document.getElementById('result').innerHTML = `Result: ${result}`;
}