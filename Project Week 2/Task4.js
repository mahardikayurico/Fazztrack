function palindrome(text) {
    let oldText = text.toLowerCase() ; 
    let newText = '' ; 
    let result='';

   for (let x = oldText.length - 1; x >= 0; x--) {
     newText = newText + oldText[x];
    } if (oldText.length > 2) {
      if (newText ==  oldText ) {
        result = 'Polyndrome'
      } else {
        result = 'Not a Polyndrome' 
      }
    } else {
        result = 'Text must be more than two letters '
    } 
    return result
   }

  console.log(palindrome('Malam'));
  console.log(palindrome('Rusak Kasur'));
  console.log(palindrome('fazztrack'));
  console.log(palindrome('ru'));
  console.log(palindrome('ini'));
