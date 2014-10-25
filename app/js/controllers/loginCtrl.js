'use strict';
define(['app'], function(app)
{
    app.controller('loginCtrl',
        function($scope, loginser, $location)
        {
            $scope.login = function(name, password)
            {
                if(name && password){
                    var auth = {name:name, password:password};
                    loginser.query(auth, function(data){
                        console.log(data.status); 
                        if(data.isAuthorized)
                            $location.url = '/signup';
                    });
                }                
            }
            
        }
    );
});