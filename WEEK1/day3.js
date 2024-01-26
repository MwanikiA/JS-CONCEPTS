function fibonacci_sequence(n) {
    if ( n === 1) {
        return 0;
    }
    if ( n === 2) {
        return 1;
    }
    return fibonacci_sequence(n-1) + fibonacci_sequence(n-2)
}
console.log(fibonacci_sequence(5))
console.log(fibonacci_sequence(10))
