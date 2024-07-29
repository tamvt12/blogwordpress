const listItems = document.querySelectorAll(".smart-list-item");
const slides = document.querySelectorAll(".slide-content");
let currentIndex = 0;

listItems.forEach((item, index) => {
  const panel = item.nextElementSibling;
  if (index === 0) {
    item.classList.add("active");
    slides[0].classList.remove("hidden");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  item.addEventListener("click", (e) => {
    // Loại bỏ active và đóng panel của tất cả các accordion khác
    listItems.forEach((oldItem, oldIndex) => {
      oldItem.classList.remove("active");
      slides[oldIndex].classList.add("hidden");
      const oldPanel = oldItem.nextElementSibling;
      oldPanel.style.maxHeight = null;
    });

    // Thiết lập active và mở panel của accordion hiện tại
    item.classList.add("active");
    slides[index].classList.remove("hidden");
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.scrollIntoView({ behavior: "smooth", block: "end" });
    currentIndex = index;
  });
});

function pushSlide(n) {
  listItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.remove("active");
      slides[index].classList.add("hidden");
    }
  });
  let newIndex = currentIndex + parseInt(n);
  if (newIndex > listItems.length - 1) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = listItems.length - 1;
  }
  listItems[newIndex].classList.add("active");
  slides[newIndex].classList.remove("hidden");
  currentIndex = newIndex;
}
