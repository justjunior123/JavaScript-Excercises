function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    var re = RegExp('\\d+', 'g');
   
    return re;
}
