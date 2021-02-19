function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = Number(document.getElementById("years").value);
    let interest = principal * years * rate / 100
    let year = Number(new Date().getFullYear()) + years
    if(principal <= 0 || isNaN(principal) || principal === undefined) {
        document.getElementById("compute").disabled = true
        document.getElementById("amountval").innerText = "Must be a positive number"
        document.getElementById("result").innerHTML = null
    } else {
        document.getElementById("compute").disabled = false
        document.getElementById("amountval").innerText = null
        document.getElementById("result").innerHTML =   `If you deposit: <mark>$${principal}</mark><br>
                                                    at an interest rate of: <mark>${rate}</mark><br>
                                                    You will receive an amount of: <mark>$${interest}</mark><br>
                                                    in the year: <mark>${year}</mark>`
    }
}
function validate(e) {
    let principal = e.target.value
    if(principal <= 0 || isNaN(principal) || principal === undefined) {
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