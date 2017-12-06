const Pen = require('../pen.js')
const Dinosaur = require('../dinosaur.js')
const assert = require('assert');


describe('pen', function(){

  it('should start at zero', function(){
    weeOnes = new Pen();
    assert.strictEqual(weeOnes.penCount.length, 0);
  });

  it('should be able to recive a dinosaur', function(){
    weeOnes = new Pen();
    tinyosaurus = new Dinosaur();
    weeOnes.addDino(tinyosaurus);
    assert.strictEqual(weeOnes.penCount.length, 1);
  });

  it('Should be able to remove dinosaurs that are the same type', function(){
    angryOnes = new Pen();
    velociraptor = new Dinosaur('velociraptor',3);
    kauiju = new Dinosaur('Kauiju',1);
    angryOnes.addDino(velociraptor);
    angryOnes.addDino(velociraptor);
    angryOnes.addDino(kauiju);
    angryOnes.removeType('velociraptor');
    assert.strictEqual(angryOnes.penCount.length,1);
  });

  it('should be able to count all dinosaurs with an off spring count of more than two', function(){
    angryOnes = new Pen();
    velociraptor = new Dinosaur('velociraptor',3);
    kauiju = new Dinosaur('Kauiju',1);
    angryOnes.addDino(velociraptor);
    angryOnes.addDino(velociraptor);
    angryOnes.addDino(kauiju);
    assert.strictEqual(angryOnes.getOffSpringProducers,2);
  });
});
