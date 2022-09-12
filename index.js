// Template ID emailJs template_kudl4nd
// Service ID emailJs service_zd803dl
// User ID emailJs -XwUQJhHRaKcyrqCJ

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += ' dark-theme';
  } else {
    document.body.classList.remove('dark-theme');
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      'service_zd803dl',
      'template_kudl4nd',
      event.target,
      '-XwUQJhHRaKcyrqCJ'
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert("Sorry, something went wrong. Please contact me directly on mataszob@gmail.com.");
    })
  setTimeout(() => {
    console.log('it worked')
  }, 1000);
}


function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove('modal--open');
  }
  isModalOpen = true;
  document.body.classList += (' modal--open');

}