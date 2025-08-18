export class Sprite {
    move_steps(steps) {
        this.x += Math.sin( this.direction ) * steps;
        this.y += Math.cos( this.direction ) * steps;
    }

    turn_degrees(degrees) {
        const mod = (a, b) => (a/b - Math.floor(a/b)) * Math.abs(b);

        this.direction += degrees;

        if (this.direction > 180) {
            this.direction = mod(this.direction, 180) - 180;
        }

        if (this.direction < -180) {
            this.direction = mod(this.direction, 180);
        }
    }

    go_to_xy(x, y) {
        this.x = x;
        this.y = y;
    }

    async glide_secs_to_xy(seconds, x, y) {
        let initial_x = this.x;
        let initial_y = this.y;

        var times_moved = 0;
        const i = setInterval(() => {
            if (times_moved > seconds * 30) clearInterval(i);
            this.x += (x - initial_x) / ( seconds * 30 );
            this.y += (y - initial_y) / ( seconds * 30 );
            times_moved ++;
        }, 1000 / 30);
    }

    point_direction(dir) {
        this.direction = dir;
    }

    point_towards(sprite) {
        const dx = sprite.x - this.x;
        const dy = sprite.y - this.y;

        // Get angle in radians
        const radians = Math.atan2(dy, dx);

        // Optional: Convert to degrees
        const degrees = radians * (180 / Math.PI);

        this.direction = degrees;
    }

    change_x(amount) {
        this.x += amount;
    }
    
    set_x(x) {
        this.x = x;
    }

    change_y(amount) {
        this.y += amount;
    }

    set_y(y) {
        this.y = y;
    }

    set_rotation_style(style) {
        this.rotation_style = style;
    }
    
    async say_for_secs(message, seconds) {
        this.message = message;
        await wait_seconds(seconds);
        this.message = null;
    }

    say(message) {
        this.message = message;
    }

    switch_costume() {}

    constructor() {
        this.x;
        this.y;
        this.costume;
        this.costumes;
        this.sounds;
        this.direction;
        this.size;
        this.rotation_style;
        this.is_clone;
        this.saying;
    }
}