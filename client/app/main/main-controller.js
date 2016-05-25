angular.module('app')
  .controller('MainCtrl', ['$scope', function ($scope) {
    // here we define the items to be repeated in the template
    $scope.list1 = [
      {label: 'link not solved'},
      {label: 'two 2'},
      {label: 'three'}
    ];

    $scope.list2 = [
      {label: 'un'},
      {label: 'deux'},
      {label: 'trois'},
	  {label: 'tests'}
    ];
  }]);
