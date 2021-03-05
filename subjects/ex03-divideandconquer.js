// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers. 

function divideAndConquer( inputArray ) {
  let rcResult = 0;

  for (let value of inputArray) {
    if (typeof(value) === 'string') {
      rcResult -= parseInt(value);
    } else {
      rcResult += value;
    }
  }
  
  return rcResult;
}

///////////////////////////////////////
//// TEST CODE - DO NOT TOUCH !!!  ////
///////////////////////////////////////
function testConquer() {
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
      [[9, 3, '7', '3'], 2],
      [['5', '0', 9, 3, 2, 1, '9', 6, 7], 14],
      [['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'], 13 ],
      [[9, '9', 7, 4, '9', 8, '8', 1, 0, 2, '2', 5, 3, '1', '6', 8, '2', 6, 3, '7'], 12],
      [[4, 9, '2','3', 4, 6, 6, '4', '9', 3, '9', 1, 8, 8, 5, '6', '5', '6', 4, 7, '8', 7, 1,'5', '5', 1, 6, 4, '9', 3], 16]
    ];

    let rcResult = "";
    let rcSuccess = 0;
    let rcFailed = 0;
    let rcTotal = 0;
    for (let testData of testDataSet ) {
      rcTotal++;
      if (divideAndConquer(testData[testOracle]) === testData[testExpected]) {
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
  
document.getElementById('ex03-test-rc').innerHTML = testConquer();

/////////////// EOF ///////////////////