// Buat program yang menghitung rata-rata UN beserta 
// gradenya, dengan mengisi 4 nilai yakni Bahasa 
// indonesia, Bahasa Inggris Matematika dan IPA, yang 
// di dalam program tersebut memiliki validasi yaitu 
// semua nilai tersebut harus diisi dan juga untuk 
// grade memiliki kondisi dengan ketentuan sebagai 
// berikut:
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E

function velue(bahasaIndonesia, bahasaInggris, matematika, IPA) {
    let total = [(bahasaIndonesia + bahasaInggris + matematika + IPA)/4]
if (total >= 90 && total <=100 ) {
    result = `velue = ${total} Grade = A`
} else if (total >= 80){
    result = `velue = ${total} Grade = B`
} else if (total >= 70) {
    result = `velue = ${total} Grade = C`
} else if (total >= 60) {
    result = `velue = ${total} Grade = D`
} else if (total >= 0) {
    result = `velue = ${total} Grade = E`
} else {
    result = 'semua nilai tersebut harus diisi '
}
return result
}
// Masukan nilai sesuai urutan, sebagai berikut  : (bahasa indonesia, bahasa inggris, matematika, IPA)
// 1. bahasa indonesia misalnya 80
// 2. bahasa Inggris misalnya 90
// 3. Matematika  misalnya 100
// 4. IPA misalnya 20
// CONTOH : velue(80,90,100,20)
// nilai harus semua diisi
console.log(velue(90,90,90,90))
console.log(velue(80,91,92,70))
console.log(velue(70,70,70,70))
console.log(velue(60,60,60,60))
console.log(velue(80,20,30,10))
console.log(velue(100,100,100))
