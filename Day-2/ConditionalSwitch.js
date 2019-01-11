function getLetter(s) {
    let letter = '';
    const test1 = ['a', 'e', 'i', 'o', 'u'];
    const test2 = ['b', 'c', 'd', 'f', 'g'];
    const test3 = ['h', 'j', 'k', 'l', 'm'];
    let stringArray = s.split("");
    
    let currentLetter = stringArray[0];
    switch (currentLetter) {
        case ('a' || 'e' || 'i' || 'o' || 'u'):
            letter = "A"
            break
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = "B"
            break
        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = "C"
            break
        default:
            letter = "D"
            break
    }
    return letter;
}
