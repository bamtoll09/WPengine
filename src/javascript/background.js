class background extends gameObject {

    constructor() {
        super();
    }

    start() {
        super.setPos(0, 0);
        this.m_sprite = new sprite("./img/background.png");
        super.addComponent(this.m_sprite);
    }

    update() {

    }

    render() {
        this.m_sprite.render();
    }

}