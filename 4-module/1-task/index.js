function makeFriendsList(friends) {
  let ul = document.createElement('ul')
  

for (let elem of friends) {
  let li = document.createElement('li')
  ul.append(li)
  li.innerHTML = `${elem.firstName} ${elem.lastName}`
  
}
return ul
}

makeFriendsList(friends)