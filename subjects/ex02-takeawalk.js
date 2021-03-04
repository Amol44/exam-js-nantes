// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the 
// opportunity to go for a short walk. The city provides its citizens with a Walk 
// Generating App on their phones -- everytime you press the button it sends you 
// an array of one-letter strings representing directions to walk 
// (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter 
// (direction) and you know it takes you one minute to traverse one city block, 
// so create a function that will return true if the walk the app gives you will 
// take you exactly ten minutes (you don't want to be early or late!) and will, 
// of course, return you to your starting point. Return false otherwise.
// 
// Note: you will always receive a valid array containing a random assortment of 
// direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array 
// (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  // AJOUTER VOTRE CODE ICI ...
  let ns = 0, we = 0; 
    for (let dir of walk) { 
      if (dir == 'n') ns += 1; 
      if (dir == 's') ns -= 1; 
      if (dir == 'w') we += 1; 
      if (dir == 'e') we -= 1; 
    } 

    return walk.length == 10 && ns === 0 && we === 0; 
}

///////////////////////////////////////
//// TEST CODE - DO NOT TOUCH !!!  ////
///////////////////////////////////////
function testIsValidWalk() {
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
      [['w'], false],                                               // Walk too short
      [['w','e','w','e','w','e','w','e'], false],                   // Walk too short
      [['w','e','w','e','w','e','w','e','w','e','w','e'], false],   // Walk too long
      [['n','n','n','s','n','s','n','s','n','s'], false],           // Dont bring back to start
      [['n','s','n','s','n','s','n','s','n','s'], true]             // Valid walk
    ];
  
    let rcResult = "";
    let rcSuccess = 0;
    let rcFailed = 0;
    let rcTotal = 0;
    for (let testData of testDataSet ) {
      rcTotal++;
      if (isValidWalk(testData[testOracle]) === testData[testExpected]) {
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
  
  document.getElementById('ex02-test-rc').innerHTML = testIsValidWalk();
  
//////////////// EOF //////////////////