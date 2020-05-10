document.getElementById('loan-form').addEventListener('submit', function(e){
  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'block';

  setTimeout(calculate, 2000);

  e.preventDefault();

});

// Calculate method

function calculate(){

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedinterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayement = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedinterest, calculatedPayement);
  const monthly = (principal * x * calculatedinterest) / (x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayement).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayement) - principal).toFixed(2);

    document.getElementById('loading').style.display = 'none';

    document.getElementById('results').style.display = 'block';


  }else{
    showError('Please Check your Numbers!');
  }

  // e.preventDefault();
}

function showError(error){

  document.getElementById('loading').style.display = 'none';

  document.getElementById('results').style.display = 'none';

  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';

  const card = document.querySelector('.card');
  // const heading = document.querySelector('.heading');
  const resultt = document.querySelector('.results');

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, resultt);

  setTimeout(clearError, 2000);


}

function clearError(){
  document.querySelector('.alert').remove();
}