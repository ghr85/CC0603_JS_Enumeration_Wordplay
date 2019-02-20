const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
return this.words.map(function(el){
  return el.toUpperCase
}))
}

module.exports = UpperCaser;
