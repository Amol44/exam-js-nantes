// You will be given a list of objects. Each object has 'type', 'material', and possibly 'secondMaterial'. The existing materials are: 'paper', 'glass', 'organic', and 'plastic'.
// Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.
// Notes
//
//  - The bins should come in the same order as the materials listed above
//  -  All bins should be listed in the output, even if some of them are empty
//  -  If an object is made of two materials, its type should be listed in both of the respective bins
//  -  The order of the type's in each bin should be the same as the order of their respective objects was in the input list
//

function recycle(inputArray) {
  // AJOUTER VOTRE CODE ICI ...
  let paper=0, glass=0, organic=0, plastic=0;
  recycle.map(v=>v===0?paper++:v<0?glass++:organic++:plastic++)
  return [paper, glass, organic, plastic]
}

///////////////////////////////////////
//// TEST CODE - DO NOT TOUCH !!!  ////
///////////////////////////////////////
function testRecycle() {
  const iconTestSuccess = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill icon-green" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>';
  const iconTestFailed  = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill icon-red" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>';

  const textTestSuccess = 'TEST SUCCESS - Well done !\n';
  const textTestFailed  = 'TEST FAILED - Keep going !\n';
  const textCountSuccess = 'Passed : ';
  const textCountFailed = ' Failed : ';

  // Jeu de données de test par couple [ Oracle, Résultat attendu ]
  const testOracle = 0;
  const testExpected = 1;
  const oracleT1 = [
      {type: 'rotten apples', material: 'organic'},
      {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
      {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
      {type: 'amazon box', material: 'paper'},
      {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
    ];
  const expT1 = [
      ['wine bottle', 'amazon box', 'beer bottle'],   // paper
      ['wine bottle', 'beer bottle'],                 // glass
      ['rotten apples', 'out of date yogurt'],        // organic
      ['out of date yogurt']                          // plastic
    ];
  
  const oracleT2 = [
      {type: 'pin apples', material: 'organic'},
      {type: 'orange juice', material: 'glass'},
      {type: 'out of date milk', material: 'organic', secondMaterial: 'paper'},
      {type: 'newspaper', material: 'paper'},
      {type: 'cornflakes box', material: 'plastic', secondMaterial: 'paper'}
    ];
  const expT2 = [
      ['out of date milk', 'newspaper', 'cornflakes box'],
      ['orange juice'],
      ['pin apples', 'out of date milk'],
      ['cornflakes box']
    ];

  const testDataSet = [
    [oracleT1, expT1],
    [oracleT2, expT2]
  ];

  let rcResult = "";
  let rcSuccess = 0;
  let rcFailed = 0;
  let rcTotal = 0;
  for (let testData of testDataSet ) {
    rcTotal++;
    if (JSON.stringify(recycle(testData[testOracle])) === JSON.stringify(testData[testExpected])) {
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
  
document.getElementById('ex05-test-rc').innerHTML = testRecycle();
  
///////////////// EOF /////////////////
