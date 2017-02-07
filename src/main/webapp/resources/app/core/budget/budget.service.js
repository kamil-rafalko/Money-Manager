angular.
module('core.budget').
factory('Budget', ['$resource',
    function($resource) {
        return $resource('budget/:budgetId/details', {}, {
            query: {
                method: 'GET',
                params: {budgetId: 'all'},
                isArray: true
            }
        });
    }
]);