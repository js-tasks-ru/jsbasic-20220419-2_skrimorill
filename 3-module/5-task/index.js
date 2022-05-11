function getMinMax(str) {
let arr =  str.split(' ').filter(elem => !isNaN(elem))
let result = {
  min: Math.min(...arr),
  max: Math.max(...arr),
}
return result
}
