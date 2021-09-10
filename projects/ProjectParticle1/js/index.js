let particles = [];
let suns = [];
const G = 9.81;

const MAX_DISTANCE = 200;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);

    textSize(32);
    text(particles.length, 10, 30);

    for (particle of particles) {
        particle.show();
        particle.move();
        for (sun of suns) {
            particle.applyGravity(G, particle.mass, sun.mass, p5.Vector.sub(particle.position, sun.position).mag(), p5.Vector.sub(sun.position, particle.position).normalize());
        }
    }

    for (sun of suns) {
        sun.show();
    }

    //connectParticles(MAX_DISTANCE);
    //particleCollision();

}

function generateParticle(position, speed, mass) {
    let particle = new Particle(position, speed, mass);
    particles.push(particle);
}

function generateSun(position, speed, mass) {
    let sun = new Particle(position, speed, mass);
    sun.color = color("yellow");
    sun.diameter = 50;
    suns.push(sun);
}



function connectParticles(maxDistance) {
    for (let i = 0; i < particles.length; i++) {

        const particle = particles[i];

        for (let j = 0; j < particles.length; j++) {
            if (i != j) { // controlla che la particella considerata sia diversa da se stessa
                const otherParticle = particles[j];
                const distance = dist(particle.position.x, particle.position.y, otherParticle.position.x, otherParticle.position.y);

                if (distance <= maxDistance) {
                    stroke('rgba(12,116,171,0.4)');
                    line(particle.position.x, particle.position.y, otherParticle.position.x, otherParticle.position.y);
                }
            }
        }
    }
}

// function particleCollision() {
//     for (let i = 0; i < particles.length; i++) {

//         const particle = particles[i];

//         for (let j = 0; j < particles.length; j++) {
//             if (i != j) { // controlla che la particella considerata sia diversa da se stessa
//                 const otherParticle = particles[j];
//                 if (particle.isColliding(otherParticle)) {
//                     console.log(particle.speed.x);
//                     particle.speed.x = -particle.speed.x;
//                     particle.speed.y = -particle.speed.y;
//                     otherParticle.speed.x = - otherParticle.speed.x;
//                     otherParticle.speed.y = - otherParticle.speed.y;
//                     console.log('Collision');
//                 }
//             }
//         }
//     }
// }


function mousePressed() {
    generateParticles(2);
}

function mouseDragged() {
    generateParticles(1);
}

function generateParticles(numberOfParticles) {
    for (let i = 0; i < numberOfParticles; i++) {
        let position = createVector(random(0, 1000), mouseY);
        let speed = createVector(random(-12, 12), random(-12, 12));
        let mass = 1;
        generateParticle(position, speed, mass);
    }
}
function generateSuns(numberOfSuns) {
    for (let i = 0; i < numberOfSuns; i++) {
        let position = createVector(mouseX, mouseY);
        let speed = 0;
        let mass = 1000;
        generateSun(position, speed, mass);
    }
}

function keyPressed() {
    if (keyCode === 32) { // 32 è il codice identificativo della barra spaziatrice
        particles = [];
        suns = [];
    }
    if (keyCode === 70) {
        console.log("ok")
        generateSuns(1)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}