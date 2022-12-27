const postList = document.querySelector('.post-list');
let output = '';

const renderPost = (post)=>{
    post.forEach(post => {
        output += `
        <div class="card mt-4 col-md-6 bg-ligt">
            <div class="card-body"  data-id=${post.id}>
                <h5 class="card-title"> ${post.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Username : ${post.username}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Email :  ${post.email}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Phone : ${post.phone}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Website : ${post.website}</h6>
                <a href="#" class="card-link card-address-button"  data-bs-toggle="modal"
                data-bs-target="#exampleModal"  id="address-post">Address</a>

                <a href="#" class="card-link card-company-button" data-bs-toggle="modal"
                data-bs-target="#exampleModal" id= "company-post" > Company</a>
            </div>
        </div>
      `;
    });
    postList.innerHTML = output;
}


const getAddress =(post)=>{
  return `
        <div class="container-fluid">
                <div class="row">
                  <ul class="list-group justify-content-left">
                    <li class="list-group-item"> <b> Street </b> : ${post.address.street}</li>
                    <li class="list-group-item"><b> Suite </b> : ${post.address.suite}</li>
                    <li class="list-group-item"><b> City  </b> : ${post.address.city}</li>
                    <li class="list-group-item"><b>Zipcode </b>: ${post.address.zipcode}</li>
                  </ul>
                </div>
              </div>
              `
}
const getCompany =(post)=>{
    return `
          <div class="container-fluid">
                  <div class="row">
                    <ul class="list-group justify-content-left">
                      <li class="list-group-item"> <b> Name </b> : ${post.company.name}</li>
                      <li class="list-group-item"><b> Catch Phrase </b> : ${post.company.catchPhrase}</li>
                      <li class="list-group-item"><b> BS  </b> : ${post.company.bs}</li>
                    </ul>
                  </div>
                </div>
                `
  }
  



const url = 'https://jsonplaceholder.typicode.com/users';



////Get 
//Method : GET
fetch(url)
.then(res=> res.json())
.then(data=> renderPost(data))


// get adddress

postList.addEventListener('click',(e)=>{
    e.preventDefault();
    let addressButton = e.target.id == "address-post";
    let companyButton = e.target.id == "company-post";
    let id = e.target.parentElement.dataset.id
    

    if (addressButton) {
        fetch(`${url}/${id}`)
     .then(res=> res.json())
     .then((data)=> {
                const addressDetail = getAddress(data)
                const modalBody= document.querySelector('.modal-body')
                modalBody.innerHTML = addressDetail
            })
    }  


    
    if (companyButton) {
        fetch(`${url}/${id}`)
     .then(res=> res.json())
     .then((data)=> {
                const companyDetail = getCompany(data)
                const modalBody= document.querySelector('.modal-body')
                modalBody.innerHTML = companyDetail
            })
    }  


    })










// const addressButton = document.querySelectorAll('.card-address-button') 
// addressButton.forEach(btn=> {
//     btn.addEventListener('click', (e) => {
//         const id = e.target.dataset.id
//         fetch( url + id)
//         .then(res=> res.json())
//         .then(post=>{
//             const addressDetail = getAddress(post)
//             const modalBody= document.querySelector('.modal-body')
//             modalBody.innerHTML = addressDetail
//             })
        
//     })
// })