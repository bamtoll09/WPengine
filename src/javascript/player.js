class player extends gameObject {

    constructor() {
        super();
    }

    start() {
        super.setPos(300, 300);

        this.m_sprite = new sprite("./img/player.png");
        super.addComponent(this.m_sprite);
    }

    render() {
        this.m_sprite.render();
    }
}