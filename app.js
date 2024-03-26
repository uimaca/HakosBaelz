//幻燈片控制鈕active更換
let changeButton = document.querySelectorAll(".change-active");

changeButton.forEach((e) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < changeButton.length; i++) {
      changeButton[i].classList.remove("active");
    }
    e.classList.add("active");
  });
});
