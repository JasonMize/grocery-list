
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
}

export default GroceryPageController;
