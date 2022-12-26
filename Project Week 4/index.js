const postList = document.querySelector('.post-list');
const addPostForm =  document.querySelector('.add-post-form')
let output = '';
const nameVelue = document.getElementById('name-velue')
const priceVelue = document.getElementById('price-velue')
const btnSubmit = document.querySelector('.btn-submit')


const renderPost = (post)=>{
    post.forEach(post => {
        output += `
        <div class="card mt-4 col-md-6 bg-ligt">
            <div class="card-body" data-id=${post.id}>
                <img
                        src="${post.image}"
                        class="card-img-top rounded-circle shadow"
                      />
                <h5 class="card-title">${post.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${post.price}</h6>
                <a href="#" class="card-link" id="edit-post">Edit</a>
                <a href="#" class="card-link"id= "delete-post">Delete</a>
            </div>
        </div>
      `;
    });
    postList.innerHTML = output;
}

const url = 'https://my-json-server.typicode.com/mahardikayurico/coffeshop/product';


postList.addEventListener('click',(e)=>{
e.preventDefault();
let delButton = e.target.id == "delete-post";
let editButton = e.target.id == "edit-post";
let id = e.target.parentElement.dataset.id


// delete 
if (delButton) {
 fetch(`${url}/${id}`,{
     method:'DELETE',
 })
 .then(res=> res.json())
 .then(()=> location.reload())
}
if (editButton) {
const parent = e.target.parentElement;
let  productName = parent.querySelector('.card-title').textContent; 
let  price = parent.querySelector('.card-subtitle').textContent;

nameVelue.velue = productName;
priceVelue.velue = price;}

// METHOD PATCH 
// UPDATE DATA

btnSubmit.addEventListener('click', (e)=>{
e.preventDefault();

fetch(`${url}/${id}`,{ 
    method : 'PATCH',
    headers: { 'Content-Type' : 'application/json' },
        body : JSON.stringify({
            name : nameVelue.velue,
            price : priceVelue.velue
        })
})
.then(res=>res.json())
.then(()=>location.reload())

})

})

////Get 
//Method : GET
fetch(url)
.then(res=> res.json())
.then(data=> renderPost(data))


// create insert new post

addPostForm.addEventListener('submit',(e)=>{
  e.preventDefault();
    // console.log('form subminted');
    fetch(url, {
        method : 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body : JSON.stringify({
            name : nameVelue.velue,
            price : priceVelue.velue
        })
    })
    .then(res=> res.json())
    .then(data=>{
        const dataArray = [];
        dataArray.push(data)
        renderPost(dataArray)
    })
    //reset input field
    nameVelue.velue = '';
    priceVelue.velue ='';
}) 

