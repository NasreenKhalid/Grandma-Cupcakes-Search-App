const buttons = document.querySelectorAll(".btn");
const storeItems = document.querySelectorAll(".store-item");
const cart = document.getElementById("cart");
const cartInfo = document.getElementById("cart-info");
const cartAddBtn = document.querySelectorAll(".store-item-icon");
const total = document.querySelector(".cart-total-container");

// Display items based on 'all', 'cake', 'cupcake' and 'doughnut' buttons
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

// SHOPPING CART FUNCTIONALITY

cartInfo.addEventListener("click", () => {
  cart.classList.toggle("show-cart");
});

cartAddBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    if (event.target.parentElement.classList.contains("store-item-icon")) {
      let fullPath = event.target.parentElement.previousElementSibling.src;
      console.log(fullPath);

      let pos = fullPath.indexOf("img") + 3;
      console.log(pos);
      let partPath = fullPath.slice(pos);
      console.log(partPath);

      const item = {};
      item.img = `img${partPath}`;

      let name =
        event.target.parentElement.parentElement.nextElementSibling.children[0]
          .children[0].textContent;
      item.name = name;
      let price =
        event.target.parentElement.parentElement.nextElementSibling.children[0]
          .children[1].textContent;

      let finalPrice = price.slice(1).trim();

      item.price = finalPrice;
      console.log(item.price);
      const cartItem = document.createElement("div");

      cartItem.classList.add(
        "cart-item",
        "d-flex",
        "justify-content-between",
        "text-capitalize",
        "my-3"
      );

      cartItem.innerHTML = `<div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src="${item.img}" class="img-fluid rounded-circle item-img" id="item-img" alt="">
      <div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p><span>$</span>
        <span id="cart-item-price" class="cart-item-price content" class="mb-0">${item.price}</span></div><a href="#" id='cart-item-remove' class="cart-item-remove"><i class="fas fa-trash"></i></a></div>`;

      cart.insertBefore(cartItem, total);
      alert("Item added to the cart");

      showTotal();
    }
  });
});

function showTotal() {
  const total = [];
  const items = document.querySelectorAll(".cart-item-price");

  items.forEach((item) => {
    total.push(parseFloat(item.textContent));
    console.log(item);
  });
  // console.log(total);

  const totalMoney = total.reduce((total, item) => {
    total += item;
    return total;
  }, 0);
  // console.log(totalMoney);
  const finalAmount = totalMoney.toFixed(2);

  document.getElementById("cart-total").textContent = finalAmount;
  document.querySelector(".item-total").textContent = finalAmount;
  document.getElementById("item-count").textContent = total.length;
}
