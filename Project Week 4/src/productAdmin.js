const postList = document.querySelector('.post-list');
let output='';

const renderPost = (post)=>{
    post.forEach(post => {
        output += `
        <div class="row">
                <div class="card card-product shadow">
                  <img
                    src="./img/product/p1.png"
                    class="card-img-top rounded-circle shadow"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">${post.name}</h5>
                    <p class="card-text">${post.price}</p>
                    <a href="#" class="card-link">Edit</a>
                    <a href="#" class="card-link">Delete</a>
                  </div>
                </div>
              </div> `;
    });
    postList.innerHTML = output;
}

const url = 'https://63a83a8a100b7737b97a1ebd.mockapi.io/products';

//Get 
//Method : GET
fetch(url)
.then(res=> res.json())
.then(data=> renderPost(data))