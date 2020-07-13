export const compareWithTrunc = (firstValue, secondValue) => {
    return (firstValue - Math.floor(firstValue)) !== 0 ? firstValue === secondValue : firstValue === Math.trunc( secondValue )
}
