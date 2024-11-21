//#1 -- For loop in Javascript.
const nemo = ['nemo'];
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
 
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');


function findNemo1(array) {
    let t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now()
  console.log('The code took: '+ (t1-t0)+ 'milliseconds')
}

findNemo1(large);
