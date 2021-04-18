class player extends gameObject {

    constructor() {
        super();
    }
    m_sprite = new sprite("C:/Users/CKIRUser/Pictures/player.png");

    start() {
        super.setPos(300, 300);
        super.addComponent(this.m_sprite);
        console.log(this.m_sprite);
    }

    render() {
        this.m_sprite.render();
    }
}