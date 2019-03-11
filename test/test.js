let Tracker = require('../storage.js');
var assert = require('assert');

describe('Log', function() {
  describe('#init', function() {
    it('tracker starts empty on initialization', function() {
      var tracker = new Tracker();
      assert.equal(tracker.getStats('123-abc-456'), false);
    });
  });

  describe('#getting-setting', function(){
    it('tracker stores data in memory and returns values put in', function(){
      var tracker = new Tracker();
      tracker.setStats('123-abc-456', {'CPU':27.0, 'memory_free':30000})
      t1 = tracker.getStats('123-abc-456')
      assert.equal(t1['CPU'], 27.0)
      assert.equal(t1['memory_free'], 30000)
    });
  });

  describe('#validation', function(){
    it('handles null values appropriately', function(){
      var tracker = new Tracker();
      tracker.setStats('123-abc-456', {'CPU':null, 'memory_free':30000})
      t1 = tracker.getStats('123-abc-456')
      assert.equal(t1['CPU'], null)
    });

    it('handles bool values appropriately', function(){
      var tracker = new Tracker();
      tracker.setStats('123-abc-456', {'CPU':false, 'memory_free':30000})
      t1 = tracker.getStats('123-abc-456')
      assert.equal(t1['CPU'], 0)
    });
  });
});
