// Criação de uma aplicação angular
var brAChart = angular.module('brAChart', ['chart.js']);


// Atribuindo cores padrões ao CharJS
(function (ChartJsProvider) {
  ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
}); 

// Controlador em pizza - Nível de traduções
brAChart.controller("TransCtrl", function ($scope) {
  $scope.labels = ["Concluídas", "Em tradução", "Pendentes"];
  $scope.data = [300, 500, 100];
});

// Controlador em barras - Nível de correções
brAChart.controller("BugsCtrl", function ($scope) {
  $scope.labels = ['Outubro', 'Novembro', 'Dezembro'];
  $scope.series = ['Corrigidos', 'Pendentes'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
});

// Controlador em barra horizontal - Nível de metas
brAChart.controller("MetasCtrl", function ($scope) {
    $scope.labels = ['brACP', 'brAEditor', 'brAPatcher', 'brACD'];
    $scope.series = ['Concluído'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
});