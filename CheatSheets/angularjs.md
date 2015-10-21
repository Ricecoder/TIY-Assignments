##Directives:

1. [ng-modelOptions](https://docs.angularjs.org/api/ng/directive/ngModelOptions)

Allows you to customize how model updates are done. 


2. [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat)

Iterates cover an objects' properties.






##Filters:

1. [currency](https://docs.angularjs.org/api/ng/filter/currency)

Formats what it is applied to as a currency. 

```html
<script>
  angular.module('currencyExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.amount = 1234.56;
    }]);
</script>
```
