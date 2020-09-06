/*
 * @Project: FiveM Tools
 * @Authors: Samuelds, THEJean_Kevin
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
   * @description This function is used to calculate the dot product of two vectors.
                  The dot product is a number calculated by multiplying the magnitudes of both vectors together, then multiplying that number by cosine of the angle between them.
                  For normalized vectors, the dot product will be:
                  -1 - If the vectors point in the exact opposite direction
                  0 - If the vectors are perpendicular
                  1 - If the vectors point the same direction
   * @param {array|Vector3} value
   * @returns {number}
   */
  DotProduct(value) {
    return this.x * value.x + this.y * value.y + this.z * value.z;
  }

  /**
   * @description calculate the cross product of two vectors. The cross product is a vector that is perpendicular to both input vectors
   * @param {array|Vector3} value
   */
  CrossProduct(value) {
    const x = this.y * value.z - this.z * value.y;
    const y = this.z * value.x - this.z * value.z;
    const z = this.x * value.y - this.z * value.x;
    return new Vector3(x, y, z);
  }

  /**
   * @description Convert this vector to a unit vector - that is, sets it equal to the vector with the same direction as this one, but length 1.
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
   * @description returns the angle (in radians) between two vectors.
   * @param value
   * @returns {number}
   */
  AngleTo(value) {
    const racine = Math.sqrt(this.Length() * value.Length());
    if (racine === 0) {
      console.error("Vector3: angleTo() can't handle zero length vectors.");
    }
    const theta = this.DotProduct(value) / racine;
    return Math.acos(Math.clamp(theta, -1, 1));
  }

  /**
   * @description Computes the Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   * @returns {number}
   */
  Length() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  /**
   * @description return the max number in the vector or If this vector's x, y or z value is less than v's x, y or z value, replace that value with the corresponding max value.
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
   * @description return the min number in the vector or If this vector's x, y or z value is greater than v's x, y or z value, replace that value with the corresponding min value.
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
   * @description return the opposite of the vector
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
   * @description Computes the distance from this vector to v.
   * @param value
   * @returns {number}
   */
  DistanceTo(value) {
    return Math.sqrt(this.DistanceToSquared(value));
  }

  /**
   * @description Computes the squared distance from this vector to v. If you are just comparing the distance with another distance, you should compare the distance squared instead as it is slightly more efficient to calculate.
   * @param value
   * @returns {number}
   */
  DistanceToSquared(value) {
    const dx = this.x - value.x, dy = this.y - value.y, dz = this.z - value.z;
    return dx * dx + dy * dy + dz * dz;
  }

}