// Criação de uma aplicação angular
var brAChart = angular.module('brAChart', ['chart.js']);

// Atribuindo cores padrões ao CharJS
brAChart.config(['ChartJsProvider', function (ChartJsProvider) {
Chart.defaults.global.colors = [
  {
    //backgroundColor: 'rgba(78, 180, 189, 1)',
    backgroundColor: 'rgba(108, 154, 81, 1)',
    pointBackgroundColor: 'rgba(108, 154, 81, 1)',
    pointHoverBackgroundColor: 'rgba(151,187,205,1)',
    borderColor: 'rgba(0,0,0,0)',
    pointBorderColor: '#fff',
    pointHoverBorderColor: 'rgba(151,187,205,1)'
  }, {
    backgroundColor: 'rgba(229, 229, 229, 1)',
    pointBackgroundColor: 'rgba(229, 229, 229, 1)',
    pointHoverBackgroundColor: 'rgba(151,187,205,1)',
    borderColor: 'rgba(0,0,0,0)',
    pointBorderColor: '#fff',
    pointHoverBorderColor: 'rgba(151,187,205,1)'}];
}]);

//var colors = angular.copy(scope.chartColors || ChartJs.getOptions(type).chartColors || Chart.defaults.global.colors);


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
      [80,10,40,60]
    ];
});