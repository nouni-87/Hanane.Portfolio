//Open and Close form

const myForm = document.getElementById("myForm");
function openForm() {
    myForm.style.display = "block";
  }
  
  function closeForm() {
    myForm.style.display = "none";
  }
  
//Alert message pops up when the form is open

  const sendGmail = document.getElementById('gmail');

  sendGmail.addEventListener('click', function() {
    setTimeout( function(){ 
        alert('Thanks for visiting my page! Looking forward to hearing from you.');
    }, 5000);
});





const form = document.getElementById('myForm');
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const { name, email, password, subject} = this.elements;
  console.log(name.value, email.value, password.value, subject.value);


});



