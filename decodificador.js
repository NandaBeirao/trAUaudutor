
function textToBinary(text) {
    return text.split('').map(char => {
        const binary = char.charCodeAt(0).toString(2);
        return binary.padStart(8, '0'); // Garante que todos os caracteres tenham 8 bits
    }).join('');
}

function binaryToCustom(binary) {
    return binary.split('').map(bit => bit === '0' ? 'au' : 'AU').join('');
}

function encrypt(text) {
    const binary = textToBinary(text);
    return binaryToCustom(binary);
}

function encryptText() {
    const inputText = document.getElementById("inputText").value;
    const encryptedText = encrypt(inputText);
    document.getElementById("outputText").value = encryptedText;
}

function copyToClipboard() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
}

function binaryToText(binary) {
    return binary.match(/.{1,8}/g).map(byte => String.fromCharCode(parseInt(byte, 2))).join('');
}

function customToBinary(custom) {
    return custom.match(/.{2}/g).map(pair => pair === 'au' ? '0' : '1').join('');
}

function decrypt(customText) {
    const binary = customToBinary(customText);
    return binaryToText(binary);
}

function decryptText() {
    const inputText = document.getElementById("inputText").value;
    const decryptedText = decrypt(inputText);
    document.getElementById("outputText").value = decryptedText;
}
