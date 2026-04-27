document.getElementById("whatsappForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const phone = "241065158925 ;
  const url = `https://wa.me/${phone}?text=` +
    `Bonjour, je m'appelle ${nom}.%0A` +
    `Je veux : ${service}.%0A` +
    `Message : ${message}`;

  window.open(url, "_blank");
});
