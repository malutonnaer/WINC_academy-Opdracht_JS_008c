const calculateAverage = function (
        number1,
        number2,
        number3,
        number4,
        number5
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
}

console.log(calculateAverage(2, 4, 6, 8, 10));


// If you want the average to be rounded:

/*
const calculateAverage = function (
    number1,
    number2,
    number3,
    number4,
    number5
) {
const total = number1 + number2 + number3 + number4 + number5;
const average = total / 5;
const averageRounded = Math.round(average);
    return averageRounded;
}

console.log(calculateAverage(2, 4, 6, 8, 10));
*/