import template from './grocery-edit.html';

import GroceryEditController from './grocery-edit.controller';

const groceryEditComponent = {
    template,
    bindings: {
        grocery: '<',
        save: '&',
        cancel: '&?',
    },
    controller: GroceryEditController,
    controllerAs: 'groceryEditCtrl',
};

export default groceryEditComponent;
