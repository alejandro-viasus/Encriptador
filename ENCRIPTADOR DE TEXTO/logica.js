document.addEventListener('DOMContentLoaded', function () {
    // Selecciona los elementos relevantes
    const encryptButton = document.querySelector('.encrypt-btn');
    const decryptButton = document.querySelector('.decrypt-btn');
    const inputTextArea = document.querySelector('textarea');
    const encryptedMessage = document.getElementById('encrypted-message');

    // Lógica de encriptación más compleja
    function encriptarTexto(text) {
        const reemplazos = {
            'a': '4z%',
            'e': '3x$',
            'i': '1y#',
            'o': '0w!',
            'u': '7v*',
            's': '5p&',
            'r': '9q^',
            'l': '2m@',
            'c': '8n(',
            'n': '6b)'
        };

        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            const char = text[i].toLowerCase();
            if (reemplazos[char]) {
                encryptedText += reemplazos[char];  // Sustituir con el valor complejo
            } else {
                encryptedText += char;  // Dejar el carácter como está si no está en los reemplazos
            }
        }

        // Revertir el texto encriptado para mayor complejidad
        return encryptedText.split('').reverse().join('');
    }

    // Lógica de desencriptación más compleja
    function desencriptarTexto(text) {
        // Revertir el texto primero
        const reversedText = text.split('').reverse().join('');

        const reemplazosInvertidos = {
            '4z%': 'a',
            '3x$': 'e',
            '1y#': 'i',
            '0w!': 'o',
            '7v*': 'u',
            '5p&': 's',
            '9q^': 'r',
            '2m@': 'l',
            '8n(': 'c',
            '6b)': 'n'
        };

        let decryptedText = '';
        for (let i = 0; i < reversedText.length; i++) {
            let segment = reversedText.slice(i, i+3);  // Tomar segmentos de 3 caracteres
            if (reemplazosInvertidos[segment]) {
                decryptedText += reemplazosInvertidos[segment];
                i += 2;  // Saltar los caracteres ya procesados
            } else {
                decryptedText += reversedText[i];  // Dejar el carácter como está si no es parte del reemplazo
            }
        }

        return decryptedText;
    }

    // Agregar eventos a los botones
    encryptButton.addEventListener('click', function () {
        const inputText = inputTextArea.value.toLowerCase(); // Convertir a minúsculas
        const encryptedText = encriptarTexto(inputText);
        encryptedMessage.textContent = encryptedText;
    });

    decryptButton.addEventListener('click', function () {
        const inputText = inputTextArea.value.toLowerCase(); // Convertir a minúsculas
        const decryptedText = desencriptarTexto(inputText);
        encryptedMessage.textContent = decryptedText;
    });
});