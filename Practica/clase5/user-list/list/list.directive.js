(function() {
    'use strict';

    angular
        .module('userListControllerDemo')
        .directive('userList', userListDirective);


    function userListDirective() {
        return {
            restrict: 'E',
            templateUrl: '/list/list.html',
            controller: 'UserListController',
            controllerAs: 'vm',
            bindToController: true,
            transclude: true,
            scope: {
                list: "="
                }
        };
    }
})();
