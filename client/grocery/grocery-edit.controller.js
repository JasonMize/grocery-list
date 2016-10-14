import { merge } from 'ramda';

function GroceryEditController() {
    const ctrl = this;
    ctrl.editedGrocery = {};

    ctrl.$onChanges = function $onChanges() {
        ctrl.editedGrocery = merge({}, ctrl.grocery);
    };

    ctrl.saveGrocery = function saveGrocery() {
        console.log('grocery-edit.controller saveGrocery name: ' + ctrl.editedGrocery.name);
        ctrl.save({ editedGrocery: ctrl.editedGrocery });
    };
}

export default GroceryEditController;
