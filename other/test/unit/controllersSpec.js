'use strict';

/* jasmine specs for controllers go here */
describe('PillCat controllers', function() {
 
  describe('PillListCtrl', function(){
 
    it('should create "pills" model with 3 pills', function() {
      var scope = {},
          ctrl = new PillListCtrl(scope);
 
      expect(scope.pills.length).toBe(3);
    });
  });
});;
