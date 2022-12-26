//Coba kalian ganti jadi try catch dan async await.
//Kemudian gabungkan dengan resolve.
//Ketika panggil fungsi
//getData()
//Maka yang nampil adalah object hanya nama
//Dari resolve terebut dan ketika error maka dari reject fungsi nya

async function getData(id) {
    try {
        let response = await fetch(id)
        response = await response.json()
        response.map(res=> {
            console.log(res.name)
        })
                
    } catch (error) {
        console.log(`${error} Data Not Found`)
    }
    }
getData("https://jsonplaceholder.typicode.com/users/")



