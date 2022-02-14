const crypto = require("crypto");
const Canvas = require("canvas");

class CaptchaJs {
    width = 150;
    height = 50;
    color = "#000000";
    size = 25;
    alphabet = {alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789", len: 6};
    secret = "";

    constructor(secret) {
        this.secret = secret;
    }

    createCanvas(width = this.width, height = this.height, alphabet = this.alphabet, color = this.color, size = this.size) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.size = size;
        this.alphabet = alphabet;
    }

    generate(code = null) {
        let url;
        code = (code) ? code : this.generateString(this.alphabet.len);
        url = this.generateCaptcha(code);
        const hash = crypto.createHmac('sha256', this.secret).update(code).digest("hex");

        return {
            url,
            hash,
            code
        }
    }

    checkCode(code, hash) {
        return  crypto.createHmac('sha256', this.secret).update(code).digest("hex") === hash;
    }

    generateCaptcha(code) {
        const canvas = Canvas.createCanvas(this.width, this.height);
        const context = canvas.getContext("2d");

        // Curve
        for (let count = 0; count < Math.floor(Math.random() * (10 - 1 + 1)) + 1; count++) {
            context.moveTo(Math.floor(0.08 * this.width), Math.random() * this.height);
            context.bezierCurveTo(Math.floor(0.032 * this.width), Math.random() * this.height,
                Math.floor(1.08 * this.width), Math.random() * this.height,
                Math.floor(0.92 * this.width), Math.random() * this.height);
            context.stroke();
        }

        // Line
        for (let count = 0; count < Math.floor(Math.random() * (15 - 3 + 1)) + 3; count++) {
            context.beginPath();
            context.moveTo(Math.floor(0.009 * this.width), Math.random() * this.height);
            context.lineTo(Math.floor(0.32 * this.width), Math.random() * this.height);
            context.stroke();
        }

        context.transform(1, .1, Math.random(), 1, 0, 0);
        context.fillStyle = this.color;
        context.font = `italic bold ${this.size}px Comic Sans MS`;
        context.textAlign = "center";
        context.fillText(code, this.width / 2, this.height / 2);

        return canvas.toDataURL();
    }

    generateString() {
        let code = "";

        for(let i = 0; i < this.alphabet.len; i++){
            code += this.alphabet.alphabet[Math.round(Math.random() * (this.alphabet.alphabet.length - 1))];
        }

        return code;
    }
}

module.exports.create = secret => new CaptchaJs(secret);