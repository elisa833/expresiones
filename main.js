const regexInput = document.getElementById('expresion');
const textInput = document.getElementById('text');
const resultElement = document.getElementById('result');
const checkButton = document.getElementById('check');

checkButton.addEventListener('click', () => {
const regexPattern = regexInput.value; 
const text = textInput.value; 

    const regex = new RegExp(regexPattern, 'g');
        const matches = text.match(regex); 
        let totalCoincidencias = 0;

        if (matches) {
            totalCoincidencias = matches.reduce((acc, match) => acc + match.length, 0);
            resultElement.textContent = `Coincidencias encontradas: ${totalCoincidencias}`;
        } else {
            resultElement.textContent = "No hay coincidencias.";
        }
});