window.sr = ScrollReveal({ reset: true });
sr.reveal(".about_text", {
  duration: 1000,
  scale: 0.78,
});
sr.reveal(".about_img", {
  duration: 1000,
  scale: 0.78,
});

sr.reveal(".project_one", {
  duration: 1000,
  scale: 0.78,
});
sr.reveal(".project_three", {
  duration: 1000,
  scale: 0.78,
});
sr.reveal(".project_five", {
  duration: 300,
  scale: 0.78,
});

sr.reveal(".project_two", {
  duration: 1000,
  scale: 0.78,
});

sr.reveal(".project_four", {
  duration: 1000,
  scale: 0.78,
});

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}
const titulo = document.querySelector("span");
typeWrite(titulo);

var bt = document.querySelector("#myBtn");

bt.addEventListener("click", () => {
  window.scroll({ top: window.innerHeight, behavior: "smooth" });
});
