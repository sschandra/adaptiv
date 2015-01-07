var app = angular.module('myApp', []);

app.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', '**']);
});

//Controller
app.controller('ContentLoader',function($scope,$http){
	var sp = this;
	$scope.dt=[];	
    
    sp.getCookie = function(name){
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
    }
    
	sp.fetchContent = function(category){		
		$http.get('/api/'+category).success(function(data){
            if(sp.getCookie('template'+category)){
                $scope.template = sp.getCookie('template'+category);
			    $scope.contentData=data.docs;
            }
            else{
                $scope.template = data.template;
                $scope.contentData=data.docs;
            }
			
		});
	}
    sp.fetchContent('men');
});
app.controller('adminCtrl',function($scope,$http){
    var $ths = this;
    $scope.config = [];
    $scope.tpl = "";
    $scope.num=1;
    $ths.getCookie = function(name){
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
    }
    $http.get('/data/config.json').success(function(data){
        $scope.config = data.categories;            
        console.log(data.categories);
        $scope.config.forEach(function(data){
            
        if(data.name == $scope.tab){
            //$scope.tpl =  data.templateName;
            if($ths.getCookie('templateName'+$scope.tab)){                
                $scope.tpl = $ths.getCookie('templateName'+$scope.tab);
            }
            else{
                 $scope.tpl =  data.templateName;
            }
        }
    });
    
        
    });
    
    $ths.getTpl = function(cat){
        $scope.tab = cat;
        $scope.config.forEach(function(data){
            if(data.name == cat){
                if($ths.getCookie('templateName'+$scope.tab)){                
                    $scope.tpl = $ths.getCookie('templateName'+$scope.tab);
                }
                else{
                     $scope.tpl =  data.templateName;
                }
            }
        });
    }
    $ths.setTpl = function(tpl){
        $scope.config.forEach(function(data){
            if(data.templateName == tpl){
                document.cookie = 'template'+$scope.tab+'='+ data.template;
                document.cookie = 'templateName'+$scope.tab+'='+ data.templateName;
                
                $scope.tpl = data.templateName;
            }
        });
    }
    
})
//Directive
app.directive('contentItem', function ($compile) {

    var linker = function (scope, element, attrs) {        
        scope.rootDirectory = 'images/';
        element.html(scope.tpl);			
        $compile(element.contents())(scope);
    };

    return {
        restrict: 'E',
        link: linker,
        scope: {
            content: '=',
			tpl:'='
        }
    };
});


