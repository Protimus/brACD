// Criação de uma aplicação angular
var brApp = angular.module('brApp', []);

// Criação de um controlador para o angular (controller)
brApp.controller('formController', function($scope) {
		
	// Função de envio (submit) do formulário de login após a validação
	$scope.submitLogin = function() {

		// Verificação para validação do formulário
		if ($scope.loginForm.$valid) {
			alert('Login realizado com sucesso!');
		} else {
			alert('Erro ao validar o login!');
		}
	};
	// Função de envio (submit) do formulário de registro após a validação	
	$scope.submitReg = function() {

		// Verificação para validação do formulário
		if ($scope.regForm.$valid) {
			alert('Cadastro realizado com sucesso!');
		} else {
			alert('Erro ao validar informações do cadastro!');
		}
	};

	$scope.reset = function() {
		$scope.user = angular.copy($scope.master);
	};

	$scope.reset();

});