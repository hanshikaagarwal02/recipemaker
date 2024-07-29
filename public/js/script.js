
// let submitre=document.getElementById('submitre');
// submitre.addEventListener('click',function(){
//   alert("recipe is submitted")
// })
 
document.getElementById('myForm').addEventListener('submit', function(event) {
  // Get form elements
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const description=document.getElementById('description').value;
  const ingredients=document.getElementById('ingredients').value;
  
  // Check if all fields are filled
  if (name === '' || email === ''|| description===''|| ingredients==='') {
      alert('Please fill out all required fields.');
      event.preventDefault(); // Prevent form submission
  } 
  else {
    
      alert("recipe is submitted")
       
  
  }
});