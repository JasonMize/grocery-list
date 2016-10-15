import { findIndex } from 'ramda';


function GroceryPageController(groceryAPIService, $interval) {
    const ctrl = this;
    ctrl.editedGrocery = {};

    function getGrocery() {
        groceryAPIService.grocery.get().$promise.then((data) => {
            ctrl.groceries = data.results;
        });
    }
    getGrocery();
    $interval(getGrocery, 4000);

    ctrl.saveGrocery = function saveGrocery(editedGrocery) {
        groceryAPIService.grocery.save(editedGrocery).$promise.then((savedGrocery) => {
            ctrl.groceries = [
                savedGrocery,
                ...ctrl.groceries,
            ];
            ctrl.editedGrocery = {};
        });
    };

    ctrl.updateGrocery = function updateGrocery(groceryToUpdate) {
        groceryAPIService.grocery.update(groceryToUpdate).$promise.then(() => {
        });
    };

    ctrl.deleteGrocery = function deleteGrocery(groceryToDelete) {
        const findGrocery = findIndex(item => groceryToDelete.id === item.id);
        const index = findGrocery(ctrl.groceries);

        if (index !== -1) {
            ctrl.groceries.splice(index, 1);
        }

        groceryAPIService.grocery.delete(groceryToDelete).$promise.then(() => {

        });
    };
}

export default GroceryPageController;
