function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    //"+", "-", "*", "/", "%"
    switch (operator) {
        case `+`: result = n1 + n2; break;
        case `-`: result = n1 - n2; break;
        case `*`: result = n1 * n2; break;
        case `/`:
            if (n2 === 0) {
                result = `no`;

            } else {
                result = (n1 / n2).toFixed(2);
            }
            break;
        case `%`:
            if (n2 === 0) {
                result = `no`;
                break;
            } else {
                result = n1 % n2;
            }
    }
    let evenOrOdd = ``;
    if(result % 2 === 0){
        evenOrOdd = `even`;
    }else{
        evenOrOdd = `odd`;
    }
if (result === `no`){
    console.log(`Cannot divide ${n1} by zero`);
}else if(operator === `/` || operator === `%`){
        console.log(`${n1} ${operator} ${n2} = ${result}`)
    } else {
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`)
    }
}
operationsBetweenNumbers()