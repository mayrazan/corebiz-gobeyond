$(document).ready(function () {
  let contador = 0;

  $("#decrementa-btn").click(() => {
    --contador;
    $(".counter").html(contador);
  });

  $("#incrementa-btn").click(() => {
    ++contador;
    $(".counter").html(contador);
  });
});
