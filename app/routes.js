(function() {
    'use strict';
    var app = angular.module('app');

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', configureState]);

    function configureState($stateProvider, $urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $stateProvider

        // =================== common templates routes  ===================== //

        .state("login", {
            url: '/login',
            views: {
                "content@": {
                    templateUrl: 'app/templates/common/login.html',
                    controller: 'login'
                },
            }
        })

        .state("forgot-password", {
            url: '/forgot-password',
            views: {
                "content@": {
                    templateUrl: 'app/templates/common/forgot-password.html',
                    controller: 'login'
                },
            }
        })

        .state("update-password", {
            url: '/update-password',
            views: {
                "content@": {
                    templateUrl: 'app/templates/common/update-password.html',
                    controller: 'login'
                },
            }
        })

        .state("change-password", {
            url: '/change-password',
            views: {
                "content@": {
                    templateUrl: 'app/templates/common/change-password.html',
                },

                "header@": {
                    templateUrl: 'app/templates/common/header.html'
                },

                "sidebar@": {
                    templateUrl: 'app/templates/common/sidebar.html'
                }
            }
        })

        // =================== end common templates routes  ================== //


        // =================== admin pannel routes  ========================= //

        // module 1
        .state("dashboard", {
            url: '/dashboard',
            views: {
                "content@": {
                    templateUrl: 'app/templates/dashboard.html',
                },

                "header@": {
                    templateUrl: 'app/templates/common/header.html'
                },

                "sidebar@": {
                    templateUrl: 'app/templates/common/sidebar.html'
                }
            }
        })

        .state("manage", {
            url: '/manage',
            views: {
                "content@": {
                    templateUrl: 'app/templates/manage/manage.html',
                    controller: 'manage'
                },

                "header@": {
                    templateUrl: 'app/templates/common/header.html'
                },

                "sidebar@": {
                    templateUrl: 'app/templates/common/sidebar.html'
                }
            }
        })

        // module 2 products

        .state("products", {
            url: '/products',
            views: {
                "content@": {
                    templateUrl: 'app/templates/products/products-list.html',
                    controller: 'productList'
                },

                "header@": {
                    templateUrl: 'app/templates/common/header.html'
                },

                "sidebar@": {
                    templateUrl: 'app/templates/common/sidebar.html'
                }
            }
        })

        .state("add-product", {
            url: '/add-product',
            views: {
                "content@": {
                    templateUrl: 'app/templates/products/add-product.html',
                    controller: 'addProduct'
                },

                "header@": {
                    templateUrl: 'app/templates/common/header.html'
                },

                "sidebar@": {
                    templateUrl: 'app/templates/common/sidebar.html'
                }
            }
        })

        .state("edit-product", {
            url: '/edit-product/:id',
            views: {
                "content@": {
                    templateUrl: 'app/templates/products/edit-product.html',
                    controller: 'editProduct'
                },

                "header@": {
                    templateUrl: 'app/templates/common/header.html'
                },

                "sidebar@": {
                    templateUrl: 'app/templates/common/sidebar.html'
                }
            }
        })

        // module 3 Customers
        .state("customers", {
            url: '/customers',
            views: {
                "content@": {
                    templateUrl: 'app/templates/customers/customers-list.html',
                    controller: 'customersList'
                },

                "header@": {
                    templateUrl: 'app/templates/common/header.html'
                },

                "sidebar@": {
                    templateUrl: 'app/templates/common/sidebar.html'
                }
            }
        })

        .state("add-edit-customer", {
            url: '/customer/:customerId',
            views: {
                "content@": {
                    templateUrl: 'app/templates/customers/add-edit-customer.html',
                    controller: 'addEditCustomer'
                },

                "header@": {
                    templateUrl: 'app/templates/common/header.html'
                },

                "sidebar@": {
                    templateUrl: 'app/templates/common/sidebar.html'
                }
            }
        })


        // module 4 Orders 
        .state("orders", {
            url: '/orders',
            views: {
                "content@": {
                    templateUrl: 'app/templates/orders/orders-list.html',
                    controller: 'ordersList'
                },

                "header@": {
                    templateUrl: 'app/templates/common/header.html'
                },

                "sidebar@": {
                    templateUrl: 'app/templates/common/sidebar.html'
                }
            }
        })

        .state("add-edit-order", {
            url: '/order/:orderId',
            views: {
                "content@": {
                    templateUrl: 'app/templates/orders/add-edit-order.html',
                    controller: 'addEditOrder'
                },

                "header@": {
                    templateUrl: 'app/templates/common/header.html'
                },

                "sidebar@": {
                    templateUrl: 'app/templates/common/sidebar.html'
                }
            }
        })

        // .state("admin", {
        //     url: '/admin',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/admin-pannel/restaurant-list.html',
        //             controller: 'admin'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/common/header.html'
        //         },

        //         "sidebar@": {
        //             templateUrl: 'app/templates/common/sidebar.html'
        //         }
        //     }
        // })

        // .state("add-restaurant", {
        //     url: '/add-restaurant',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/admin-pannel/add-restaurant.html',
        //             controller: 'admin'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/common/header.html'
        //         },

        //         "sidebar@": {
        //             templateUrl: 'app/templates/common/sidebar.html'
        //         }
        //     }
        // })

        // .state("users-list", {
        //     url: '/users-list',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/admin-pannel/users-list.html',
        //             controller: 'admiin'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/common/header.html'
        //         },

        //         "sidebar@": {
        //             templateUrl: 'app/templates/common/sidebar.html'
        //         }
        //     }
        // })

        // .state("add-user", {
        //     url: '/add-user',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/admin-pannel/add-user.html',
        //             controller: 'admin'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/common/header.html'
        //         },

        //         "sidebar@": {
        //             templateUrl: 'app/templates/common/sidebar.html'
        //         }
        //     }
        // })

        // .state("assign-users", {
        //     url: '/assign-users',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/admin-pannel/assign-users.html',
        //             controller: 'admin'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/common/header.html'
        //         },

        //         "sidebar@": {
        //             templateUrl: 'app/templates/common/sidebar.html'
        //         }
        //     }
        // })

        // // ================= end  admin pannel routes  ===================== //


        // // ================= restaurant pannel routes  ==================== //

        // .state("bookings", {
        //     url: '/bookings',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/restaurant-pannel/bookings.html',
        //             controller: 'vendor'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/common/header.html'
        //         },

        //         "sidebar@": {
        //             templateUrl: 'app/templates/common/sidebar.html'
        //         }
        //     }
        // })

        // .state("add-booking", {
        //     url: '/add-booking',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/restaurant-pannel/add-booking.html',
        //             controller: 'vendor'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/common/header.html'
        //         },

        //         "sidebar@": {
        //             templateUrl: 'app/templates/common/sidebar.html'
        //         }
        //     }
        // })

        // .state("assign-table-to-booking", {
        //     url: '/assign-table-to-booking',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/restaurant-pannel/assign-table-to-booking.html',
        //             controller: 'vendor'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/common/header.html'
        //         },

        //         "sidebar@": {
        //             templateUrl: 'app/templates/common/sidebar.html'
        //         }
        //     }
        // })


        // ================= end restaurant pannel routes  ================ //

        $urlRouterProvider.otherwise('/login');
    }
})();
