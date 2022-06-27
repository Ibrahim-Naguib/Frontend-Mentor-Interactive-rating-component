let rates = document.querySelectorAll(".rating div");
let num;
rates.forEach((rate) => {
    // Remove and add active class to the rate numbers
  rate.classList.remove("active");
  rate.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    num = e.target.dataset.num;
  });
});

let btn = document.querySelector("button[type=submit]");
btn.onclick = (e) => {
  // Check if a rate is selected or not before submitting
  for (let rate of rates) {
    if (rate.classList.contains("active")) {
      let state = document.querySelector(".state");
      let thanks = document.querySelector(".thank");
      state.style.display = "none";
      thanks.style.display = "flex";
      //   Add rate number to the paragraph
      let rate = document.querySelector(".thank .rate p");
      rate.innerHTML = `You selected ${num} out of 5`;
    } else {
      e.preventDefault();
    }
  }
};
