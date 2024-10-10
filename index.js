const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount );

const buttonMoney = document.querySelector("#addMoney");
buttonMoney.addEventListener("click", showMoney);

function showMoney(e) {
    e.preventDefault();
    option.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const persons = document.querySelector("#persons").value;
    const rate = document.querySelector("#rate").value;
    const option = document.querySelector("#option").value;

    if (rate === "" || persons === "" || persons <1) {
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please enter your information!',
          })
    }
    let amountPerPerson = rate / persons;
    let optionsPerPerson = (rate * option) / persons;
    let totalSum = amountPerPerson + optionsPerPerson;
    
    amountPerPerson = amountPerPerson.toFixed(2);
    optionsPerPerson = optionsPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

document.querySelector("#dividedOption").textContent = optionsPerPerson;
document.querySelector("#dividedRoomRate").textContent = amountPerPerson;
document.querySelector("#roomRateAndOption").textContent = totalSum;
}
