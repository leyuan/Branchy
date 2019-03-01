class Callback {
    constructor() {
        this.map = {}
    }

    on(msg, f) {
        this.map[msg] = f;
        return this;
    }

    pushMsg(msg, args) {
        const f = this.map[msg];
        if (f === undefined) {
            return
        }
        f(args)
    }

}

module.exports = Callback;