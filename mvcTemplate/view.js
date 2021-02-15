/**
 * The View. View presents the model and provides
 * the UI events. The controller is attached to these
 * events to handle the user interaction.
 */
class ListView extends EventEmitter {
    constructor(model, elements) {
        super();
        this._model = model;
        this._elements = elements;
        console.log(this._elements)
        // attach model listeners
        model.on('entityAdded', () => this.rebuildList())
            .on('entityRemoved', () => this.rebuildList());

        // attach listeners to HTML controls
        elements.list.addEventListener('change',
            e => this.emit('listModified', e.target.selectedIndex));
        elements.addButton.addEventListener('click',
            () => this.emit('addButtonClicked'));
        elements.delButton.addEventListener('click',
            () => this.emit('delButtonClicked'));
    }

    show() {
        this.rebuildList();
    }

    rebuildList() {
        const list = this._elements.list;
        list.options.length = 0;
       // this._model.getentitys().forEach(
       //     entity => list.options.add(new Option(entity)));
        this._model.selectedIndex = -1;
    }
}