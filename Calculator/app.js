(function () {
    angular.module('Calculator', []).controller('Calis', Calis, function ($scope) {
    });
    Calis.inject = ['$scope'];
    function Calis($scope) {
        $scope.ValOne = 0;
        $scope.ValTwo = 0;
        $scope.Result = "";
        $scope.Add = function () {
            $scope.Result = Number($scope.ValOne) + Number($scope.ValTwo);
        };
        $scope.Sub = function () {
            $scope.Result = Number($scope.ValOne) - Number($scope.ValTwo);
        }
        $scope.Reset = function () {
            $scope.ValOne = 0;
            $scope.ValTwo = 0;
            $scope.Result = "";
        }
    }
}
)();