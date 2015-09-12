var homeApp = angular.module('homeApp', []);

homeApp.controller('homeCtrl', ['$scope', 'PessoaList', function ($scope, PessoaList) {

    $scope.pessoas = [];

    PessoaList.get({}, function success(response) {
        $scope.pessoas = response;
    }, function error(errorResponse) {
        console.log(JSON.stringify(errorResponse));
    });

    $scope.addNome = function () {
        $scope.pessoas.push({
            'id': ($scope.pessoas.length + 1),
            'nome': $scope.nome,
            'idade': $scope.idade,
            'cpf': $scope.cpf
        });
        $scope.nome = "";
        $scope.idade = "";
        $scope.cpf = "";

    };

}]);