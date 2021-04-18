let instance;
class ctx {

    constructor(canvas) {
        if (instance) return instance;
        this.context = canvas.getContext("2d");
        instance = this;
    }

    getContext() {
        return instance.context;
    }
}