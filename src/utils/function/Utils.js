export const compareWithTrunc = (firstValue, secondValue) => {
    return (firstValue - Math.floor(firstValue)) !== 0 ? firstValue === secondValue : firstValue === Math.trunc( secondValue )
}

export const containsIn = (QueryArray, filterArray) => {
    let Overall = true;

    if (QueryArray.length === 0)
        return false;

    for (var i = 0, j = filterArray.length; i < j && Overall ; i++) {
        if (QueryArray.indexOf(filterArray[i]) === -1) {
            Overall = false;
        }
    }
    return Overall;
}