


const myForm = document.getElementById("myForm");
function openForm() {
    myForm.style.display = "block";
  }
  
  function closeForm() {
    myForm.style.display = "none";
  }
  
//   const sendGmail = document.getElementById('gmail');

//   sendGmail.addEventListener('click', function() {
//     setTimeout( function(){ 
//         alert('Thanks for visiting my page! Looking forward to hearing from you.');
//     }, 5000);
// });

const form = document.getElementById('myForm');
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const { name, email, password, subject} = this.elements;
  console.log(name.value, email.value, password.value, subject.value);


});





const progBar = document.querySelectorAll('#myProgress');
for ( let i = 0; i < progBar.length; i++ ) {
  let width = 90;
  let id = setInterval(frame, 90);
    function frame() {
      
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
            progBar.style.width = width + "%";
            progBar.innerHTML = width + "%";
        }
      }
      
    
}