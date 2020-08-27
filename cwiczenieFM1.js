function addTwoToEveryNumberInTheList (list) {
    // an example for you to see how the tests work
    
    const newList = [];
  
    for (let i = 0; i < list.length; i++) {
      newList.push(list[i] + 2);
    }
    
    return newList;
  } 
  
  function findLargestNumber(list) {
    // return the largest number in array
    let largest = 0;
    for (let i=0; i<list.length; i++){
      if (list[i]>largest){
        largest = list[i]
      }
    }
    return largest;
  }
  
  function makeDogObject() {
  
    // return a dog object that
    //   has a speak method that returns woof
    //   has a name property of "Fido"
    //   has a color property of "white"
    //   has an age property of 6
    return{
    speak() { return "woof"},
    name: "Fido",
    color: "white",
      age: 6
  }
  }
  
  function getListOfNames(list) {
    // list is an array of objects that looks like this
    // { name: "Some Person", jobTitle: "Boss Person", age: 30 }
    // return a list of all the workers' names
    newList = [];
    for (let i=0; i<list.length; i++) {
      newList.push(list[i].name)
    }
    return newList;
  }
  
  function getAverageAge(list) {
    // using the same list as above, get the average age of all the workers'
    total = 0;
    for (let i=0; i < list.length; i++) {
     total += list[i].age
     if (i == list.length - 1) {return total/(i+1)}
    }
  }
  
  function getAllEngineers(list) {
    // using the same list as above, return a list of all people who have the word "Engineer" in their jobTitle
    engies = [];
    for (let i = 0; i<list.length; i++) {
      if (list[i].jobTitle.includes("Engineer")) {
        engies.push(list[i].name)
      }
    }
    return engies;
  }
  
  function sort(list) {
    // sort a list of numbers into ascending order
    // if you need more help, Google how to do bubble sort
    // you can sort, if you want to write it by hand, use bubble sort or insertion sort
    function switchElems(i1, i2, mojaLista){
      let c = mojaLista[i1]
      mojaLista[i1] = mojaLista[i2]
      mojaLista[i2] = c
    }
    for (let i = 0; i<list.length; i++) {
      console.log(`iteracja elementu list[${i}] o wartosci ${list[i]}`)
      let elementOrg = list[i];
      let smallest = elementOrg;
      let smallestIndex = i;
      for (let j = 0; j<list.length; j++){
        let elementPor = list[j];
        if (elementPor < smallest && j>i) {
          console.log(`wykryto zdarzenie (if pier), bo ${elementPor} < ${smallest} elementOrg poz ${i+1} -> ${list[i]}        elementPor na ${j+1} -> ${list[j]}`)
          smallest = elementPor; 
          smallestIndex = j //${}
        }
        if ((j+1 == (list.length)) && smallest<elementOrg) {
          console.log('ZAMIANA !!!')
          console.log('lista przed: ', list)
          switchElems(i,smallestIndex,list)
          console.log('lista po: ', list)
        
        }
      }
    }
  return list
  }