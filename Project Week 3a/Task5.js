let data = {
    id:1,
    name :'Leane Graham',
    userName : 'bret',
    email : 'Sincare@aplril.biz',
    address:{
        street :'Kulas Ligth',
        suite :'Apt.556',
        city :'Gwenborough',
        zipcode :'92998-3874',
    },
    phone :2181831371191,
    website : 'hidegard.org'
}

//a. Ubahlah data  tersebut menggunakan spread operator menjadi:
//		- name: nama anda
//      - email: email anda
//      - hobby: hobi anda

const  updateData = {
    ...data,
    name : 'Mahardika Yurico billian',
    email : 'mahardikayurico.my@gmail.com',
    hobby : ['play futsal','coding', 'discussion']
}
console.log(updateData)


//b. Ambilah data “street dan city” tersebut menggunakan destructuring
const {street,city} =  data.address
console.log(`street : ${street} \n city : ${city}`)
