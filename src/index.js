module.exports = function reverse (n) {
    let nArr = `${Math.abs(n)}`.split('');
    let newArr = [];
    for (let i = nArr.length - 1; i >= 0; i--){
            newArr.push(nArr[i]);
    }
    return Number(newArr.join(''));
}
