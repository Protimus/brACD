// Criação de uma aplicação angular
var brAChart = angular.module('brAChart', ['chart.js']);

brAChart.controller("PieCtrl", function ($scope) {
  $scope.labels = ["Concluídas", "Em tradução", "Pendentes"];
  $scope.data = [300, 500, 100];
});

// Atribuindo cores padrões ao CharJS
(function (ChartJsProvider) {
  ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
}); 