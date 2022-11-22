var person = {
  firstName: 'Anakin',
  lastName: 'Skywalker',
  hobby: 'podracing'
};

console.log(person);

var fullName = `The person's name is ${person.firstName} ${person.lastName}.`;
console.log(fullName);

person.job = 'Not Jedi Master';
console.log(`The person's current job is ${person.job}.`);

person.previousJob = 'padawan';
console.log(`The person's previous job was a ${person.previousJob}.`);

console.log('The complete person\'s profile is:', person);
