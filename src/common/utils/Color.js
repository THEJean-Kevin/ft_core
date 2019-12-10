/**
 * @Project: FivemTools
 * @Author: Samuelds
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_core
 */

class Color {
    /**
     * @param {Number} r 
     * @param {Number} g 
     * @param {Number} b 
     * @param {Number} a 
     */
    constructor(r = 0, g = 0, b = 0, a = 0) {
        this.r = x;
        this.g = y;
        this.b = z;
        this.a = a;
    }

    RGBToHex() {
        r = this.r.toString(16);
        g = this.g.toString(16);
        b = this.b.toString(16);

        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;

        return "#" + r + g + b;
    }

    RGBAToHexA() {
        r = this.r.toString(16);
        g = this.g.toString(16);
        b = this.b.toString(16);
        a = Math.round(this.a * 255).toString(16);

        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        if (a.length == 1)
            a = "0" + a;

        return "#" + r + g + b + a;
    }

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
        }
        else {
            console.error(h + " was not a hex a value");
        }
    }
}