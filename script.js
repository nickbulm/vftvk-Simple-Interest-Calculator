function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = Number(document.getElementById("years").value);
    let interest = principal * years * rate / 100
    let year = Number(new Date().getFullYear()) + years

    document.getElementById("result").innerHTML =   `<span>If you deposit: $${principal}</span><br>
                                                    <span>at an interest rate of: ${rate}</span><br>
                                                    <span>You will receive an amount of: $${interest}</span><br>
                                                    <span> in the year: ${year}</span>`
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