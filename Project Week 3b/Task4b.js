//Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

const  cekPresidenName = (name) => {
    return new Promise (( resolve, reject ) => {
        setTimeout(()=> {
            const dataName = ['Soekarno','Soeharto','Habibie','Gusdur','Megawati','SBY', 'Jokowi']
            let cek = dataName.find((item) => {
                return item === name
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error(`${name} bukan Presiden Indonesia`))
            }
        }, 2000) 
    })
}

  async function cek (name) {
    try {
        const check = await cekPresidenName(name)
          console.log(`${check} adalah Presiden Indonesia` )
        } catch(eror) {
          console.log(eror)
        }
} 
   
cek('Soekarno')
cek('Rocky Gerung')
