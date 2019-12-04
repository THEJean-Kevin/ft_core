/**
 * @Project: FivemTools
 * @Author: Samuelds
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_core
 */

/**
 * Creates a new Vector3.
 * @example
 * let entity = new Vector3(x, y, z);
 */
class Vector3 {

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * @description Clone Vector
     * @returns {Vector3}
     */
    Clone() {
        return new Vector3(this.x, this.y, this.z)
    }

    /**
     * @description Add by number or Vector3
     * @param {number|Vector3} arg1
     * @param {number} arg2
     * @param {number} arg3
     * @returns {Vector3}
     */
    Add(arg1, arg2, arg3) {
        if (arg1 && arg2 && arg3) {
            this.x += arg1;
            this.y += arg2;
            this.z += arg3;
        } else if (typeof arg1 === "number") {
            this.x += arg1;
            this.y += arg1;
            this.z += arg1;
        } else if (arg1 instanceof Vector3) {
            this.x += arg1.x;
            this.y += arg1.y;
            this.z += arg1.z;
        }
        return this;
    }

    /**
     * @description Subtract by number or Vector3
     * @param {number|Vector3} arg1
     * @param {number} arg2
     * @param {number} arg3
     * @returns {Vector3}
     */
    Subtract(arg1, arg2, arg3) {
        if (arg1 && arg2 && arg3) {
            this.x -= arg1;
            this.y -= arg2;
            this.z -= arg3;
        } else if (typeof arg1 === "number") {
            this.x -= arg1;
            this.y -= arg1;
            this.z -= arg1;
        } else if (arg1 instanceof Vector3) {
            this.x -= arg1.x;
            this.y -= arg1.y;
            this.z -= arg1.z;
        }
        return this;
    }

    /**
     * @description Multiply by number or Vector3
     * @param {number|Vector3} arg1
     * @param {number} arg2
     * @param {number} arg3
     * @returns {Vector3}
     */
    Multiply(arg1, arg2, arg3) {
        if (arg1 && arg2 && arg3) {
            this.x *= arg1;
            this.y *= arg2;
            this.z *= arg3;
        } else if (typeof arg1 === "number") {
            this.x *= arg1;
            this.y *= arg1;
            this.z *= arg1;
        } else if (arg1 instanceof Vector3) {
            this.x *= arg1.x;
            this.y *= arg1.y;
            this.z *= arg1.z;
        }
        return this;
    }

    /**
     * @description Divide by number or Vector3
     * @param {number|Vector3} arg1
     * @param {number} arg2
     * @param {number} arg3
     * @returns {Vector3}
     */
    Divide(arg1, arg2, arg3) {
        if (arg1 && arg2 && arg3) {
            this.x /= arg1;
            this.y /= arg2;
            this.z /= arg3;
        } else if (typeof arg1 === "number") {
            this.x /= arg1;
            this.y /= arg1;
            this.z /= arg1;
        } else if (arg1 instanceof Vector3) {
            this.x /= arg1.x;
            this.y /= arg1.y;
            this.z /= arg1.z;
        }
        return this;
    }

    /**
     * @description
     * @param {array|Vector3} value
     * @returns {number}
     */
    DotProduct(value) {
        return this.x * value.x + this.y * value.y + this.z * value.z;
    }

    /**
     * @description
     * @param {array|Vector3} value
     */
    CrossProduct(value) {
        const x = this.y * value.z - this.z * value.y;
        const y = this.z * value.x - this.z * value.z;
        const z = this.x * value.y - this.z * value.x;
        return new Vector3(x, y, z);
    }

    /**
     * @description
     * @returns {Vector3}
     */
    Normalize() {
        return this.Divide(this.Length());
    }

    /**
     * @description Check if number or Vector3 is Equal
     * @param {number|Vector3} arg1
     * @param {number} arg2
     * @param {number} arg3
     * @returns {Vector3}
     */
    IsEquals(arg1, arg2, arg3) {
        if (arg1 && arg2 && arg3) {
            return this.x === arg1 && this.y === arg2 && this.z === arg3;
        } else if (typeof arg1 === "number") {
            return this.x === arg1 && this.y === arg1 && this.z === arg1;
        } else if (arg1 instanceof Vector3) {
            return this.x === arg1.x && this.y === arg1.y && this.z === arg1.z;
        }
    }

    /**
     * TODO
     * @description
     * @param value
     * @returns {number}
     */
    AngleTo(value) {
        const racine = Math.sqrt(this.Length() * value.Length());
        if (racine === 0) {
            console.error("Vector3: angleTo() can't handle zero length vectors.");
        }
        const theta = this.DotProduct(value) / denominator;
        return Math.acos(Math.clamp(theta, -1, 1));
    }

    /**
     * TODO
     * @description
     * @returns {number}
     */
    Length() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }

    /**
     * @description
     * @param value
     * @returns {number|Vector3}
     */
    Max(value) {
        if (value) {
            this.x = Math.max(this.x, value.x);
            this.y = Math.max(this.y, value.y);
            this.z = Math.max(this.z, value.z);
            return this;
        } else {
            return Math.max(this.x, this.y, this.z);
        }
    }

    /**
     * @description
     * @param value
     * @returns {number|Vector3}
     */
    Min(value) {
        if (value) {
            this.x = Math.min(this.x, value.x);
            this.y = Math.min(this.y, value.y);
            this.z = Math.min(this.z, value.z);
            return this;
        } else {
            return Math.min(this.x, this.y, this.z);
        }
    }

    /**
     * @description
     * @returns {Vector3}
     */
    Negative() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    }

    /**
     * @description
     * @returns {array}
     */
    ToArray() {
        return [this.x, this.y, this.z];
    }

    /**
     * @description
     * @param value
     * @returns {number}
     */
    DistanceTo(value) {
        return Math.sqrt(this.DistanceToSquared(value));
    }

    /**
     * @description
     * @param value
     * @returns {number}
     */
    DistanceToSquared(value) {
        const dx = this.x - value.x, dy = this.y - value.y, dz = this.z - value.z;
        return dx * dx + dy * dy + dz * dz;
    }

}