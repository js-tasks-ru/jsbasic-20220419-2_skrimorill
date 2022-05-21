function initCarousel() {
  let rightArrow = document.querySelector('.carousel__arrow_right')
  let leftArrow = document.querySelector('.carousel__arrow_left')
  let slideInner = document.querySelector('.carousel__inner')
  let slides = document.querySelectorAll('.carousel__slide')
  let slideWidth = slideInner.offsetWidth
  let count = slides.length
  let index = 1


  leftArrow.addEventListener('click', function() {
    index--
    if(index >= count) {
      index = count
    }
    slideMove()
  })


rightArrow.addEventListener('click', function() {
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
    leftArrow.style.display = 'none'
  }
  else {
    leftArrow.style.display = ''
  }

  if (index === count) {
    rightArrow.style.display = 'none'
  }
  else {
    rightArrow.style.display = ''
  }
}
slideMove()
}

