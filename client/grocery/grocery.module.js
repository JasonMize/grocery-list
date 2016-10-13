import angular from 'angular';
import 'angular-resource';

import groceryPageComponent from './grocery-page.component';
import groceryItemComponent from './grocery-item.component';

import groceryAPIService from './grocery-api.service';

const GroceryModule = angular.module('grocery', [
    'ngResource',
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('groceryAPIService', groceryAPIService)
    .component('groceryItem', groceryItemComponent)
    .component('groceryPage', groceryPageComponent);

export default GroceryModule;
