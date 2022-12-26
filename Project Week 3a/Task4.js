//Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). 
//Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
//Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, 
//mengurutkan hasil pencarian dan menampilkannya ke layar/console.

const searchData = (firstVelue, endVelue, arrayData)=>{
    if (firstVelue < endVelue && arrayData.length > 5) {
        const getData = arrayData.filter(num => (num > firstVelue  && num < endVelue));
        if (getData.length > 0) {
            const sorting = getData.sort(function(a,b){return a- b})
            return showResult(sorting)
        } else {
           return showResult('Nilai Tidak di Temukan')
        }
        
    } else if (firstVelue > endVelue && arrayData.length > 5 ) {
        return showResult('Nilai akhir harus lebih besar dari nilai awal ')
    } else if (firstVelue < endVelue &&  arrayData.length < 5 ) {
        return showResult('Jumlah angka dalam dataArray harus lebih dari 5 ')
    } else {
        return showResult('Nilai akhir harus lebih besar dari nilai awal dan Jumlah angka dalam dataArray harus lebih dari 5')
    }  
    
}
const showResult =(data)=>{ 
        console.log(data)
    }
   


searchData(5, 20 , [2, 25, 4, 14, 17, 30, 8]) // Output: [8, 14, 17]
searchData(15, 3 , [2, 25, 4, 14, 17, 30, 8]) // Output: “Nilai akhir harus lebih besar dari nilai awal”
searchData(4, 17 , [2, 25, 4])  // Output: “Jumlah angka dalam dataArray harus lebih dari 5”
searchData(5, 17 , [2, 25, 4, 1, 30, 18])  // Output: “Nilai tidak ditemukan”
searchData(17, 4 , [2, 25, 4])  // Output : Nilai akhir harus lebih besar dari nilai awal dan Jumlah angka dalam dataArray harus lebih dari 5

    


