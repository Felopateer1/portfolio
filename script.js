let section = document.getElementById("skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

let phonebutt = document.getElementById("phonebutt");
let message = document.getElementById('message');

phonebutt.onclick = () => {
  message.style.display = "block";
  setTimeout(() => {
  message.style.display = "none"
}, 9000);
}
