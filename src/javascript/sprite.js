class sprite extends component {
    constructor(src) {
        super();
        this.img = new Image();
        this.img.src = src;
    }

    render() {
        context.getContext().drawImage(this.img, this.x, this.y);
    }
}