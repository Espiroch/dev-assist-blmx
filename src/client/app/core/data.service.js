'use strict';

(function () {
    angular.module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$log'];

    function dataservice($http, $log) {
        var service = {
            createData: createData
        };

        return service;

        /* Implementations */

        function createData(data) {
            return $http.post('/api/account', data)
                .then(function (data, status, headers, config) {
                    return data.data;
                })
                .catch(function (msg) {
                    $log.error(msg);
                });
        }
    }
})();