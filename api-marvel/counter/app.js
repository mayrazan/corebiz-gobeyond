document.addEventListener("DOMContentLoaded", () => {
  const btnDecrementa = document.getElementById("decrementa-btn");
  const btnIncrementa = document.getElementById("incrementa-btn");
  const valor = document.querySelector(".counter");
  let count = 0;

  btnDecrementa.addEventListener("click", () => {
    count--;
    valor.innerHTML = count;
  });

  btnIncrementa.addEventListener("click", () => {
    count++;
    valor.innerHTML = count;
  });
});
