import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Ingresa tu rut sin dígito verificador: `, rut => {
    let rutArray = rut.split('')
    let firstStep = rutArray.reverse()
    let multiplier = 2
    let values = firstStep.map(
        (digit,idx) =>{
            multiplier++
            if (idx % 6 == 0) {
                multiplier = 2
            }
            return digit * multiplier
        }
    )
    let sum = values.reduce((val,acc)=>val + acc,0)
    let secondStep = Math.floor(sum / 11) * 11
    let thirdStep = sum - secondStep
    let finalStep = 11 - thirdStep
    if (finalStep == 11) {
        console.log(0);
    }else if (finalStep == 10) {
        console.log("K");
    }else{
        console.log(finalStep);
    }
    rl.close();
});
