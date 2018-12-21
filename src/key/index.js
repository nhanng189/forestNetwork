export const encode_key = (key) => {
    return key.split("").reverse().join("");
}

export const decode_key = (str) => {
    return str.split("").reverse().join("");
}