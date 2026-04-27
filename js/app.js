const title = document.querySelector("h1");
const text = title.textContent;

title.innerHTML = "";

let i = 0;

function typing() {
  if (i < text.length) {
    const span = document.createElement("span");
    span.textContent = text[i];

    // garde les espaces visibles
    if (text[i] === " ") {
      span.innerHTML = "&nbsp;";
    }

    title.appendChild(span);
    i++;
    setTimeout(typing, 40);
  }
}

typing();


  const phone = "241065158925";
  if (!nom || !service) {
    alert("Veuillez remplir les champs obligatoires !");
    return;
  }
