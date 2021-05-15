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

//click on the button "skills-bar" to indicate how far is "the progressBar" in %
const skillsBtns = document.querySelectorAll('.skills-btn');
skillsBtns.forEach(skillsBtn => {
  skillsBtn.addEventListener("click", e => {
    const percentageSpan = e.target.nextElementSibling;
    const percentageNumber = percentageSpan.textContent;
    const number = percentageNumber.replace('%', '');
    const progressBar = e.target.nextElementSibling.nextElementSibling;
    for (let i = 1; i < number; i++) {
      setTimeout(() => {
        progressBar.setAttribute('value', i);
      }, 500);
  }
    percentageSpan.style.display = 'block';
  });
});
