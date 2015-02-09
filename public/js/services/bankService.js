var app = angular.module('app');
app.service('bankService', ['$http', function ($http) {
  
  this.getRate = function () {
    return $http.get('/interest_rate');
  };


}]);