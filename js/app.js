/* TIMER */
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
updateTimer();

/* FORMULAIRE EMAIL */

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {

    form.addEventListener("submit", function (e) {

      e.preventDefault();

      const nom =
      document.getElementById("nom").value;

      const email =
      document.getElementById("email").value;

      const service =
      document.getElementById("service").value;

      const message =
      document.getElementById("message").value;

      const status =
      document.getElementById("status");

      emailjs.send(
        "service_icixjxf",
        "template_kwa4moh",
        {
           name: nom,
    email: email,
    title: service,
    message: message
        }
      )

      .then(function () {

        status.textContent =
        "✅ Demande envoyée avec succès.";

        form.reset();
      })

      .catch(function (error) {

        status.textContent =
        "❌ Erreur lors de l’envoi.";

        console.error(error);
      });

    });

  }

});


/* WHATSAPP */
function payerWhatsApp(offre, prix) {

  const phone = "241065158925";

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

/* FORMULAIRE */
/* document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nom = document.getElementById("nom").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

      const text =
`Nom: ${nom}
Service: ${service}
Projet: ${message}`;

      const url = "https://wa.me/241065158925?text=" + encodeURIComponent(text);

      window.open(url, "_blank");
    });
  }
}); */
// ==========================
// FIX CLAVIER MOBILE (SCROLL)
// ==========================
document.querySelectorAll("input, textarea").forEach((el) => {

  el.addEventListener("focus", () => {

    setTimeout(() => {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 300);

  });

});

// ==========================
// SELECTION PACK (ANIMATION)
// ==========================

const cards = document.querySelectorAll(".selectable");

cards.forEach(card => {

  card.addEventListener("click", (e) => {

    e.stopPropagation();

    // enlever sur toutes
    cards.forEach(c => c.classList.remove("popular"));

    // ajouter sur celle cliquée
    card.classList.add("popular");

  });

});
