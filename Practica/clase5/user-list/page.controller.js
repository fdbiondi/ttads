(function() {
    'use strict';

    // Create module and controller
    angular
        .module('userListControllerDemo', [])
        .controller('pageController', pageController);


    pageController.$inject = [ '$timeout'
    ];

    function pageController($timeout) {
        // Controller as viewModel
        var vm = this;
        // Initialization
        vm.list = [];
        vm.item = {};

        // Controller methods
        vm.add = add;
        vm.edit = edit;
        vm.remove = remove;
        vm.removeAll = removeAll;

        /* Adds an item to the todo list */
        function add(item) {
            vm.list.push(item);
            vm.item.age = getAge(item.birth_date);
            vm.item = {};
        }

        function edit(item){
          vm.item.password = prompt('Nueva password');
        }

        /* Removes the item in the list with index: $index*/
        function remove(index) {
            vm.list.splice(index,1);
        }

        //Removes all elements selected
        function removeAll() {
            vm.list = vm.list.filter(function(element){
                return !element.selected;
            });
        }

        function getAge(birth_date) {
            var age = "";
            if (birth_date != undefined){
                var age = Math.trunc((getActualDateTime() - birth_date.getTime()) / getYearsTime());
            }
            return age;
        }

        function getYearsTime() {
            var minutes = 1000 * 60;
            var hours = minutes * 60;
            var days = hours * 24;
            return days * 365;
        }

        function getActualDateTime() {
            var actual_date = new Date();

            return actual_date.getTime();
        }

    }
})();
