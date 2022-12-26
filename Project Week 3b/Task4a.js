//Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

const  cekTeamBigSix = (team) => {
    return new Promise (( resolve, reject ) => {
        setTimeout(()=> {
            const dataTeam = ['Manchester United','Chelsea','Manchester City','Arsenal','Tottenham','Liverpool']
            let cek = dataTeam.find((item) => {
                return item === team
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error(`${team} adalah tim ampas`))
            }
        }, 3000) 
    })
}
const cek = (team=> {
    cekTeamBigSix(team)
    .then(check => console.log(`${check} adalah Tim Liga Inggris 6 besar Terbaik sepanjang Masa`))
    .catch(eror => console.log(eror))    
})

cek('Manchester United')
cek('Real Madrid')