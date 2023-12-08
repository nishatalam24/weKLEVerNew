const burger_icon = document.querySelector('[burger_icon]');
const navbarlistitems = document.querySelector('[navbarlistitems]');



let burger_active=false;
burger_icon.addEventListener('click', function() {

if(!burger_active){
    burger_icon.classList.add('burger_icon_active');
    burger_active=true;
    navbarlistitems.classList.add('navbarlist_item_active');
}

else{
    burger_icon.classList.remove('burger_icon_active');
    burger_active=false;
    navbarlistitems.classList.remove('navbarlist_item_active');
}
    // myElement.classList.add('new-class');
  });

//   navbarlistitems.addEventListener('click', function() {

 
//   })

// send email function

function sendEmail() {
    // Replace 'recipient@example.com' with the actual email address
    var email = 'recipient@example.com';
    var subject = 'Subject of the email';
    var body = 'Body of the email';

    // Construct the mailto link
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Open the user's default email client
    window.location.href = mailtoLink;
  }