const res = document.querySelector("#res");
const buttons = document.querySelector("#btns");

buttons.addEventListener("click", (eve) => {
    let clickedButton = eve.target;
    switch (clickedButton.id) {
        case "btnClr":
            res.innerHTML = "";
            break;
        case "btn0":
        case "btn1":
        case "btnSum":
        case "btnSub":
        case "btnMul":
        case "btnDiv":
            res.innerHTML += clickedButton.innerHTML;
            break;
        case "btnEql":
            let value = res.innerHTML;

            // \d+ for digits - g global
            var numsReg = /(\d+)/g;

            // Convert 2 base numbers to 10 base and keeps operator
            value2Based = value.replace(numsReg, (num) => parseInt(num, 2));

            // Do Math
            let result = eval(value);

            //toString convert to base 2 from base 10
            res.innerHTML = result.toString(2);
            break;
        default:
            console.error("Hatalı İşlem");
            break;
    }
});