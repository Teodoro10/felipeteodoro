window.sr = ScrollReveal({ reset: true });

sr.reveal(".about_text", {
  delay: 800,
  scale: 0.78,
});

sr.reveal(".about_img", {
  delay: 300,
  scale: 0.78,
});

// sr.reveal(".project_one", {
//   delay: 100,
//   scale: 0.78,
// });

// sr.reveal(".project_two", {
//   delay: 100,
//   scale: 0.78,
// });

// sr.reveal(".project_three", {
//   delay: 100,
//   scale: 0.78,
// });

// sr.reveal(".project_four", {
//   duration: 100,
//   scale: 0.78,
// });

// sr.reveal(".project_five", {
//   delay: 300,
//   scale: 0.78,
// });

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
