// Criação de uma aplicação angular
var brApp = angular.module('brApp', []);

// Criação de um controlador para o angular (controller)
brApp.controller('formController', function($scope) {
		
	// Função de envio (submit) do formulário após a validação ocorre	
	$scope.submitLogin = function() {

		// Verificação para validação do formulário
		if ($scope.loginForm.$valid) {
			alert('Login realizado com sucesso!');
		} else {
			alert('Erro ao validar o login!');
		}
	};
});