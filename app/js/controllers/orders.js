(function() {
	'use strict';

	var controllerId = 'ordersList';

	angular
	.module('app')
	.controller(controllerId, ordersList)
	ordersList.$inject = ['$scope', '$timeout'];
	function ordersList($scope, $timeout) {  

    	// function loaded when controller is loading.
    	$(document).ready(function() {
    		$(function () {

		    	// enable tooltip on this page 
		    	$('[data-toggle="tooltip"]').tooltip(); 

		    	$('[data-toggle=confirmation]').confirmation({
		    		rootSelector: '[data-toggle=confirmation]',
				  // other options
				});  

                $timeout(function() {
                    $('#ordersList').DataTable({
                        'paging'      : true,
                        'lengthChange': true,
                        'searching'   : true,
                        'ordering'    : true,
                        'info'        : true,
                        'autoWidth'   : true
                    }, 2000);
                })


			    // delete popup
			    $('#confirm-delete').on('show.bs.modal', function(e) {
			    	$(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));

			    	$('.debug-url').html('Delete URL: <strong>' + $(this).find('.btn-ok').attr('href') + '</strong>');
			    });
			})
    	})


    	$scope.dummyData = [1,2,3,4,5];



  //       // dynamic tables of table setup area 
  //       $scope.tableFormArray = [{id: 'choice1'}, {id: 'choice2'}];
  
		// $scope.addNewChoice = function() {
		//     var newItemNo = $scope.choices.length+1;
		//     $scope.choices.push({'id':'choice'+newItemNo});
		// };

		// $scope.removeChoice = function() {
		//     var lastItem = $scope.choices.length-1;
		//     $scope.choices.splice(lastItem);
		// };
	}

    // ======================== start add product controller ======================== //
    app.controller('addEditOrder', addEditOrder)
    addEditOrder.$inject = ['$scope', '$timeout', '$stateParams', '$state'];
    function addEditOrder ($scope, $timeout, $stateParams, $state) {

    	$scope.orderId = $stateParams.orderId;

    	// $scope.customer = {
    	// 	firstName: '',
    	// 	lastName: '',
    	// 	email: '',
    	// 	phone: '',
    	// 	address: '',
    	// 	city: '',
    	// 	state: '',
    	// 	country: '',
    	// 	postcode: ''
    	// }
		
		if($scope.orderId == 'add') {
	    	$scope.addEditPageTitle = 'Add Order';
			$scope.addEditSubmitButton = 'Save';

		} else if($.isNumeric($scope.orderId)) {
			$scope.addEditPageTitle = 'Edit Order';
			$scope.addEditSubmitButton = 'Update';

		} else {
			$state.go('orders');
		}
	}

    // ========================= end add product controller ======================== //

})();
