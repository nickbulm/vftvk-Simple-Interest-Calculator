function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = Number(document.getElementById("years").value);
    let interest = principal * years * rate / 100
    let year = Number(new Date().getFullYear()) + years

    document.getElementById("result").innerHTML =   `If you deposit: <span class="number">$${principal}</span><br>
                                                    at an interest rate of: <span class="number">${rate}</span><br>
                                                    You will receive an amount of: <span class="number">$${interest}</span><br>
                                                    in the year: <span class="number">${year}</span>`
}
function validate(e) {
    let principal = e.target.value
    if(principal <= 0 || isNaN(principal)) {
        document.getElementById("compute").disabled = true
        document.getElementById("amountval").innerText = "Must be a positive number"
    } else {
        document.getElementById("compute").disabled = false
        document.getElementById("amountval").innerText = null
    }
}
function ratechange(e){
    document.getElementById("rateval").innerText = e.target.value
}