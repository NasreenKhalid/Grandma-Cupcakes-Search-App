const buttons = document.querySelectorAll(".btn");
const storeItems = document.querySelectorAll(".store-item");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    // console.log(filter);

    storeItems.forEach((item) => {
      if (filter === "all") {
        item.style.display = "block";
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

//wire up filter search box

const searchBox = document.querySelector("#search-item");

searchBox.addEventListener("keyup", (e) => {
  const searchFilter = e.target.value.toLowerCase().trim();

  storeItems.forEach((item) => {
    if (item.textContent.includes(searchFilter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
