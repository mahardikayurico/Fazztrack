//Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

// 1. Push 
// Method push digunakan untuk menambah satu atau lebih data baru di ahkir dari sebuah array.
// example : 
const numSatu = [1, 2, 3]
numSatu.push(4);  
console.log(numSatu)

//2. Pop 
// Method pop digunakan untuk menghapus item terakhir dari sebuah array.
const numDua = [1, 2, 3]
numDua.pop();
console.log(numDua) 

//3. Shift
// Digunakan untuk menghapus item pertama dari sebuah array.
const numTiga = [1, 2, 3]
numTiga.shift();
console.log(numTiga)

//4. Unshift
//unshift digunakan untuk menambah item baru di awal sebuah array
const numEmpat = [3, 4]
numEmpat.unshift(1, 2);
console.log(numEmpat)

//5. Includes
//includes digunakan untuk mengecek apakah sebuah array memilik i element tertentu.
const hobbies = ['play football', 'coding', 'disscusion']
console.log(hobbies.includes('coding')) // true
console.log(hobbies.includes('play futsal')) // false
// default index dari Includes mulai dari 0 
console.log(hobbies.includes('coding',2))// false

//6. indexOf
//indexOf digunakan untuk mencari letak sebuah item dalam array
const footballClub = ['Manchester United', 'Real Madrid', 'Barcelona']
console.log(footballClub.indexOf('Manchester United')) // return 0
console.log(footballClub.indexOf('Chelsea')) // return -1
// default index dari Includes mulai dari 0 
console.log(footballClub.indexOf('Real Madrid',2)) // return -1

//7.Concat
//concat digunakan untuk menggabungkan 2 atau lebih array.
const playerMu = ['Rasford', 'Maguaire', 'Shaw']
const playerChelsea = ['Sterling', 'Stones']
const playerCity = ['Grealish']
const playerEngland = playerMu.concat(playerChelsea, playerCity)
console.log(playerEngland)

//8.Slice
//slice digunakan untuk memilih satu atau beberapa item dari sebuah array.
const playerUnited = ['Martinez', 'Sancho', 'Antony','Rasford']
console.log(playerUnited.slice(0,2))//output : martinez, sancho


//9. Splice
//splice() bisa digunakan untuk menambahkan, menghapus, atau mereplace item ke atau dari sebuah array.
//menghapus
const playerTimnas = ['Witan', 'Egy', 'Abimanyu']
playerTimnas.splice(0, 1) // menghapus 1 item di index 0
console.log(playerTimnas) 

// mereplace
const playerIndo = ['Witan', 'Egy', 'Abimanyu']
playerIndo.splice(2, 2, 'yanto basna')// menghapus 1 item di index 0 dan menambah 'mango' di index 0
console.log(playerIndo)

//menambah
const country = ['Indonesia', 'Thailand', 'Malaysia']
country.splice(0, 0, 'Timur laste') // menambah 1 item di index 0 
console.log(country)


//10. Sort
//sort digunakan untuk mengurutkan item dalam sebuah array. Uratannya bisa numeric atau alphabetic, bisa ascending (keatas) ataudescending (kebawah).
const numSep = [11, 18, 100, 25, 30]
console.log(numSep.sort()) // output ->[ 100, 11, 18, 25, 30 ]
//default method sort akan mengurutkan secara alphabetic dan ascending.

const numSepu = [11, 18, 100, 25, 30]
console.log(numSepu.sort(function(a,b){return a- b})) 
// output -> [ 11, 18, 25, 30, 100 ]
const numSepuluh = [11, 18, 100, 25, 30]
console.log(numSepuluh.sort(function(a,b){return b - a}))
// output -> [ 100, 30, 25, 18, 11 ]


//11. find
//Menampilkan item pertama dari hasil pencarian sesuai dengan kriteria yang sudah ditentukan di dalam sebuah function.
const numSebelas = [10, 9, 11, 12, 8, 13];
function getBigNumber(number) {
  if (number > 10) {
    return number;
  }
}
const result = numSebelas.find(getBigNumber);
console.log(result); // 11

//12. filter
//Menampilkan hasil pencarian sesuai dengan kriteria yang sudah ditentukan di dalam sebuah function.
//Hasil pencarian disimpan dalam array baru.
const numDuaBelas = [10, 9, 11, 12, 8, 13];
function getBigNumber(number) {
  if (number > 10) {
    return number;
  }
}
const apaya = numDuaBelas.filter(getBigNumber);
console.log(apaya); // [ 11, 12, 13 ]

//13. forEach
//Memodifikasi array dengan cara mengeksekusi sebuah function untuk setiap item array.
const geoGroup = ['ts', 'wp', 'gps'];
geoGroup.forEach(geo => console.log(geo));
// Output : 
// ts
// wp
// gps

//14. map
//Memodifikasi array dengan cara mengeksekusi sebuah function 
//untuk setiap item array dimana array hasil modifikasinya adalah sebuah array baru.
const numMap = [1, 2, 3, 4, 5];
function doubleIt(number) {
  return number * 2;
}
const yaapa = numMap.map(doubleIt);
console.log(yaapa); // [ 2, 4, 6, 8, 10 ]

//15. join 
// untuk  menggabungkan elemen array menjadi sebuah string.
const book = ['sosial','politik','progammer','lingkungan']
console.log(book.join()) // output : sosial,politik, prommer, lingkungan

//16.reverse
// digunakan untuk membalikkan urutan dari elemen di dalam array.
const arrRev = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arrRev.toString());         //hasil: 1,2,3,4,5,a,b,c,d,e
arrRev.reverse();
console.log(arrRev.toString());         //hasil: e,d,c,b,a,5,4,3,2,1

