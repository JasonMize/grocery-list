
import template from './grocery-item.html';

import GroceryItemController from './grocery-item.controller';

const groceryItemComponent = {
    template,
    bindings: {
        grocery: '<',
    },
    controller: GroceryItemController,
    controllerAs: 'groceryItemCtrl',
};

export default groceryItemComponent;
