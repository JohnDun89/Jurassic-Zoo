const Dinosaur = require('../dinosaur.js')
const assert = require('assert')

describe('disnosaur', function(){

  it('should be able to return its type', function(){
    Trex = new Dinosaur('Tyranosaurus',1);
    assert.strictEqual(Trex.type, 'Tyranosaurus');
  });

  it('should be able to return its off spring per year', function(){
    Trex = new Dinosaur('Tyranosaurus',1);
    assert.strictEqual(Trex.reproduction, 1);
  });

});
