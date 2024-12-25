class PacMan {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT;
    }

    moveProcess() {
        this.changeDirectionIfPossible();
        this.moveForwards();
        if (this.checkCollision()) {
            this.moveBackwards();
        }
    }

    eat() {

    }

    moveBackwards() {
        switch(this.direction) { 
            case DIRECTION_RIGHT:
                this.x -= this.speed;
                break;
            case DIRECTION_UP:
                this.y += this.speed;
                break;
            case DIRECTION_LEFT:
                this.x += this.speed;
                break;
            case DIRECTION_DOWN:
                this.y -= this.speed;
                break;
        }
    }
    moveForwards() {
        switch(this.direction) { 
            // the direction where the pacman will move, since the x plane goes -1 to 1 from left to right and y plane goes from -1 to 1 from top to bottom
            case DIRECTION_RIGHT:
                this.x += this.speed;
                break;
            case DIRECTION_UP:
                this.y -= this.speed;
                break;
            case DIRECTION_LEFT:
                this.x -= this.speed;
                break;
            case DIRECTION_DOWN:
                this.y += this.speed;
                break;
        }
    }
    checkCollision() {
        
    }
    checkGhostCollision() {

    }
    changeDirectionIfPossible() {

    }
    changeAnimation() {

    }
    draw() {

    }
}
