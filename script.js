const searchInput = document.querySelector("#search-input");
const submitBtn = document.querySelector("#submit-btn");
const luckyBtn = document.querySelector("#random-btn");

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
  fetch("http://localhost:8080/search/random")
    .then((resp) => resp.text())
    .then(
      (data) =>
        (window.location.href = `https://www.google.com/search?q=${data}&oq=${data}&aqs=chrome..69i57j46i433i512j46i10i199i433i465j46i199i433i465i512j0i131i433i457i512j0i402j69i60l2.1186j0j7&sourceid=chrome&ie=UTF-8`)
    );
}

// const btn1 = document.querySelector("input");
// const btn2 = document.querySelector(".btn-style2");
// const ul = document.querySelector("#text");

// btn1.addEventListener("submit", allSearch());
// // btn2.addEventListener("submit", randomSearch());

// function allSearch(e) {
//   // e.preventDefault();
//   fetch("http://localhost:8080/search")
//     .then((resp) => resp.json())
//     .then((data) => {
//       data.forEach((student) => {
//         const li = document.createElement("li");
//         li.textContent = student.age;
//         ul.append(li);
//       });
//     });
// }

// function randomSearch(e) {
//   // e.preventDefault();
//   fetch("http://localhost:2000/search/random")
//     .then((resp) => resp.json())
//     .then((data) => {
//       data.forEach((student) => {
//         const li = document.createElement("li");
//         li.textContent = student.name;
//         ul.append(li);
//       });
//     });
// }
