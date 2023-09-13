window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    const values = {amount: 1000, years: 2, rate: 1.5};
    const initialAmount = document.getElementById("loan-amount");
    initialAmount.value = values.amount;
    const initialYears = document.getElementById("loan-years");
    initialYears.value = values.years;
    const initialRate = document.getElementById("loan-rate");
    initialRate.value = values.rate;
    update()
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const currentValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentValues))
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    const i = values.rate / 12;
    const numerator = values.amount * i;
    const n = Math.floor(values.years * 12);
    const denominator = 1 - Math.pow(1 + i, -n)
    const monthlyPayment = (numerator / denominator).toFixed(2);
    return monthlyPayment
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    const monthlyUI = document.getElementById("monthly-payment");
    monthlyUI.innerText = monthly;
  }
  