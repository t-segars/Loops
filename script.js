// #1 Print odds 1-255

for (var i = 1; i <= 255; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// #2 Decreasing Multiples of 3

for (let i = 100; i >= 1; i--) {
    if (i % 3 == 0) console.log(i);
}

// # 3 Print the sequence ***not sure what the problem is asking; gave answer for both list each value and the array.

// const values = [4, 2.5, 1, -0.5, -2, -3.5];
// for (let i =0; i < values.length; i++) {
//   console.log(values)
// }
const values = [4, 2.5, 1, -0.5, -2, -3.5];
for (value of values) console.log(value);

// # 4 Sigma

sum = 0;
for (count = 1; count <= 100; count++) {
    sum = sum + count;
}
console.log(sum);

// # 5 Factorial

product = 1;
for (count = 1; count <= 12; count++) {
    product = product * count;
}
console.log(product);

