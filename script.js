document.getElementById('encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const validationMsg = document.getElementById('validation-msg');
    
    if (!/^[a-z\s]*$/.test(inputText)) {
        validationMsg.style.display = 'block';
        return;
    } else {
        validationMsg.style.display = 'none';
    }

    const encryptedText = inputText.replace(/e/g, "enter")
                                   .replace(/i/g, "imes")
                                   .replace(/a/g, "ai")
                                   .replace(/o/g, "ober")
                                   .replace(/u/g, "ufat");

    document.getElementById('output-text').textContent = encryptedText;
    document.getElementById('copy-btn').style.display = 'block';
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;

    const decryptedText = inputText.replace(/enter/g, "e")
                                   .replace(/imes/g, "i")
                                   .replace(/ai/g, "a")
                                   .replace(/ober/g, "o")
                                   .replace(/ufat/g, "u");

    document.getElementById('output-text').textContent = decryptedText;
    document.getElementById('copy-btn').style.display = 'block';
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const outputText = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(outputText);
    alert('Texto copiado al portapapeles');
});
