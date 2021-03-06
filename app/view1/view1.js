'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', ['$scope', '$http', function($scope,$http){
        $http.get('view1/json/data.json')
        .success(function(data) {$scope.Results = data.Results; })
        .error(function(data) { console.log('error')} );
}]);

