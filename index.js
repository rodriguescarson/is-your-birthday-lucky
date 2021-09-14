const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox=document.querySelector("#output-box")

function caluculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;

    for (let digit of dob) {
        sum = sum + Number(digit);
      }

    return sum;
}

function compareValues(sum,luckyNo) {
    if (sum % luckyNo === 0) {
        outputBox.innerText = "Your birthday is lucky";
    } else {
        outputBox.innerText = "Your birthday is not lucky";
    }
}
function checkBirthdateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = caluculateSum(dob);
    console.log(dob,sum)
    if (sum && dob) {
        compareValues(sum, luckyNumber.value);
    }
    else {
        outputBox.innerText = "Please enter both the fields"
    }
}

checkNumberButton.addEventListener("click",checkBirthdateIsLucky)