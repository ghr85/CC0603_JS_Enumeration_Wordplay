const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase().split('');
  this.phrase = phrase.toUpperCase().split('');
}


PangramFinder.prototype.isEqual = function (ary, duplicates) {

if(ary.length == duplicates.length){
  return true
} else {
  return false
};
};

PangramFinder.prototype.isPangram = function () {

  let clone = this.alphabet.reduce(
    (accumulator,current) => {
      if (this.phrase.includes(current) === true){
      accumulator.push(current);}
      return accumulator;
    },[]
  );
  return this.isEqual(this.alphabet, clone)
};

module.exports = PangramFinder;
