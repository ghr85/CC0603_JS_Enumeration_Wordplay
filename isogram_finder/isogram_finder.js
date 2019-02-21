const IsogramFinder = function (word) {
this.word = word.toUpperCase().split('');
}

IsogramFinder.prototype.isEmpty = function (ary, duplicates) {
if(ary.length == duplicates.length){
  return true
} else {
  return false
};
};

IsogramFinder.prototype.isIsogram = function () {
   let duplicates = this.word.reduce(
    (accumulator,current) => {
      if (accumulator.includes(current) === false){
      accumulator.push(current);}
      return accumulator;
    },[]
  );
  return this.isEmpty(this.word,duplicates)
};



module.exports = IsogramFinder;
