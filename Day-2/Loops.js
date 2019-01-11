function vowelsAndConsonants(s) {
    const vowelsArray = ['a', 'e', 'i', 'o', 'u']
    let stringArray = s.split("")
    let i = 0
    let vowels = []
    let consonants = []

    do {
        let currentLetter = stringArray[i]
        if (vowelsArray.includes(currentLetter)) {
            vowels.push(currentLetter)
        } else {
            consonants.push(currentLetter)
        }
        i++
    } while (i != stringArray.length)
    let answer = ([...vowels,...consonants]).join("")
    for (let x = 0; x <= answer.length - 1; x++) {
        const currentLetter = answer[x]
        console.log(answer[x])
     }
}
