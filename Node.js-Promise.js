//Promise node.js module is required. install using NPM
var Promise = require('promise');

testAsync();

function testAsync() {
      
    //creating a new variable holding a promise object
    var testA = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("testA complete");
        }, 3000);
    });
    
    //creating a new variable holding a promise object
    var testB = new Promise(function (resolve, reject) {
        resolve("testB complete");
    });
    
    //creating a variable with function returning a promise object
    var testC = testCPromise();

    //calling functions one after the other waiting for previous one to return
    testA.then(function (result) {
        //result from testA
        console.log(result);
        return testB;
    }).then(function (result) {
        //result from testB
        console.log(result);
        return testC;
    }).then(function (result){
         //result from testC
      console.log(result);  
    }); 
}

//function returning a promise object
function testCPromise() {
    return new Promise(function (resolve, reject) {
        resolve("testC complete");
    });
}





