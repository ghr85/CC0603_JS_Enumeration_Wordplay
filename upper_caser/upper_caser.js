const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function(){
return this.words.map(
  el => el.toUpperCase()
)
};


module.exports = UpperCaser;
