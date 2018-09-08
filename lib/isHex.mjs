export default function isHex (str) {
    const HEX_RE = /^[0-9a-f]{2}$/i;
    return HEX_RE.test(str);
}