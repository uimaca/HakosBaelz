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

//影片預覽左右控制
//滑鼠滾動左右
let scrollTurnLeft = document.querySelector(".scrollTurnLeft");

scrollTurnLeft.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollTurnLeft.scrollLeft += event.deltaY;
});

//容器往左移
const controlLeft = document.querySelector(".controlLeft");

controlLeft.addEventListener("click", () => {
  document.querySelector(".scrollTurnLeft").scrollLeft += -330;
});

//容器往右移
const controlRight = document.querySelector(".controlRight");

controlRight.addEventListener("click", () => {
  document.querySelector(".scrollTurnLeft").scrollLeft += 330;
});
