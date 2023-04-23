function filterObjectsByPropertyValue(arr, key, value) {
  return arr.filter(obj => obj[key] === value);
}
const users = [
  { name: 'Паша', isActive: true },
  { name: 'Маша', isActive: false },
  { name: 'Лена', isActive: true },
  { name: 'Макс', isActive: false },
  { name: 'Петро', isActive: true },
  { name: 'Валера', isActive: false }
];

const activeUsers = filterObjectsByPropertyValue(users, 'isActive', true);

console.log(activeUsers);

