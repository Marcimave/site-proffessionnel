
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const service = document.getElementById("service").value.trim();
  const message = document.getElementById("message").value.trim();
/*
  const phone = "241065158925";
  if (!nom || !service) {
    alert("Veuillez remplir les champs obligatoires !");
    return;

}

function goWA(offre, prix) {

  const phone = "241065158925";

  const message =
`🚀 DEMANDE DE SITE WEB - AGENCE PREMIUM

📦 Offre : ${offre}
💰 Prix : ${prix} FCFA

🎯 Objectif : attirer des clients automatiquement

Nom :
Activité :
Besoin spécifique :

💡 Paiement : Airtel Money / Moov Money / Cash`;

  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}

*/

let time = 24 * 60 * 60;

function updateTimer() {

  const timer = document.getElementById("timer");
  if (!timer) return;

  let h = Math.floor(time / 3600);
  let m = Math.floor((time % 3600) / 60);
  let s = time % 60;

  timer.textContent =
    `${String(h).padStart(2,'0')}:` +
    `${String(m).padStart(2,'0')}:` +
    `${String(s).padStart(2,'0')}`;

  if (time > 0) time--;
}

setInterval(updateTimer, 1000);

updateTimer(); // 🔥 LANCE IMMÉDIATEMENT
setInterval(updateTimer, 1000);


  // Confirmation avant ouverture
 /* const confirmation = confirm("Vous allez être redirigé vers WhatsApp. Continuer ?");

  if (confirmation) {
    window.open(url, "_blank");

    // message visuel
    document.getElementById("status").innerText = "✅ Redirection vers WhatsApp...";
  } else {
    document.getElementById("status").innerText = "❌ Envoi annulé";
  }
});*/

function choisirOffre(offre) {
  document.getElementById("service").value = "Offre " + offre;

  // scroll automatique vers formulaire
  document.querySelector(".contact").scrollIntoView({
    behavior: "smooth"
  });
}



let i = 0;

/*  function typing() {
  if (i < text.length) {
    title.innerText += text.charAt(i);
    i++;
    setTimeout(typing, 40);

  }
}

typing();
         */


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

/*
let time = 24 * 60 * 60;

function updateTimer() {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  document.getElementById("timer").innerText =
    `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

  time--;
}

setInterval(updateTimer, 1000);
                                  */


const phone = "241065158925";

/* ---------------- WHATSAPP OFFRES ---------------- */
function payerWhatsApp(offre, prix) {

  const message =
`🚀 COMMANDE SITE WEB

📦 Offre : ${offre}
💰 Prix : ${prix} FCFA

💬 Paiement : Airtel Money / Moov Money

Nom :
Détails :`;

  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}

/* ---------------- FORMULAIRE ---------------- */
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nom = document.getElementById("nom").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

      const text =
`Bonjour, je m'appelle ${nom}
Service : ${service}
Projet : ${message}`;

      const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);

      window.open(url, "_blank");
    });
  }
});


const items = document.querySelectorAll(".testimonial, .card, section");

window.addEventListener("scroll", () => {
  items.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

