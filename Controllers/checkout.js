var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.first = "asd";
	$scope.last = "";
	$scope.email = "";
	$scope.phno = "";
	$scope.postal = "";
	$scope.address1 = "";
	$scope.address2 = ""; 
	$scope.formData = {};
			  
// Get the elements by their IDs
const subtotalElement = document.getElementById('subtotalspan');
const totalElement = document.getElementById('total');

// Set the values in the formData object
$scope.formData.subtotal = subtotalElement.textContent;
$scope.formData.shipping = '10.00';
$scope.formData.total = totalElement.textContent;
	$scope.submitForm = function(isValid) {
        if (isValid) {
             alert('Form submitted successfully!');
                        }
			  };
			});
