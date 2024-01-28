function fibonacci_sequence(n) {
    if ( n === 1) {
        return 1;
    }
    if ( n === 2) {
        return 1;
    }
    if ( n === 0) {
        return 0;
    }
    return fibonacci_sequence(n-1) + fibonacci_sequence(n-2)
}
console.log(fibonacci_sequence(0))
console.log(fibonacci_sequence(10))



/**
 * @arrays
 * a sequence of data types separated by commas in square brackets
 * eg [abby, ray, shiku]
 */

// let names= [ 'abby', 'ray', 'shiku']
// let numbers= [ 1, 2, 3, 4]
// let mixture = [ 'Dan', 1, true, null]

// console.log(mixture)