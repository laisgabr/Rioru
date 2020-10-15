const { Player } = require('erela.js')

module.exports = class ZoePlayer extends Player {
    constructor(...args) {
        super(...args)
        
        this.speed = 1;
		this.pitch = 1;
		this.rate = 1;
		this.nightcore = false;
		this.vaporwave = false;
    }

    setSpeed(speed) {
        if (isNaN(speed))
            throw new RangeError("Player#setSpeed() Speed precisa ser um Number");
        this.speed = Math.max(Math.min(speed, 5), 0.05);
        this.setTimescale(speed)
        return this;
    }

    setPitch(pitch) {
        if (isNaN(pitch))
            throw new RangeError("Player#setPitch() Pitch precisa ser um Number.");
        this.pitch = Math.max(Math.min(pitch, 5), 0.05);
        this.setTimescale(this.speed, pitch)
        return this;
    }

    setNightcore(nighcore) {
        if (typeof nighcore !== "boolean")
                        throw new RangeError('Player#setNighcore() Nightcore precisa ser um Boolean.');

        this.nightcore = nighcore;
        if(nighcore) {
            this.vaporwave = false;
            this.setTimescale(1.2999999523162842, 1.2999999523162842, 1);
        } else this.setTimescale(1, 1, 1);
        return this;
    }

    setVaporwave(vaporwave) {
        if (typeof vaporwave !== "boolean")
            throw new RangeError('Player#setVaporwave() Vaporwave precisa ser um Boolean');

        this.vaporwave = vaporwave;
        if(vaporwave) {
            this.nightcore = false;
            this.setTimescale(0.8500000238418579, 0.800000011920929, 1);
        } else this.setTimescale(1, 1, 1);
        return this;
    }

    setTimescale(speed, pitch, rate) {
        this.node.send({
            op: "filters",
            guildId: this.guild.id,
            timescale: {
                speed,
                pitch,
                rate
            },
        });
    }

    clearEffects() {
        this.speed = 1;
        this.pitch = 1;
        this.rate = 1;
        this.nightcore = false;
        this.vaporwave = false;

        this.clearEQ();

        this.node.send({
            op: "filters",
            guildId: this.guild
        });
        
        return this;
    }

}