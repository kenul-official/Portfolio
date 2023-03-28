function myFunction() {
  var element = document.body;
  element.classList.toggle("light");
}
let mybutton = document.getElementById("top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxBalszMDhavboG2DTHYna5KsqSVpoRisaDStye7geIpuL-aJzOSgSwM2jepve59Adqhg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         msg.innerHTML = "*Message sent successfully!"
          setTimeout(function(){
            msg.innerHTML = ""
          },5000)
          form.reset()
        })
  .catch(error => console.error('*Error!', error.message))
  })
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
      else{
        reveals[i].classList.remove("active");
      }
    }
} 
window.addEventListener("scroll", reveal);

    
    