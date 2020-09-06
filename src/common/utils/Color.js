/*
 * @Project: FiveM Tools
 * @Authors: Samuelds, THEJean_Kevin
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_core
*/

class Color {

    /**
     * @param {Number} red
     * @param {Number} green
     * @param {Number} blue
     * @param {Number} alpha
     */
    constructor(red = 0, green = 0, blue = 0, alpha = 0) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }

    /**
     *
     * @returns {string}
     * @constructor
     */
    RGBToHex() {
        let r = this.r.toString(16);
        let g = this.g.toString(16);
        let b = this.b.toString(16);

        if (r.length == 1) {
            r = "0" + r;
        }

        if (g.length == 1) {
            g = "0" + g;
        }
        if (b.length == 1) {
            b = "0" + b;
        }

        return "#" + r + g + b;
    }

    /**
     *
     * @returns {string}
     * @constructor
     */
    RGBAToHexA() {
        let r = this.r.toString(16);
        let g = this.g.toString(16);
        let b = this.b.toString(16);
        let a = Math.round(this.a * 255).toString(16);

        if (r.length == 1) {
            r = "0" + r;
        }

        if (g.length == 1) {
            g = "0" + g;
        }

        if (b.length == 1) {
            b = "0" + b;
        }

        if (a.length == 1) {
            a = "0" + a;
        }
        return "#" + r + g + b + a;
    }

    /**
     *
     * @param h
     * @returns {Color}
     */
    hexToRGB(h) {
        if (/^#([\da-f]{3}){1,2}$/i.test(h)) {
            // 3 digits
            if (h.length == 4) {
                this.r = "0x" + h[1] + h[1];
                this.g = "0x" + h[2] + h[2];
                this.b = "0x" + h[3] + h[3];

                // 6 digits
            } else if (h.length == 7) {
                this.r = "0x" + h[1] + h[2];
                this.g = "0x" + h[3] + h[4];
                this.b = "0x" + h[5] + h[6];
            }

            return this
        } else {
            console.error(h + " was not a hex value");
        }
    }

    /**
     *
     * @param h
     * @returns {Color}
     */
    hexAToRGBA(h) {
        if (/^#([\da-f]{4}){1,2}$/i.test(h)) {
            if (h.length == 5) {
                this.r = "0x" + h[1] + h[1];
                this.g = "0x" + h[2] + h[2];
                this.b = "0x" + h[3] + h[3];
                this.a = "0x" + h[4] + h[4];

            } else if (h.length == 9) {
                this.r = "0x" + h[1] + h[2];
                this.g = "0x" + h[3] + h[4];
                this.b = "0x" + h[5] + h[6];
                this.a = "0x" + h[7] + h[8];
            }
            this.a = +(this.a / 255).toFixed(3);

            return this;
        } else {
            console.error(h + " was not a hex a value");
        }
    }

}