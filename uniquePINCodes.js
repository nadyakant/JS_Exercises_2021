function uniquePINCodes(input) {
    //•	Горната граница на първото число - цяло число в диапазона [1...9]
    //•	Горната граница на второто число - цяло число в диапазона [1...9]
    //•	Горната граница на третото число - цяло число в диапазона [1...9]

    let firstNumber = Number(input[0]); //2,4,6,8
    let secondNumber = Number(input[1]); //2,3,7
    let thirdNumber = Number(input[3]); //2,4,6,9


    for (let a = 1; a <= firstNumber; a++) {
        let PIN = "";
        if (a === 2 || a === 4 || a === 6 || a === 8) {
           
            for (let b = 1; b <= secondNumber; b++) {
                if (b === 2 || b === 3 || b === 7) {
                   
                    for (let c = 1; c <= thirdNumber; c++) {
                        if (c === 2 || c === 4 || c === 6 || c === 8) {
                            PIN += `${a}${b}${c}`;
                        }
                    }
                }
            }
        }




        console.log(PIN);
    
    }

}
uniquePINCodes(["3","5","5"]);