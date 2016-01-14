var myApp = angular.module('myApp', []);

myApp.controller('AppController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    $scope.client;

    $http.get('/clients').success(function (res) {
        $scope.clients = res;
    });

    $scope.addClient = function (client) {
        console.log('Adding new client...');
        $http.post('/clients', $scope.client).success(function (res) {
            console.log('Client added');
            window.location.href='/';
        });
    }

    $scope.editClient = function (id) {
        $('#addBtn').remove();
        $http.get('/clients/'+id).success(function (res) {
            $scope.client = res;
        })
    }

    $scope.updateClient = function (client) {
        $http.put('/clients/'+ $scope.client._id, $scope.client).success(function (res) {
            console.log('Client updated...');
            window.location.href='/';
        });
    }

    $scope.deleteClient = function (id) {
        $http.delete('/clients/'+id).success(function (res) {
            console.log('Client deleted');
            window.location.href='/';
        });
    }

}]);
