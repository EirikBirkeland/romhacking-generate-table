export default function generateTable(startChar, startHex) {
    const alphabet = Array.from(isLowerCase(startChar) ? "abcdefghijklmnopqrstuvxyz" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    return alphabet.map((letter, index) => {
        return [letter, (parseInt(startHex, 16) + index).toString(16).toUpperCase()];
    });

    function isLowerCase(str) {
        return str.toLowerCase() === str;
    }
}