import { Sprite } from '../framework/sprite.js';
import { Costume } from '../framework/costume.js';
import { Sound } from '../framework/sound.js';

export class Sprite_BountyHunter extends Sprite {
    constructor(init) {
        this.costumes = [
            new Costume("../assets/01cecf8112ba19c120f9ad167fec4a7e.png"),
            new Costume("../assets/3ed250c3c18d426f9572bbb81f7f9f80.png"),
            new Costume("../assets/ea4aa35b05ce53bc11a4099d79f793ce.svg"),
            new Costume("../assets/56d84f0777cbfb870f3f5b0e3dee66e4.png"),
            new Costume("../assets/217bdbfa4a3e300201b5c2f88c1725e6.svg")
        ];

        this.sounds = [
            new Sound("../assets/98e14afeb0d6229b7def971680ebf10b.wav")
        ];

        this.x = init.x;
        this.y = init.y;
        this.costume = init.costume;
        this.direction = init.direction;
        this.size = init.size;
        this.rotation_style = init.rotation_style;
        this.is_clone = init.is_clone || false;
    }
}