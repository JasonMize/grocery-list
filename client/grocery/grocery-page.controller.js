
function GroceryPageController(groceryAPIService, $interval) {
    const ctrl = this;
    ctrl.grocery = {
        name: 'milk',
        created: new Date(Date.now()),
    };

    function getGrocery() {
        groceryAPIService.grocery.get().$promise.then((data) => {
            ctrl.grocery = data.results;
        });
    }
    getGrocery();
    $interval(getGrocery, 4000);
}

export default GroceryPageController;
