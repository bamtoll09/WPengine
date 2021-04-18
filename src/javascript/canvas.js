let canvas = document.getElementById("canvas");
let context;

let objs = [];

function create() {
    this.canvas.width = 700;
    this.canvas.height = 700;

    this.canvas.addEventListener("click", onClick, false);

    objs.push(new player());
    start();
}

function start() {
    objs.forEach(o => {
        o.start();
    });
}

function update() {
    context.getContext().clearRect(0, 0, canvas.width, canvas.height);

    objs.forEach(o => {
        o.update();
        o.render();
    });
}

// sample code
function onClick(e) {
    let element = canvas;
    let offsetX = 0, offsetY = 0;

    if (element.offsetParent) {
        do {
          offsetX += element.offsetLeft;
          offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
      }
  
      let x = e.pageX - offsetX;
      let y = e.pageY - offsetY;
}

// loading script (must be ordered)
window.onload = function() {
    loadScript("./src/javascript/ctx.js", () => {
        loadScript("./src/javascript/obj.js", () => {
            loadScript("./src/javascript/component.js", () => {
                loadScript("./src/javascript/componentManager.js", () => {
                    loadScript("./src/javascript/sprite.js", () => {
                        loadScript("./src/javascript/gameObject.js", () => {
                            loadScript("./src/javascript/player.js", () => {
                                canvas = document.getElementById("canvas");
                                context = new ctx(canvas);
                                create();

                                setInterval(update, 16);
                            });
                        });
                    });
                });
            });
        });
    });
}

// this <- function when call by user