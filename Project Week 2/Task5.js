function replace(text) {
    let result = '';
if (typeof text == 'string') {
    let arText =  text.split('')
    let replaceAtoO = []
    for (let x = 0 ; x < arText.length ; x++) {
    let letter = arText[x];
    if (letter == 'a' ) {
        replaceAtoO.push('o')
    } else if (letter == 'A') {
        replaceAtoO.push('O')
    } else {
        replaceAtoO.push(letter)
    }
}
result = replaceAtoO.join('')
} else {
    result = 'The data type text must be string'
}
return result
}

console.log(replace('JAKARTA'))
console.log(replace('SurAbAyA'))
console.log(replace('Jogja'))
console.log(replace(23))
console.log(replace(true))