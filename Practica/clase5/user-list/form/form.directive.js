(function() {
    'use strict';

    angular
        .module('userListControllerDemo')
        .directive('userForm', userFormDirective);


    function userFormDirective() {
        return {
            restrict: 'E',
            templateUrl: '/form/form.html',
            controller: 'UserListController',
            controllerAs: 'vm',
            bindToController: true,
            transclude: true,
            scope: {
                item: "="
                }
        };
    }
})();
