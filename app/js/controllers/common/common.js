(function() {
    'use strict';

    angular
            .module('app')
            .controller('login', login)  // login page controller
    login.$inject = ['$scope', '$state'];
    function login($scope, $state) {    

        $scope.loginData = {
            email: '',
            password: ''
        }

    	$scope.login = function() {
            if ($scope.loginData.email == 'superadmin@gmail.com' && $scope.loginData.password == '123') {
                localStorage.setItem('loginStatus', '1');
                $state.go('dashboard');
            }

            // else if ($scope.loginData.email == 'admin@gmail.com' && $scope.loginData.password == '123') {
            //     localStorage.setItem('loginStatus', '2');
            //     $state.go('vendor');
            // }

            else {
                localStorage.setItem('loginStatus', '0');

                $scope.loginData = {
                    email: '',
                    password: ''
                }
            }
    	}   
    }


    //  ================== navigation controller start ======================== //

    app.controller('navigation', navigation)
    navigation.$inject = ['$scope', '$state'];
    function navigation($scope) {  

        // get the login status (who is logged In )
        $scope.loginStatus = localStorage.getItem('loginStatus');

        // check manage field is check or not 

        // var activeContainer = $('.sub-menu-container .treeview-menu li').hasClass('active');

        // console.log(activeContainer);
        // // treemenu subitems
        // $('.sub-menu-container .manage').click(function() {
        //     if($(this).parents('.sub-menu-container').hasClass('active')) {
        //         $(this).parents('.sub-menu-container').removeClass('active');
        //         $(this).find('i.fa-angle-left').removeClass('fa-angle-down');
        //     }
        //     else {
        //         $('.sub-menu-container').removeClass('active');
        //         $('.sub-menu-container a i.fa-angle-left').removeClass('fa-angle-down');
        //         $(this).parents('.sub-menu-container').addClass('active');
        //         $(this).find('i.fa-angle-left').addClass('fa-angle-down');
        //     }            
        // })
    }

    //  ================== navigation controller end ========================== //




})();
