import angular from 'angular';

import appComponent from './app.component';
import GroceryModule from '../grocery/grocery.module';

const AppModule = angular.module('app', [
    GroceryModule.name,
])
    .component('app', appComponent);

export default AppModule;
