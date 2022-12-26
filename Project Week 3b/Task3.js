// Buat program menggunakan callback function untuk melanjutkan 
// dan menampilkan semua bulan menggunakan method map
// Contoh : getMonth(showMonth?)


const getMonth = (callback) => {
    setTimeout(()=>{
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni','Juli', 'Agustus', 'September','Oktober', 'November','Desember' ]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'),[])
        }
    },4000)
}

const showMonth = async (error, month) => {
    if (!error){
      await month.map((e) => {
              console.log(e)
              //menambahkan variable 
      });
    } else {
      console.log(error)
    }
}
getMonth(showMonth)