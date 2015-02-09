var app = angular.module('app');
app.controller('MainCtrl', ['$scope', 'bankService', function ($scope, bankService) {

  var getRate = function () {
    bankService.getRate().then(function(data){
     $scope.interest_rate =  data.data.rate;
    })
  }

  getRate();


  $scope.calculatePayment = function () {
    var interest = ($scope.principal * ($scope.interest_rate * .01)) / 48;
    return $scope.monthly_payment = (($scope.principal / 48) + interest).toFixed(2);
  }
  
}]);


