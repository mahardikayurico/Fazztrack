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
async function cek (day) {
    try {
        const check = await cekHariKerja(day)
          console.log(`hari ${check} adalah hari kerja` )
        } catch(notWork) {
          console.log(notWork)
        }
} 
   
cek('senin')
cek('minggu')

// try catch merupakan  fungsi bantu async await dalam mengembalikan promise
// dikarenakan Await butuh bantuan try catch untuk error handling, 
//karena await tidak memiliki onRejection function , 
//namun memiliki rejected value untuk di kembalikan  ke catch.