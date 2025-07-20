const form = document.getElementById('survey-form');
const statusMessage = document.getElementById('status-message');
const submitBtn = document.getElementById('submit');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Disable submit and show loading
  submitBtn.disabled = true;
  statusMessage.style.color = '#555';
  statusMessage.textContent = 'Submitting your response...';

  const formData = new FormData(form);

  fetch('https://script.google.com/macros/s/AKfycbz6qYFzjUH2h-pmhdhdmhxadufQP2-LxAkpy3S2a_lIv3bKP0JTwoc6aOgPv1I_Bq4m2Q/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    form.reset();
    statusMessage.style.color = 'green';
    statusMessage.textContent = '✅ Thank you for submitting the survey!';
  })
  .catch(error => {
    console.error(error);
    statusMessage.style.color = 'red';
    statusMessage.textContent = '❌ There was an error submitting the form. Please try again.';
  })
  .finally(() => {
    submitBtn.disabled = false;
  });
});
