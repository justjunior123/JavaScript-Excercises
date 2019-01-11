function reverseString(s) {
    try {
        console.log(s.split("").reverse().join(""))
    }
    catch (exception) {
        console.log(exception.message)
        console.log(s)
    };
}
