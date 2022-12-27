const tbody = document.querySelector("tbody");
const detail = document.getElementById("detail");
let loadData = async () => {
  try {
    const url = await fetch("https://jsonplaceholder.typicode.com/users");
    userData = await url.json();
    loadUserData(userData);
  } catch (err) {
    console.log(err);
  }
};

const loadUserData = (data) => {
  const output = data
    .map((el) => {
      return `
        <tr>
    <th> ${el.id} </th>
    <th>${el.name}</th>
    <th>${el.email}</th>
    <th> <button onclick = 'showDetail (${el.id})'> Detail </button> </th>
      </tr>
  `;
    })
    .join("");
  tbody.innerHTML = output;
};

function showDetail(id) {
  fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then((res) => res.json())
    .then((data) => {
      detail.innerHTML = "";
      detail.insertAdjacentHTML(
        "beforeend",
        `
        <center>
      <ul> 
          <li>${data.name}</li>
          <li>${data.username}</li>
          <li>${data.email}</li>
          <li>${data.address.city}</li>
          <li>${data.address.zipcode}</li>
          <li>${data.phone}</li>
          <li>${data.website}</li>
          <li>${data.company.name}</li>
          </ul>
      </center>`
      );
    });
}
loadData();