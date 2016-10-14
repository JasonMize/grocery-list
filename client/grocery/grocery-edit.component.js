import template from './grocery-edit.html';

import GroceryEditController from './grocery-edit.controller';

const groceryEditComponent = {
    template,
    bindings: {
        save: '&',
        grocery: '<',
    },
    controller: GroceryEditController,
    controllerAs: 'groceryEditCtrl',
};

export default groceryEditComponent;
