function isPositive(a) {
    const isZero = () => {
        return "Zero Error"
    }
    const isNegative = () => {
        return "Negative Error"
    }
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        return isZero()
    } else { 
        return isNegative()
    }
}
