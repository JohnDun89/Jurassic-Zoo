const Pen = function(){
  this.penCount = [];
}

Pen.prototype.addDino = function(dino){
  this.penCount.push(dino);
}

Pen.prototype.removeType = function(bye){
  for ( var dinosaur of this.penCount){
    if (dinosaur.type === bye){
      var dinosaur = this.penCount.indexOf(dinosaur);
      this.penCount.pop();

    }
  }
}

module.exports = Pen;
