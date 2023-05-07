export function sequentialDifferentiationMethod() {
    // let x = 0;
    // let y = 1/2;
    // let yDerivative = `y^2 + x^2`;
    // let yDerivative2ByX = math.derivative(yDerivative, `x`).toString();
    // let yDerivative2ByY = math.derivative(yDerivative, 'y').toString();
    // let yDerivativeEvaluate = math.evaluate(yDerivative, {y, x});
    // let yDerivativeEvaluate2 = math.evaluate(yDerivative2ByY, {y, x}) * yDerivative +
    //                    math.evaluate(yDerivative2ByX, {y, x});
    // let yDerivative3 =
    // console.log(yDerivativeEvaluate);
    // console.log(yDerivativeEvaluate2);

    derivative();
}

function derivative() {
    let yDerivative = `y^2+x^2`;
    let str = "";
    for (let i = 0; i < yDerivative.length; i++) {
        if (yDerivative[i] === "^") {
            if (str !== "") {
                str += " + "
            }
            str += "2 * ";
            switch(String(yDerivative[i+1] - 1)) {
                case "0":
                    str += "1";
                    break;
                case "1":
                    str += yDerivative[i-1];
                    break;
                default:
                    str += yDerivative[i-1] + "^" + String(yDerivative[i+1] - 1);
                    break;
            }
        }
    }
    console.log(str)
}