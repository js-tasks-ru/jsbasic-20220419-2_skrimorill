function makeFriendsList(friends) {
  let ul = document.createElement('ul')
  document.body.append(ul)

for (let elem of friends) {
  let li = document.createElement('li')
  ul.prepend(li)
  li.innerHTML = `${elem.firstName} ${elem.lastName}`
  li.listStyleType = ""
  
}
return ul
}

makeFriendsList(friends)