const btn = document.querySelector("#click");
const plush = document.querySelector("#plush");
const inputFild = document.querySelector("#number");
const price = document.getElementById("prices");

let num = 1;
plush.addEventListener("click", () => {
  num = num < 10 ? "0" + num : num;
  inputFild.innerHTML = num;
  if (num <= 9) {
    price.innerHTML = num * 65;
    num++;
  } else {
    alert("Not Are Availavle In This Product");
  }
});

btn.addEventListener("click", () => {
  alert("Your Order Is Conform!");
});
