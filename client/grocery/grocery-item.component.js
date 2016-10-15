
import template from './grocery-item.html';

import GroceryItemController from './grocery-item.controller';

const groceryItemComponent = {
    template,
    bindings: {
        grocery: '<',
        delete: '&',
        update: '&',
    },
    controller: GroceryItemController,
    controllerAs: 'groceryItemCtrl',
};

export default groceryItemComponent;
