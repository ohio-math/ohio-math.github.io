export class Costume {
    constructor(file) {
        this.filename = file;

        fetch(file)
            .then(response => response.ok)
            .then(data => {
                if (data == false) {
                    throw new Error("Failed to load costume asset: " + file);
                }
            });
    }
}