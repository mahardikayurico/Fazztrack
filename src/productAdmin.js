// Task 5 Menambahkan toggle pada Navbar (edit and add data)
const cekPromo = document.getElementById('cek-promo');
const promo = document.getElementById('promo');

promo.style.display ="none";

cekPromo.addEventListener("click",(e)=>{
  if (promo.style.display == "none") {
    promo.style.display ="block"
  } else {
    promo.style.display ="none"
  }
})

// Task 5 Menambahkan toggle pada Navbar (edit and add data)
const update = document.getElementById('update');
const dropDown = document.getElementById('dropDown');

dropDown.style.display = "none"

update.addEventListener("click", (e)=>{
  if (dropDown.style.display == "none") {
    dropDown.style.display = "block"
  } else {
    dropDown.style.display = "none"
  }
})




const postList = document.querySelector('.post-list');
const addPostForm =  document.querySelector('.add-post-form')
const nameValue = document.getElementById("name-value")
const priceValue = document.getElementById('price-value')
const btnSubmit = document.querySelector('.btn-submit')

let output='';


const renderPost = (post)=>{
    post.forEach(post => {
        output += `
        <div class="row">
                <div class="card card-product shadow" >
                  <img
                    src="./img/product/p1.png"
                    class="card-img-top rounded-circle shadow"
                    alt="..."
                  />
                  <div class="card-body" data-id=${post.id}>
                    <h5 class="card-title">${post.name}</h5>
                    <p class="card-text">IDR ${post.price}</p>
                    <a href="#" class="card-link" id="edit-post">Edit</a>
                    <a href="#" class="card-link" id="delete-post">Delete</a>
                  </div>
                </div>
              </div> `;
    });
    postList.innerHTML = output;
}

const url = 'http://localhost:3000/product';


postList.addEventListener('click',(e)=>{
  e.preventDefault();
  let delButton = e.target.id == "delete-post";
  let editButton = e.target.id == "edit-post";
  let id = e.target.parentElement.dataset.id
  
  
  // Task 4 delete data 
  if (delButton) {
   fetch(`${url}/${id}`,{
       method:'DELETE',
   })
   .then(res=> res.json())
   .then(()=> location.reload())
  }

  // Edit data
  if (editButton) {
  const parent = e.target.parentElement;
  let  name = parent.querySelector('.card-title').textContent; 
  let  price = parent.querySelector('.card-text').textContent;
  
  nameValue.value = name;
  priceValue.value = price;}
  
  // METHOD PATCH 
  // UPDATE DATA
  
  btnSubmit.addEventListener('click', (e)=>{
  e.preventDefault();
  
  fetch(`${url}/${id}`,{ 
      method : 'PATCH',
      headers: { 'Content-Type' : 'application/json' },
          body : JSON.stringify({
              name : nameValue.value,
              price : priceValue.value
          })
  })
  .then(res=>res.json())
  .then(()=>location.reload())
  
  })
  
  })

//Get 
//Method : GET
//Task 3 menampilkan data / element dari input form yang sudah didapatkan
fetch(url)
.then(res=> res.json())
.then(data=> renderPost(data))

//post
//method : POST
// Task 2 Mendapatkan value dari input form
// Task 3 Menambahkan data / element dari input form 
addPostForm.addEventListener('submit',(e)=>{
  e.preventDefault();     
    fetch(url,{
        method : 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body : JSON.stringify({
            name : nameValue.value,
            price : priceValue.value
        })
    })
    .then(res=> res.json())
    .then(data=>{
        const dataArray = [];
        dataArray.push(data)
        renderPost(dataArray)
    })
})

