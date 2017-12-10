(function() {
    'use strict';

    var controllerId = 'booking';

    angular
            .module('app')
            .controller(controllerId, booking)
    booking.$inject = ['$scope'];
    function booking($scope) {  

    	// function loaded when controller is loading.
        $(document).ready(function() {
	      	$(function () {

	      		// enable tooltip on this page 
			    $('[data-toggle="tooltip"]').tooltip(); 

			    $('[data-toggle=confirmation]').confirmation({
				  rootSelector: '[data-toggle=confirmation]',
				  // other options
				});

		        // restaurants list datatables 
			    $('#bookings-list').DataTable({
			      'paging'      : true,
			      'lengthChange': true,
			      'searching'   : true,
			      'ordering'    : true,
			      'info'        : true,
			      'autoWidth'   : true
			    });

			    //Date picker
			    $('#datetimepicker').datetimepicker({
	                sideBySide: true
			    });

			    //Date picker
			    $('#bookingTiming').datetimepicker({
	                sideBySide: true
			    });

			    // date of birth datepicker
			    $('#dateOfBirth').datepicker({
			    	autoclose: true
			    })

			    //iCheck for checkbox and radio inputs
			    $('input[type="checkbox"].square, input[type="radio"].square').iCheck({
			      checkboxClass: 'icheckbox_square-red',
			      radioClass   : 'iradio_square-red'
			    });
			})
        })


        // dummy datatable data for ng-repeat remove it when original data come 
        $scope.dummyData = [1,2,3,4,5];
    }
})();
