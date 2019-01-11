/*
 * Create factorial function
 */
const factorial = (number) => { 
    let answer = number;
    let counter = number - 1
    do { 
        answer = answer * counter;
        counter--;
    } while (counter != 0)
    return answer; 
}
