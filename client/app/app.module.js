import angular from 'angular';

import GroceryModule from '../grocery/grocery.module';
import FlashesModule from '../flashes/flashes.module';

import appComponent from './app.component';

const AppModule = angular.module('app', [
    GroceryModule.name,
    FlashesModule.name,
])
    .component('app', appComponent);

export default AppModule;
