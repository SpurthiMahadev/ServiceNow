/* output:
const arr = [{
  victim: 'React', count: 2
}, {
  victim: 'Angular', count: 1
},
{
  victim: 'Php', count: 2
},
{
  victim: 'Vue', count: 1
}
] */

const arr = [{
  tech: 'React', vulnerability: true
}, {
  tech: 'Angular', vulnerability: true
},
{
  tech: 'React', vulnerability: false
},
{
  tech: 'Php', vulnerability: false
},
{
  tech: 'Vue', vulnerability: true
},
{
  tech: 'Php', vulnerability: false
}
]


 const result = Object.values(arr.reduce((acc, {tech}) => {

acc[tech] = acc[tech] || {victim: tech, count:  0}

acc[tech].count++

return acc

}, {}))

console.log(result) 


// Method 2:

// const arr = [
//   { tech: 'React', vulnerability: true },
//   { tech: 'Angular', vulnerability: true },
//   { tech: 'React', vulnerability: false },
//   { tech: 'Php', vulnerability: false },
//   { tech: 'Vue', vulnerability: true },
//   { tech: 'Php', vulnerability: false }
// ];

// const counts = {};
// for (let i = 0; i < arr.length; i++) {
//   const tech = arr[i].tech;
//   if (!counts[tech]) {
//     counts[tech] = { victim: tech, count: 0 };
//   }
//   counts[tech].count++;
// }

// const result = Object.values(counts);
// console.log(result);
