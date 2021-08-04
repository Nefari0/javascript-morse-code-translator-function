//  --- Morse Code Translator --- //
//  this is not a codewars.com kata //

// when sending morse code to the translator function, you must add an extra space between words to recieve readable text, otherwise the recieved text will only be one word.


const morseTranslator = (str) => {

    morseStrArr = str.split(' ')
    charStrArr = str.split('')
    var strArr = (morseStrArr[0] != '-' || morseStrArr[0] === '.' ?  charStrArr : morseStrArr)
  
    var newString = ''
      strArr.forEach(inputValue => {
        if(inputValue === 'a' || inputValue === '.-') {(inputValue === 'a' ? newString += '.-' : newString += 'a')}
        if(inputValue === 'b' || inputValue === '-...') {(inputValue === 'b' ? newString += '-...' : newString += 'b')}
        if(inputValue === 'c' || inputValue === '-.-.') {(inputValue === 'c' ? newString += '-.-.' : newString += 'c')}
        if(inputValue === 'd' || inputValue === '-..') {(inputValue === 'd' ? newString += '-..' : newString += 'd')}
        if(inputValue === 'e' || inputValue === '.') {(inputValue === 'e' ? newString += '.' : newString += 'e')}
        if(inputValue === 'f' || inputValue === '.-..') {(inputValue === 'f' ? newString += '.-..' : newString += 'f')}
        if(inputValue === 'g' || inputValue === '--.') {(inputValue === 'g' ? newString += '--.' : newString += 'g')}
        if(inputValue === 'h' || inputValue === '....') {(inputValue === 'h' ? newString += '....' : newString += 'h')}
        if(inputValue === 'i' || inputValue === '..') {(inputValue === 'i' ? newString += '..' : newString += 'i')}
        if(inputValue === 'j' || inputValue === '.---') {(inputValue === 'j' ? newString += '.---' : newString += 'j')}
        if(inputValue === 'k' || inputValue === '-.-') {(inputValue === 'k' ? newString += '-.-' : newString += 'k')}
        if(inputValue === 'l' || inputValue === '.-..') {(inputValue === 'l' ? newString += '.-..' : newString += 'l')}
        if(inputValue === 'm' || inputValue === '--') {(inputValue === 'm' ? newString += '--' : newString += 'm')}
        if(inputValue === 'n' || inputValue === '-.') {(inputValue === 'n' ? newString += '-.' : newString += 'n')}
        if(inputValue === 'o' || inputValue === '---') {(inputValue === 'o' ? newString += '---' : newString += 'o')}
        if(inputValue === 'p' || inputValue === '.--.') {(inputValue === 'p' ? newString += '.--.' : newString += 'p')}
        if(inputValue === 'q' || inputValue === '--.-') {(inputValue === 'q' ? newString += '--.-' : newString += 'q')}
        if(inputValue === 'r' || inputValue === '.-.') {(inputValue === 'r' ? newString += '.-.' : newString += 'r')}
        if(inputValue === 's' || inputValue === '...') {(inputValue === 's' ? newString += '...' : newString += 's')}
        if(inputValue === 't' || inputValue === '-') {(inputValue === 't' ? newString += '-' : newString += 't')}
        if(inputValue === 'u' || inputValue === '..-') {(inputValue === 'u' ? newString += '..-' : newString += 'u')}
        if(inputValue === 'v' || inputValue === '...-') {(inputValue === 'v' ? newString += '...-' : newString += 'v')}
        if(inputValue === 'w' || inputValue === '.--') {(inputValue === 'w' ? newString += '.--' : newString += 'w')}
        if(inputValue === 'x' || inputValue === '-..-') {(inputValue === 'x' ? newString += '-..-' : newString += 'x')}
        if(inputValue === 'y' || inputValue === '-.--') {(inputValue === 'y' ? newString += '-.--' : newString += 'y')}
        if(inputValue === 'z' || inputValue === '--..') {(inputValue === 'z' ? newString += '--..' : newString += 'z')}
        
        if(strArr != morseStrArr){newString += ' '} // adds space between characters if translating to Morse
        if(inputValue === '') {newString += ' '} // adds space between words if translating to human readable words
      })
  
      return('newString',newString)
  }
  
  const morseString = '- .... .. ...  .. ...  .-  ... - .-. .. -. --.'
  const wordString = 'this is a string'
  morseTranslator(morseString)
  morseTranslator(wordString)