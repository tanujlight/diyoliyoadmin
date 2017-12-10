(function() {
	'use strict';

	var controllerId = 'manage';

	angular
	.module('app')
	.controller(controllerId, manage)
	manage.$inject = ['$scope'];
	function manage($scope) {  

    	// function loaded when controller is loading.
    	$(document).ready(function() {
    		$(function () {

		    	// enable tooltip on this page 
		    	$('[data-toggle="tooltip"]').tooltip(); 

		    	$('[data-toggle=confirmation]').confirmation({
		    		rootSelector: '[data-toggle=confirmation]',
				  // other options
				});  


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

    // ============================= start brands controller ================================== //
    app.controller('brands', brands)
    brands.$inject = ['$scope', '$timeout'];
    function brands ($scope, $timeout) {

    	$scope.brand = {
    		name: '',
    		description: ''
    	}

    	$timeout(function() {
    		$('#brandList').DataTable({
    			'paging'      : true,
    			'lengthChange': true,
    			'searching'   : true,
    			'ordering'    : true,
    			'info'        : true,
    			'autoWidth'   : true
    		}, 2000);
    	})


    	// open the brand modal 

    	$scope.addEditBrand = function(id) {
    		$("#addEditBrand").modal();

    		// add brand
    		if(id == 'add') {
    			$scope.brandModalTitle = 'Add Brand';
    			$scope.addUpdateSubmitButton = 'Submit';
    			$scope.brand.name = '';
    			$scope.brand.description = '';
    		}

    		// edit brand
    		else {
    			$scope.brandModalTitle = 'Edit Brand';
    			$scope.addUpdateSubmitButton = 'Update';
    			$scope.brand.name = 'Edit name';
    			$scope.brand.description = 'Edit description';

    		}
    	}
    }

    // ============================= End brands controller ================================== //

    // ============================= start category controller ================================== //
    app.controller('categories', categories)
    categories.$inject = ['$scope', '$timeout'];
    function categories ($scope, $timeout) {

    	$scope.category = {
    		name: '',
    	}

    	$timeout(function() {
    		$('#categoryList').DataTable({
    			'paging'      : true,
    			'lengthChange': true,
    			'searching'   : true,
    			'ordering'    : true,
    			'info'        : true,
    			'autoWidth'   : true
    		}, 2000);
    	})


    	// open the Category modal 

    	$scope.addEditCategory = function(id) {
    		$("#addEditCategory").modal();

    		// add brand
    		if(id == 'add') {
    			$scope.categoryModalTitle = 'Add Category';
    			$scope.addUpdateSubmitButton = 'Submit';
    			$scope.category.name = '';
    		}

    		// edit brand
    		else {
    			$scope.categoryModalTitle = 'Edit Category';
    			$scope.addUpdateSubmitButton = 'Update';
    			$scope.category.name = 'Edit name';
    		}
    	}


    	// ============= Start the subcategory modal ========================= //

    	$scope.subCategory = {
    		category: '',
    		name: ''
    	}

    	$scope.addEditSubCategory = function(id) {
    		$("#addEditSubCategory").modal();

    		// add brand
    		if(id == 'add') {
    			$scope.SubCategoryModalTitle = 'Add Sub Category';
    			$scope.addUpdateSubmitButton = 'Submit';
    			$scope.subCategory.name = '';
    			$scope.subCategory.category = '';
    			$scope.updateSubCategory = false;

    		}

    		// edit brand
    		else {
    			$scope.SubCategoryModalTitle = 'Edit Sub Category';
    			$scope.addUpdateSubmitButton = 'Update';
    			$scope.subCategory.name = 'Edit name';
    			$scope.subCategory.category = '';
    			$scope.updateSubCategory = true;
    		}
    	}

    	// ============= end the subcategory modal ========================= //

    }

    // ============================= End category controller ================================== //


    // ============================= start attribute controller ================================== //
    app.controller('attributes', attributes)
    attributes.$inject = ['$scope', '$timeout'];
    function attributes ($scope, $timeout) {

    	$scope.attribute = {
    		name: '',
    		values: ''
    	}

    	$timeout(function() {
    		$('#attributeList').DataTable({
    			'paging'      : true,
    			'lengthChange': true,
    			'searching'   : true,
    			'ordering'    : true,
    			'info'        : true,
    			'autoWidth'   : true
    		}, 2000);
    	})


    	// open the brand modal 

    	$scope.addEditAttribute = function(id) {
    		$("#addEditAttribute").modal();

    		// add brand
    		if(id == 'add') {
    			$scope.attributeModalTitle = 'Add Attribute';
    			$scope.addUpdateSubmitButton = 'Submit';
    			$scope.attribute.name = '';
    			$scope.attribute.values = '';
    		}

    		// edit brand
    		else {
    			$scope.attributeModalTitle = 'Edit Attribute';
    			$scope.addUpdateSubmitButton = 'Update';
    			$scope.attribute.name = 'Edit name';
    			$scope.attribute.values = 'edit values';

    		}
    	}
    }

    // ============================= End attribute controller ================================== //

})();
