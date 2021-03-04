// Your task is to sort a given string. Each word in the string 
// will contain a single number. This number is the position the 
// word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words 
// in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// Optimized answer
// function order(words) {
//    return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
//}

function order(words) {
  // AJOUTER VOTRE CODE ICI ...
  return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/);
 }).join(' ');
}

///////////////////////////////////////
//// TEST CODE - DO NOT TOUCH !!!  ////
///////////////////////////////////////
function testOrder() {
    const iconTestSuccess = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill icon-green" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>';
    const iconTestFailed  = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill icon-red" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>';
  
    const textTestSuccess = 'TEST SUCCESS - Well done !\n';
    const textTestFailed  = 'TEST FAILED - Keep going !\n';
    const textCountSuccess = 'Passed : ';
    const textCountFailed = ' Failed : ';
  
    // Jeu de données de test par couple [ Oracle, Résultat attendu ]
    const testOracle = 0;
    const testExpected = 1;
    const testDataSet = [
      ['is2 Thi1s T4est 3a', 'Thi1s is2 3a T4est'],
      ['4of Fo1r pe6ople g3ood th5e the2', 'Fo1r the2 g3ood 4of th5e pe6ople'],
      ['th4is Wel1l a6 done2 dow8n 3dud is5 tou7ch', 'Wel1l done2 3dud th4is is5 a6 tou7ch dow8n'],
      ['', ''], 
      ['3 4 1 6 2 5', '1 2 3 4 5 6']
    ];
  
    let rcResult = "";
    let rcSuccess = 0;
    let rcFailed = 0;
    let rcTotal = 0;
    for (let testData of testDataSet ) {
      rcTotal++;
      if (order(testData[testOracle]) === testData[testExpected]) {
        rcResult += iconTestSuccess + " #0" + rcTotal + " " + textTestSuccess;
        rcSuccess++;
      } else {
        rcResult += iconTestFailed + " #0" + rcTotal + " " + textTestFailed;
        rcFailed++;
      }
    }
    rcResult = textCountSuccess + rcSuccess + textCountFailed + rcFailed + '\n' + rcResult;
  
    return rcResult;
}
  
document.getElementById('ex04-test-rc').innerHTML = testOrder();

/////////////// EOF ///////////////////