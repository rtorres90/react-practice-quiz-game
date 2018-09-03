class Option {
    id;
    name;
    isTheCorrect = false;

    constructor(id, name, isTheCorrect) {
        this.id = id;
        this.name = name;
        this.isTheCorrect = isTheCorrect;
    }
}