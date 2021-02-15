/**
 * The Model. Model stores entitys and notifies
 * observers about changes.
 */
class ListModel extends EventEmitter {
    constructor(entitys) {
        super();
        this._entitys = entitys || [];
        this._selectedIndex = -1;
    }

    getentitys() {
        return this._entitys.slice();
    }

    addentity(entity) {
        this._entitys.push(entity);
        this.emit('entityAdded', entity);
    }

    removeentityAt(index) {
        const entity = this._entitys.splice(index, 1)[0];
        this.emit('entityRemoved', entity);
        if (index === this._selectedIndex) {
            this.selectedIndex = -1;
        }
    }

    get selectedIndex() {
        return this._selectedIndex;
    }

    set selectedIndex(index) {
        const previousIndex = this._selectedIndex;
        this._selectedIndex = index;
        this.emit('selectedIndexChanged', previousIndex);
    }
}