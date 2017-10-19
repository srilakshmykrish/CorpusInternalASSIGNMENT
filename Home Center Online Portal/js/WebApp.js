var app = angular.module('homeCenter', []);

document.getElementById("header").onmouseover = function() 
{
    this.style.backgroundColor = "light-green";
}

function GetSelectedItem(el) {
	var output = document.getElementById('header');
    output.innerHTML = el.id;
}
app.controller('ctrlOne', function($scope, timeService) {
  $scope.myService = timeService
});

app.controller('ctrlTwo', function($scope, timeService) {
  $scope.myService = timeService
})