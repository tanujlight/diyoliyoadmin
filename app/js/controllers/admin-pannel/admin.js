(function() {
    'use strict';

    var controllerId = 'admin';

    angular
            .module('app')
            .controller(controllerId, restaurant)
    restaurant.$inject = ['$scope'];
    function restaurant($scope) {  

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
			    $('#restaurants-list').DataTable({
			      'paging'      : true,
			      'lengthChange': true,
			      'searching'   : true,
			      'ordering'    : true,
			      'info'        : true,
			      'autoWidth'   : true
			    });

			    // //Date picker
			    // $('#datepicker').datepicker({
			    //   autoclose: true
			    // });

			    // //Timepicker
			    // $('.timepicker').timepicker({
			    //   showInputs: false
			    // });

			    //iCheck for checkbox and radio inputs
			    $('input[type="checkbox"].square, input[type="radio"].square').iCheck({
			      checkboxClass: 'icheckbox_square-red',
			      radioClass   : 'iradio_square-red'
			    })

			    // delete popup
			    $('#confirm-delete').on('show.bs.modal', function(e) {
		            $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
		            
		            $('.debug-url').html('Delete URL: <strong>' + $(this).find('.btn-ok').attr('href') + '</strong>');
		        });
			})
        })


        // dummy datatable data for ng-repeat remove it when original data come 
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
})();
