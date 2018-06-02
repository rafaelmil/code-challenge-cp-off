

app.component('users', {

    templateUrl: 'app/components/users/users-list.html',
    controller: UsersController,
    controllerAs: 'vm'
})

function UsersController($http) {

    var vm = this;

    vm.addUsrClicked = false;
    vm.gender = "Male";
    // Initialise the ng-model var for showing the ADD USER INPUT FORM
    vm.addUserShow = false;
    vm.updateUserShow = false;
    vm.currentUserId = undefined;
    vm.radioChange = radioChange;
    vm.toggleAddUser = toggleAddUser;
    vm.toggleUpdateUser = toggleUpdateUser;
    vm.insertData = insertData;
    vm.updateUser = updateUser;
    vm.sendUpdateData = sendUpdateData;
    vm.removeUser = removeUser;
    getUsers();

    // LOAD USERS DATA
    function getUsers() {
      $http.get('http://localhost:3000/users').then(function(response) {
        vm.users = response.data;
      });

    }

    //var k = vm.users.length;
    //alert(k);
    //vm.globalUserID =

    // function for change gender option
    function radioChange(s) {
      vm.gender = s;
    }
    // Function that shows or hides the ADD USER INPUT FORM
    function toggleAddUser(){
      vm.addUsrClicked= !vm.addUsrClicked;
      vm.addUserShow = !vm.addUserShow;
    }

    // Function that shows or hides the UPDATE USER INPUT FORM
    function toggleUpdateUser() {
      vm.updateUserShow = !vm.updateUserShow;
    }



    //CREATE | UPDATE | DELETE FUNCTIONS

    // insertData Function: takes the ADD USER INPUT DATA and creates a new object in the json-server
    function insertData() {

      vm.globalUserID = vm.users[vm.users.length-1].id + 1;

      var dataToIns = {
        id: vm.globalUserID,
        first_name: vm.f_name,
        last_name: vm.l_name,
        email: vm.email,
        gender: vm.gender
      }

      $http.post('http://localhost:3000/users', dataToIns);

      // Empty input forms
      vm.f_name = "";
      vm.l_name = "";
      vm.email = "";
      vm.gender = "";

    }

    function updateUser(userId) {
      vm.toggleUpdateUser();
      vm.currentUserId = userId;

      var url = 'http://localhost:3000/users/' + userId;

      for (var i = 0; i < vm.users.length; i++) {
        if (vm.users[i].id === userId) {
          vm.updf_name = vm.users[i].first_name;
          vm.updl_name = vm.users[i].last_name;
          vm.updemail = vm.users[i].email;
          vm.updgender = vm.users[i].gender
        }
    }

    }

    // UPDATE USER DATA by ID
    function sendUpdateData() {

      var url = 'http://localhost:3000/users/' + vm.currentUserId;

      var dataToUpd = {
        first_name: vm.updf_name,
        last_name: vm.updl_name,
        email: vm.updemail,
        gender: vm.updgender
      }

      $http.put(url, dataToUpd);
    }

    function removeUser(userId) {
      var url = 'http://localhost:3000/users/' + userId;
      $http.delete(url);
    }


}
