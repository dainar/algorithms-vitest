
// Write a function in which if you pass a number as an argument:

// -show "fizz" if it's multiple of 3.
// -show "fizz" if it's multiple of 5.
// - show "fizzbuzz" if it's multiple of 3 y 5.
// - show a number if its none of the past cases

export const fizzbuzz = (number) => {
    if (typeof number !== "number") throw new Error("parameter provided must be a number")
    if (isNaN(number)) throw new Error("parameter provided must be a number")

    const multiplies = { 3: "fizz", 5: "buzz" }
    let output = ""
    {}
    Object.entries(multiplies).forEach(( [multiplier, word ])=> {
    if(number % multiplier === 0) output += word
    })
    

    return output===""? number: output
}
