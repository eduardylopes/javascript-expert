const User = require('./src/user');

const user = new User({
  id: 1,
  name: 'Eduardy Lopes de Morais',
  profession: 'Dev',
  age: 28,
});

console.log(typeof user);
