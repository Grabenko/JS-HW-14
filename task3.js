function getNamesOfAdults(arr) {
    const filteredArr = arr.filter((person) => person.age > 18);
    const namesArr = filteredArr.map((person) => person.name);
    return namesArr;
  }
  const people = [
    { name: "Паша", age: 25 },
    { name: "Маша", age: 17 },
    { name: "Лена", age: 32 },
    { name: "Петро", age: 21 }
  ];
  const adultNames = getNamesOfAdults(people);
  console.log(adultNames); 
  