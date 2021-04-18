class componentManager extends obj {

    constructor() {
        super();
    }

    addComponent(component) {
        component.addParent(this);
    }
}