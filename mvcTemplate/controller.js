/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
class ListController {
    constructor(model, view) {
        this._model = model;
        this._view = view;

        view.on('listModified', idx => this.updateSelected(idx));
        view.on('addButtonClicked', () => this.addentity());
        view.on('delButtonClicked', () => this.delentity());
    }

    addentity() {
        const entity = window.prompt('Add entity:', '');
        if (entity) {
            this._model.addentity(entity);
        }
    }

    delentity() {
        const index = this._model.selectedIndex;
        if (index !== -1) {
            this._model.removeentityAt(index);
        }
    }

    updateSelected(index) {
        this._model.selectedIndex = index;
    }
}