/**
 * Created by nhatnk on 4/26/17.
 */

class Hero {
    constructor(image, top, left, size, width, height, speed, direction) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = direction;
    }

    getHero() {
        return `<img src="${this.image}" alt="Hero" width="${this.width}px" height= ${this.height}px style="top:${this.top}px; left:${this.left}px; position:absolute;">`;
    }

    moveLeft() {
        this.left -= this.speed;
    }

    moveRight() {
        this.left += this.speed;
    }

    moveTop() {
        this.top -= this.speed;
    }

    moveBottom(){
        this.top +=this.speed
    }

    changeDirection(direction) {
        this.direction = direction;
    }

    draw() {
        document.getElementById("game").innerHTML = this.getHero();
    }
}


const LEFT = 37;
const RIGHT = 39;
const TOP = 38;
const BOTTOM = 40;
const STOP = 32;
let action = [LEFT, RIGHT, TOP, BOTTOM, STOP];

let hero = new Hero('car.jpg',20, 0, 100, 110, 50, 1, RIGHT);

const move = direction => {
    switch (direction) {
        case LEFT:
            hero.moveLeft();
            break;
        case RIGHT:
            hero.moveRight();
            break;
        case TOP:
            hero.moveTop();
            break;
        case BOTTOM:
            hero.moveBottom();
            break;
        case STOP:
            hero.stop();
            break;
    }
};

const run = function (){
    idAnimation = requestAnimationFrame(run);
    hero.draw();
    move(hero.direction);
};

const start = keyCode => {
    requestAnimationFrame(run);
};

const stop = keyCode => {
    requestAnimationFrame(idAnimation);
};

let idAnimation = requestAnimationFrame(run);

document.addEventListener("keydown", e => {
    let isKeyCode = action.indexOf(e.keyCode);
    if (isKeyCode !== -1) {
        if (hero.direction === STOP && e.keyCode > STOP) {
            start();
        } else if (e.keyCode === STOP) {
            stop();
        }
        hero.changeDirection(e.keyCode);
    }
});