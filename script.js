document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
    
    // Reset the form
    this.reset();

   
});
document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();
    const Id = document.getElementById('Id').value;
    const password = document.getElementById('password').value;
    

    alert(`You are logged in!`);
    
    // Reset the form
    this.reset();

   
});
document.getElementById('merchandiseform').addEventListener('proceed to order', function(event) {
    event.preventDefault();
    const Id = document.getElementById('Id').value;
    const address = document.getElementById('address').value;
    

    alert(`Thank you your order has been recieved,we will shortly share the payment details on your registered email`);
    
    // Reset the form
    this.reset();

   
});
