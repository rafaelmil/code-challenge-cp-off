describe('users', function() {

  // Load the module that contains the `users` component before each test
  beforeEach(angular.module('MyApp'));

  // Test the controller
  describe('UsersController', function() {
    var ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('users');
    }));

    it('should create a `users` model with 83 users', function() {
      expect(ctrl.users.length).toBe(83);
    });

    it('should set a default value for the `addUsrClicked` model', function() {

      expect(ctrl.addUsrClicked).toBe(false);
    });

  });

});
