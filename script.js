/* Typing Animation */
const text = ["Frontend Developer", "JavaScript Learner", "BCA Student"];
let i = 0, j = 0;

function typing(){
  if(j < text[i].length){
    document.querySelector(".typing").innerHTML += text[i][j];
    j++;
    setTimeout(typing,100);
  }else{
    setTimeout(erase,1000);
  }
}

function erase(){
  if(j > 0){
    document.querySelector(".typing").innerHTML =
    text[i].substring(0,j-1);
    j--;
    setTimeout(erase,50);
  }else{
    i = (i+1) % text.length;
    setTimeout(typing,500);
  }
}

typing();

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

function scrollToContact(){
  document.getElementById("contact")
  .scrollIntoView({behavior:"smooth"});
}

function sendMessage(e){
  e.preventDefault();
  alert("Message Sent Successfully 🚀");
}
/* ===== SKILL BAR ANIMATION ===== */
const skillBars = document.querySelectorAll(".bar div");

window.addEventListener("scroll", () => {
  skillBars.forEach(bar => {
    const sectionTop = document
      .getElementById("skills")
      .getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){
      bar.style.width = bar.getAttribute("data-skill") + "%";
    }
  });
});
