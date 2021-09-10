class Particle {

    constructor(position, speed, mass) {
        this.position = position;
        this.diameter = 5;
        let red = random(0, 255)
        let blue = random(0, 255)
        let green = random(0, 255)
        this.color = color(red, blue, green);

        // Variabili di movimento
        this.speed = speed;
        this.acceleration = createVector(0, 0);
        this.target = createVector(windowWidth / 2, windowHeight / 2);
        this.mass = mass;
    }

    show() {
        fill(this.color);
        noStroke();
        ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    }

    move() {
        this.acceleration.limit(0.8);
        this.speed.add(this.acceleration);
        this.speed.limit(10);
        this.position.add(this.speed);
        this.bounceOnBorder();
    }

    bounceOnBorder() {
        if ((this.position.x >= width) || (this.position.x <= 0)) {
            this.speed.x = -this.speed.x;
        }
        if (this.position.y >= height) {
            this.position.set(width / 2, height / 2);
            this.speed.set(random(-6, 6), random(-6, 6));
        }

        if (this.position.y <= 0) {
            this.speed.y = -this.speed.y;
        }
    }

    applyForce(force) {
        let a = p5.Vector.div(force, this.mass);
        this.acceleration.add(a);
        // acceleration.limit(1.9); //0.9
    }

    //Legge gravitazionale di Newton gravity = r*(G*m1*m2)/dist^2
    applyGravity(G, mass1, mass2, distance, radius) {
        this.applyForce(p5.Vector.mult(radius, (G * mass1 * mass2) / (distance * distance)));
    }

    isColliding(otherParticle) {
        const distance = dist(particle.position.x, particle.position.y, otherParticle.position.x, otherParticle.position.y);
        //console.log(Math.floor(distance));
        return (distance <= (this.diameter / 2 + otherParticle.diameter / 2));
    }
}