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


function myFunction() {
  // Get the text field
  var copyText = document.getElementById("num");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  message.style.display = "block";
  message.innerHTML = "The Number Copied";
}
phonebutt.onclick = () => {
  myFunction();
}


