<<<<<<< HEAD
function showSalary(users, age) {
  return  users
    .filter(user => (user.age <= age))
    .map(user => (`${user.name}, ${user.balance}`))
    .join('\n')
=======
function showSalary(data, age) {
  return data
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join('\n');
>>>>>>> 989221c44d0ab80bc22c040828a3e1658b255a46
}


