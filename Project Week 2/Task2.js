// Buat variabel dengan nama biodata dan tipe data object 
// dengan value dan tipe data sebagai berikut:
// name (string)
// age (number)
// hobbies (array)
// IsMarried (boolean)
// schoolList (Array of Object) with key name, yearIn, 
// yearOut, and major (if any, if no set “null” )
// skills (Array of Object) with key skillName and level 
// (beginner, advanced, expert)
// interestInCoding (Boolean)

const biodata = { 
    nama : 'Mahardika Yurico Billian',
    age : 23,
    hobbies : ['play football', 'discussion', 'drinking coffee'],
    IsMarried : false,
    schoolList : [
       { schoolName : 'SMP N 1 Temanggung', yearIn : 2012, yearOut : 2015, major : null },
       { schoolName : 'SMA N 2 Temanggung', yearIn : 2015, yearOut : 2018, major : 'MIPA' },
       { schoolName : 'UPN Veteran Yogyakarta', yearIn : 2018, yearOut : 2022, major : 'Teknik Geodesi Informatika' } 
       ],
    skills : [
        {skillName : 'SIG Analysis', level : 'Advanced' },
        {skillName : 'SIG Development', level : 'beginner' },
        {skillName : 'Survey Topography', level : 'beginner' }
    ],
    interestInCoding : true
}  
console.log(biodata)