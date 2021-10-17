const schools = ['Yorktown', 'Washington $ Liberty', 'Wakefield'];

const highSchools = schools.map(school => `${school} High School`);

console.log(highSchools);

const highSchoolsObject = schools.map(school => ({name: school}));

console.log(highSchoolsObject);

const schoolsArrayObjects = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington & Liberty" },
    { name: "Wakefield" }
  ];

console.log(schoolsArrayObjects);

const editName = (oldName, name, arr) =>
    arr.map(item => (item.name === oldName ? { ...item, name } : item));


const updatedSchoolsArrayObjecys = editName("Stratford", "HB Woodlawn", schoolsArrayObjects);
console.log(updatedSchoolsArrayObjecys);
console.log(schoolsArrayObjects);


