//Buatlah sambungan program menggunakan : 
//a. then catch 
//b. try catch 
//untuk mengecek hari kerja dari kode Asynchronous disamping dan 
//jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya

const  cekHariKerja = (day) => {
    return new Promise (( resolve, reject ) => {
        setTimeout(()=> {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error(`Hari ${day} bukan hari kerja`))
            }
        }, 3000) 
    })
}

const cek = (day=> {
    cekHariKerja(day)
    .then(check => console.log(`hari ${check} adalah hari kerja`))
    .catch(eror => console.log(eror))    
})

cek('senin')
cek('minggu')

// then catch merupakan fungsi dari promise. promise memiliki resolve (nilai yang dikembalikan terpenuhi) 
// dan reject(nilai yang dikembalikan tidak terpenuhi(error)) 
// lalu resolve akan diselesaikan pada fungsi .then dan reject akan diselesaikan di fungsi .catch.