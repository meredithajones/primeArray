const numArray = document.getElementById('array');

function sumPrimes(num) {
  //Produce an array containing all number of to and including num
  let numArray = [];
  for (i = 2; i <num; i++) {
    numArray.push(i);
  }

  //Remove non-prime numbers from the array     
  numArray.map((number) => {
    for (let i = 2; i < number; i++) {
        if(number% i === 0) {
            let index = numArray.indexOf(number);
            return numArray.splice(index, 1);  
            
        }
    }   
  });

  console.log(numArray);

//  return numArray;

}

sumPrimes(30);