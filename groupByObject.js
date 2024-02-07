const array = [
  { name: 'group1', value: 1 },
  { name: 'group2', value: 2 },
  { name: 'group1', value: 3 },
  { name: 'group2', value: 4 },
  { name: 'group3', value: 5 }
];

//Method 1:
const groups = Object.groupBy(array, obj => obj.name);
console.log(groups)

//Method 2: 

  const groups = array.reduce((acc, obj) => {
  const key = obj.name;
  const curGroup = acc[key] ? acc[key] : [];
  return { ...acc, [key]: [...curGroup, obj] };
}, {});

console.log(groups); 
