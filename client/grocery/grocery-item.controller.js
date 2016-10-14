
function GroceryItemController() {
    const ctrl = this;
    ctrl.editMode = false;

    ctrl.setEditMode = function setEditMode(editMode) {
        ctrl.editMode = editMode;
    };
}

export default GroceryItemController;
