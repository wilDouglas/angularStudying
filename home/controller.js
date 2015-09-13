var homeApp = angular.module('homeApp', []);

homeApp.controller('homeCtrl', ['$scope', 'PessoaList','Pessoa', function ($scope, PessoaList, Pessoa) {

    $scope.pessoas = [];

    PessoaList.get({}, function success(response) {
        $scope.pessoas = response;
    }, function error(errorResponse) {
        console.log(JSON.stringify(errorResponse));
    });

    $scope.addNome = function () {              
        var pessoa = new Pessoa();
        pessoa.id = ($scope.pessoas.length + 1);
        pessoa.nome =  $scope.nome;
        pessoa.idade = $scope.idade;
        pessoa.cpf = $scope.cpf; 
        pessoa.$save();
       
        $scope.pessoas.push(pessoa);
        $scope.nome = "";
        $scope.idade = "";
        $scope.cpf = "";
    };              

}]);