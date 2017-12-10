(function() {
	'use strict';

	var controllerId = 'customersList';

	angular
	.module('app')
	.controller(controllerId, customersList)
	customersList.$inject = ['$scope', '$timeout'];
	function customersList($scope, $timeout) {  

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
                    $('#customersList').DataTable({
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

	}

    // ======================== start add product controller ======================== //
    app.controller('addEditCustomer', addEditCustomer)
    addEditCustomer.$inject = ['$scope', '$timeout', '$stateParams', '$state'];
    function addEditCustomer ($scope, $timeout, $stateParams, $state) {

    	$scope.customerId = $stateParams.customerId;

    	$scope.customer = {
    		firstName: '',
    		lastName: '',
    		email: '',
    		phone: '',
    		address: '',
    		city: '',
    		state: '',
    		country: '',
    		postcode: ''
    	}
		
		if($scope.customerId == 'add') {
	    	$scope.addEditPageTitle = 'Add Customer';
			$scope.addEditSubmitButton = 'Save';

		} else if($.isNumeric($scope.customerId)) {
			$scope.addEditPageTitle = 'Edit Customer';
			$scope.addEditSubmitButton = 'Update';

			$scope.customer = {
				firstName: 'Tanuj',
	    		lastName: 'Gupta',
	    		email: 'Guptatanuj19@gmail.com',
	    		phone: '8929540002',
	    		address: '733, Kranti Chowk',
	    		city: 'Hisar',
	    		state: 'Haryana',
	    		country: 'India',
	    		postcode: '125052'
			}

		} else {
			$state.go('customers');
		}
	}

    // ========================= end add product controller ======================== //

})();
