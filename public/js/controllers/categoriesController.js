//Copyright {2016} {NIIT Limited, Wipro Limited}
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//   
//   Name of Developers  Raghav Goel, Kshitij Jain, Lakshay Bansal, Ayush Jain, Saurabh Gupta, Akshay Meher
//  
 
angular.module('quizRT')
  .controller('categoriesController', function($scope,$http,$location,$rootScope){
    $scope.categories="";
    $rootScope.stylesheetName="categories";
    $scope.showCategory=function(categoryID){
      var path = '/category/'+categoryID;
      $location.path(path);
    };
    $scope.showTopic=function(topicID){
      var path = '/topic/'+topicID;
      $location.path(path);
    };
    $http.get('/topicsHandler/categories')
     .success(function(data, status, headers, config) {
        $scope.categories = data;
      })
     .error(function(data, status, headers, config) {
       console.log(error);
      });

  });
