function initCarousel() {
  let right = document.querySelector('.carousel__arrow_right')
  let left = document.querySelector('.carousel__arrow_left')
  let slideInner = document.querySelector('.carousel__inner')
  let slides = document.querySelectorAll('.carousel__slide')
  let slideWidth = slideInner.offsetWidth
  let count = slides.length
  let index = 1


  left.addEventListener('click', function() {
    index--
    if(index >= count) {
      index = count
    }
    slideMove()
  })


right.addEventListener('click', function() {
  index++
  if(index <= 1) {
    index = 1
  }
  slideMove()
})

slideMove = () => {
  slideInner.style.transform = 
  `translateX(-${slideWidth * (index - 1)}px)`

  buttonHidden()
}

 buttonHidden = () => {
  if (index === 1) {
    left.style.display = 'none'
  }
  else {
    left.style.display = ''
  }

  if (index === count) {
    right.style.display = 'none'
  }
  else {
    right.style.display = ''
  }
}
slideMove()
}

