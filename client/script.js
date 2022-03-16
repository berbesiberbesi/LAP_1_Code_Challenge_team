const searchInput = document.querySelector("#search-input");
const submitBtn = document.querySelector("#btn-style1");
const luckyBtn = document.querySelector("#btn-style2");

searchInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    search();
  }
});

submitBtn.addEventListener("click", search);

function search() {
  const input = searchInput.value;
  window.location.href = `https://www.google.com/search?q=${input}&oq=${input}&aqs=chrome..69i57j46i433i512j46i10i199i433i465j46i199i433i465i512j0i131i433i457i512j0i402j69i60l2.1186j0j7&sourceid=chrome&ie=UTF-8`;
}

function searchLucky(e) {
  fetch("http://localhost:2000/search/random")
    .then((resp) => resp.text())
    .then(
      (data) =>
        (window.location.href = `https://www.google.com/search?q=${data}&oq=${data}&aqs=chrome..69i57j46i433i512j46i10i199i433i465j46i199i433i465i512j0i131i433i457i512j0i402j69i60l2.1186j0j7&sourceid=chrome&ie=UTF-8`)
    );
}









