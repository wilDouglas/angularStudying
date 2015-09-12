/**
 * Created by william on 12/09/15.
 */

var homeServices = angular.module('homeServices', []);

homeServices.factory('PessoaList', ['$resource', function ($resource) {
    return $resource("http://localhost/phpRest/pessoas", {}, {get: {method: 'GET', chache: false, isArray: true}});
}]);
