const addNumbers = (...args) => {
    let sum = 0;
    args.forEach((arg) => sum += arg);
    return sum;
} ;

console.log(addNumbers(23,89,-12,10));