// Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini
// https://jsonplaceholder.typicode.com/users
// Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya

    let getData = (id=> {
        fetch(id)
        .then((data) => data.json())
        .then((result) => {
            result.map(res => {
                console.log(res.name)
            });
        }).catch(eror => console.log(eror))
               
    })

    getData("https://jsonplaceholder.typicode.com/users/")