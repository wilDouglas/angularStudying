var homeApp = angular.module('homeApp', []);

homeApp.controller('homeCtrl', ['$scope', 'PessoaList','Pessoa', function ($scope, PessoaList, Pessoa) {

    $scope.pessoas = [];
    

    PessoaList.get({}, function success(response) {
        $scope.pessoas = response;        
    }, function error(errorResponse) {
        console.log(JSON.stringify(errorResponse));
    });    

    $scope.addNome = function () {              
        var totalDePessoas = $scope.pessoas.length;
        totalDePessoas = totalDePessoas + 2;
        
        var pessoa = new Pessoa(); 
        pessoa.id = totalDePessoas;              
        pessoa.nome =  $scope.nome;
        pessoa.idade = $scope.idade;
        pessoa.cpf = $scope.cpf;               
        $scope.pessoas.push(pessoa);       
        $scope.nome = "";
        $scope.idade = "";
        $scope.cpf = "";
        
        pessoa.$save();
    };              

}]);