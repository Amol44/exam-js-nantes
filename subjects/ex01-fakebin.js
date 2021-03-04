// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  // AJOUTER VOTRE CODE ICI ...
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

///////////////////////////////////////
//// TEST CODE - DO NOT TOUCH !!!  ////
///////////////////////////////////////
function testFakeBin() {
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
    ['257', '011'],
    ['45385593107843568', '01011110001100111'],
    ['509321967506747', '101000111101101'],
    ['84201296138', '10000011001'],
    ['63695133114985590386721093642', '10111000000111110011100010100']
  ];

  let rcResult = "";
  let rcSuccess = 0;
  let rcFailed = 0;
  let rcTotal = 0;
  for (let testData of testDataSet ) {
    rcTotal++;
    if (fakeBin(testData[testOracle]) === testData[testExpected]) {
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

document.getElementById('ex01-test-rc').innerHTML = testFakeBin();

///////////////// EOF /////////////////