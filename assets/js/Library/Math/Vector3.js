import Matrix3 from './Matrix3.js'

/**
 * Represents a three-dimensional vector
 */

export default class Vector3
{
  /**
   * Create a vector
   * 
   * @param {Number} x - the x vector component
   * @param {Number} y - the y vector component
   * @param {Number} z - the z vector component
   */
  constructor(x, y, z) 
  {
    this.x = Number(x) || 0
    this.y = Number(y) || 0
    this.z = Number(z) || 0
  }

  /**
   * Calculate the length of the vector.
   * @return {Number} The length of the vector
   */
  norm() 
  {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
  }

  /**
   * Addition of a vector to the current vector.
   * @param {Vector3} secondVector - The second vector.
   */
  add(secondVector) 
  {
    this.x += secondVector.x
    this.y += secondVector.y
    this.z += secondVector.z
  }

  /**
   * Subtraction of a vector from the current vector.
   * @param {Vector3} secondVector - The second vector.
   */
  sub(secondVector) 
  {
    this.x -= secondVector.x
    this.y -= secondVector.y
    this.z -= secondVector.z
  }

  /**
   * Scalar multiplication. Multiplies a vector by a scalar.
   * @param {Number} firstVector - The scalar value.
   */
  scalar(firstVector) 
  {
    this.x *= firstVector
    this.y *= firstVector
    this.z *= firstVector
  }

  /**
   * Calculate the dot product of the current vector and another vector.
   * @param {Vector3} secondVector - The second vector.
   * @return {Number} the dot product of the wzo
   */
  dot(secondVector) {
    return this.x * secondVector.x + this.y * secondVector.y + this.z * secondVector.z
  }

  /**
   * Rotate the vector around the origin.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rot(α) {
    const matrix = new Matrix3([
      this.x, 0, 0, 
      this.y, 0, 0,
      this.z, 0, 0,
    ])
    matrix.rot(α)
    console.log(matrix)
    this.x = matrix.items[0]
    this.y = matrix.items[3]
    this.z = matrix.items[6]
  }
}