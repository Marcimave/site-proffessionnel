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
  const message = `Bonjour, je suis intéressé par l'offre ${offre}.`;

  const phone = "241061234567"; // 🔴 ton numéro

  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
