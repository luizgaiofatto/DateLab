self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
});

self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("SW registrado"))
    .catch((err) => console.log("Erro SW:", err));
}