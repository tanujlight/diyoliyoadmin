angular.module('app')
	.directive('isActiveNav', ['$location', function($location) {
		return {
			restrict: 'A',

			link: function(scope, element) {
				scope.location = $location;
				scope.$watch('location.path()', function(currentPath) {
					if('#!' + currentPath === element[0].attributes['href'].nodeValue) {
						element.parent().addClass('active');
					}

					else {
						element.parent().removeClass('active');
					}
				});
			}
		};
	}])

app.directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function(){
             scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
                console.log(modelSetter(scope, element[0].files[0]));
             });
          });
       }
    };
}]);
