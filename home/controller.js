var homeApp = angular.module('homeApp',[]);

homeApp.controller('homeCtrl', ['$scope', function ($scope) {
	
	$scope.pessoas = [];

	$scope.addNome = function(){		
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