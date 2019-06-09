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
   * @param {Vector4} secondVector - The second vector.
   */
  add(secondVector) 
  {
    this.x += secondVector.x
    this.y += secondVector.y
    this.z += secondVector.z
    this.w += secondVector.w
  }

  /**
   * Subtraction of a vector from the current vector.
   * @param {Vector4} secondVector - The second vector.
   */
  sub(secondVector) 
  {
    this.x -= secondVector.x
    this.y -= secondVector.y
    this.z -= secondVector.z
    this.w -= secondVector.w
  }

  /**
   * Scalar multiplication. Multiplies a vector by a scalar.
   * @param {Number} scalar - The scalar value.
   */
  scalar(scalar) 
  {
    this.x *= scalar
    this.y *= scalar
    this.z *= scalar
    this.w *= scalar
  }

  /**
   * Calculate the dot product of the current vector and another vector.
   * @param {Vector4} secondVector - The second vector.
   * @return {Number} the dot product of the wzo
   */
  dot(secondVector) {
    return this.x * secondVector.x + this.y * secondVector.y + this.z * secondVector.z + this.w * secondVector.w
  }

  /**
   * Rotate the vector around the origin.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rot(α) {
    const matrix = new Matrix4([
      this.x, 0, 0, 0,
      this.y, 0, 0, 0,
      this.z, 0, 0, 0,
      this.w, 0, 0, 0,
    ])
    matrix.rot(α)
    console.log(matrix)
    this.x = matrix.items[0]
    this.y = matrix.items[4]
    this.z = matrix.items[8]
    this.w = matrix.items[12]
  }
}