

// (12 x 4) / 3 (- 4 + 12)

// step1 = 12 x 4
// step2 = - 4 + 12

// step1 / 3 (step2)

// step3 = 3 x step2
// step4 = step1/step3

function firstBracket() {
    let num1 = 12;
    let num2 = 4;
    let ans = num1 * num2;
    console.log(`The product of ${num1} and ${num2} is ${ans}`);
    return ans;
    // console.log("The product of " + num1 + " and " + num2 + " is " + ans);
}

function secondBracket(){
    let num1 = -4;
    let num2 = 12;
    let ans = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${ans}`);
    return ans;
}

function step3() {
    let num1 = 3
    let num2 = secondBracket();
    let ans = num1 * num2;
    console.log(`The product of ${num1} and ${num2} is ${ans}`);
    return ans;
}

function step4() {
    let num1 = firstBracket();
    let num2 = step3();
    ans = num1 / num2;
    console.log(`The quotient of ${num1} and ${num2} is ${ans}`);
    return ans;
}

ans = step4();
console.log(`The final answer is ${ans}`);
