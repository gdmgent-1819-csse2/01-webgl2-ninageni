import Matrix4 from './Matrix4.js'

/**
 * Represents a three-dimensional vector
 */
export default class Vector4
{
  /**
   * Create a vector
   * 
   * @param {Number} x - the x vector component
   * @param {Number} y - the y vector component
   * @param {Number} z - the z vector component
   * @param {Number} w - the w vector component
   */
  constructor(x, y, z, w) 
  {
    this.x = Number(x) || 0
    this.y = Number(y) || 0
    this.z = Number(z) || 0
    this.w = Number(w) || 0
  }

  /**
   * Calculate the length of the vector.
   * @return {Number} The length of the vector
   */
  norm() 
  {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2) + Math.pow(this.w, 2));
  }

  /**
   * Addition of a vector to the current vector.
   * @param {Vector4} v - The second vector.
   */
  add(v) 
  {
    this.x += v.x
    this.y += v.y
    this.z += v.z
    this.w += v.w
  }

  /**
   * Subtraction of a vector from the current vector.
   * @param {Vector4} v - The second vector.
   */
  sub(v) 
  {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
    this.w -= v.w
  }

  /**
   * Scalar multiplication. Multiplies a vector by a scalar.
   * @param {Number} a - The scalar value.
   */
  scalar(a) 
  {
    this.x *= a
    this.y *= a
    this.z *= a
    this.w *= a
  }

  /**
   * Calculate the dot product of the current vector and another vector.
   * @param {Vector4} v - The second vector.
   * @return {Number} the dot product of the wzo
   */
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w
  }

  /**
   * Rotate the vector around the origin.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rot(α) {
    const m = new Matrix4([
      this.x, 0, 0, 0,
      this.y, 0, 0, 0,
      this.z, 0, 0, 0,
      this.w, 0, 0, 0,
    ])
    m.rot(α)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[4]
    this.z = m.items[8]
    this.w = m.items[12]
  }
}