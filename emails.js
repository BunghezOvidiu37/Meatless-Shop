var form = document.getElementById("my-form");
    


async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Mesajul va ajunge la noi în curând!";
    form.reset();
    status.classList.add('success');
  }).catch(error => {
    status.classList.add('error');
    status.innerHTML = "A apărut o eroare! Vă rugăm să încercați din nou!"
  });
}
form.addEventListener("submit", handleSubmit)