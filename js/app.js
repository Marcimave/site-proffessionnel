document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const service = document.getElementById("service").value.trim();
  const message = document.getElementById("message").value.trim();

  const phone = "241065158925"; 
  if (!nom || !service) {
    alert("Veuillez remplir les champs obligatoires !");
    return;
  }

  const texte = `Bonjour, je m'appelle ${nom}.
Je souhaite : ${service}.
Projet : ${message}`;

  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(texte);

  // Confirmation avant ouverture
  const confirmation = confirm("Vous allez être redirigé vers WhatsApp. Continuer ?");

  if (confirmation) {
    window.open(url, "_blank");

    // message visuel
    document.getElementById("status").innerText = "✅ Redirection vers WhatsApp...";
  } else {
    document.getElementById("status").innerText = "❌ Envoi annulé";
  }
});

function choisirOffre(offre) {
  document.getElementById("service").value = "Offre " + offre;

  // scroll automatique vers formulaire
  document.querySelector(".contact").scrollIntoView({
    behavior: "smooth"
  });
}

const title = document.querySelector("h1");
const text = title.innerText;
title.innerText = "";

let i = 0;

function typing() {
  if (i < text.length) {
    title.innerText += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}

typing();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
