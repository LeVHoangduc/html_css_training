const label = document.querySelector(".label__icon");
const button_menu = document.querySelector(".navbar__mobile");
const menu = document.querySelector(".navbar__mobile__list");

button_menu.addEventListener("change", function () {
  console.log(button_menu.checked);
  if (button_menu.checked) {
    label.innerHTML = `<box-icon name='minus'  color="#1968fc" style="width: 30px; height: 30px"></box-icon>`;
    menu.classList.toggle("active");
  } else {
    label.innerHTML = `<box-icon name="menu" color="#1968fc" style="width: 30px; height: 30px"></box-icon>`;
    menu.classList.toggle("active");
  }
});
