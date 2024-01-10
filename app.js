var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzSoaXJr3XLiqfWQXQ8Eufe2jpbzOELHDohlHlwHtBZ71c2TqsKjLP-7NISlYmPzndkxg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         msg.innerHTML = "*Message sent successfully!"
          setTimeout(function(){
            msg.innerHTML = "*Thank you for your response"
          },5000)
          form.reset()
        })
  .catch(error => console.error(msg.innerHTML = '*Error! Retry click on Submit', error.message))
  })
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
} 
window.addEventListener("scroll", reveal);

let atScroll = false;
            let parallaxTitle = document.querySelectorAll(".hero-text");

            const scrollProgress = () => {
                atScroll = true;
            };

            const raf = () => {
                if (atScroll) {
                    parallaxTitle.forEach((element, index) => {
                        element.style.transform = "translateX(-" + window.scrollY / 20 + "%)";
                    });
                    atScroll = false;
                }
                requestAnimationFrame(raf);
            };

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollProgress);
