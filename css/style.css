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
document.addEventListener("DOMContentLoaded", function () {

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
});
