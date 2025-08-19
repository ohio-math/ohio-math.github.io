export class Sound {
    constructor(file) {
        this.filename = file;

        fetch(file)
            .then(response => response.ok)
            .then(data => {
                if (data == false) {
                    throw new Error("Failed to load sound asset: " + file);
                }
            });
    }

    play() {
        let sound = new Audio(file);
        sound.play();
    }
}