const schools = ['Yorktown', 'Washington $ Liberty', 'Wakefield'];
const wSchools = schools.filter(school => school[0] === 'W');

console.log(wSchools);

const cutSchool = (cut, list) => list.filter(school => school !== cut);
console.log(cutSchool('Washington $ Liberty', schools).join(', '));
console.log(schools.join('\n'));