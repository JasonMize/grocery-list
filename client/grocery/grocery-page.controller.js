import { findIndex } from 'ramda';


function GroceryPageController(groceryAPIService, flashesService, $interval) {
    const ctrl = this;
    ctrl.editedGrocery = {};
    ctrl.totalItemCount = 0;
    ctrl.totalCost = 0;

    function getGrocery() {
        groceryAPIService.grocery.get().$promise.then((data) => {
            ctrl.groceries = data.results;
            ctrl.totalItemCount = data.count;
            ctrl.totalCost = data.total_cost;
        });
    }
    getGrocery();
    $interval(getGrocery, 2000);

    ctrl.saveGrocery = function saveGrocery(editedGrocery) {
        groceryAPIService.grocery.save(editedGrocery).$promise.then((savedGrocery) => {
            ctrl.groceries = [
                savedGrocery,
                ...ctrl.groceries,
            ];
            ctrl.editedGrocery = {};
            flashesService.displayMessage('Grocery Item Created!', 'success');
        });
    };

    ctrl.updateGrocery = function updateGrocery(groceryToUpdate) {
        groceryAPIService.grocery.update(groceryToUpdate).$promise.then(() => {
            flashesService.displayMessage('Grocery Item Updated!', 'success');
        });
    };

    ctrl.deleteGrocery = function deleteGrocery(groceryToDelete) {
        const findGrocery = findIndex(item => groceryToDelete.id === item.id);
        const index = findGrocery(ctrl.groceries);

        if (index !== -1) {
            ctrl.groceries.splice(index, 1);
        }

        groceryAPIService.grocery.delete(groceryToDelete).$promise.then(() => {
            flashesService.displayMessage('Grocery Item Deleted.', 'success');
        });
    };
}

export default GroceryPageController;
