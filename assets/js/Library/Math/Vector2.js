import Matrix2 from './Matrix2.js'

/** Class representing a two-dimensional vector. */
export default class Vector2
{
  /**
   * Create a vector.
   * @param {Number} x - The x vector component.
   * @param {Number} y - The y vector component.
   */
  constructor(x, y) 
  {
    this.x = Number(x) || 0
    this.y = Number(y) || 0
  }

  /**
   * Calculate the length of the vector.
   * @return {Number} The length of the vector
   */
  norm() 
  {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
  /**
   * Addition of a vector to the current vector.
   * @param {Vector2} secondVector - The second vector.
   */
  add(secondVector) 
  {
    this.x += secondVector.x
    this.y += secondVector.y
  }

  /**
   * Subtraction of a vector from the current vector.
   * @param {Vector2} secondVector - The second vector.
   */
  sub(secondVector) 
  {
    this.x -= secondVector.x
    this.y -= secondVector.y
  }

  /**
   * Scalar multiplication. Multiplies a vector by a scalar.
   * @param {Number} firstVector - The scalar value.
   */
  scalar(firstVector) 
  {
    this.x *= firstVector
    this.y *= firstVector
  }

  /**
   * Calculate the dot product of the current vector and another vector.
   * @param {Vector2} secondVector - The second vector.
   * @return {Number} the dot product of the wzo
   */
  dot(secondVector) {
    return this.x * secondVector.x + this.y * secondVector.y
  }

  /**
   * Rotate the vector around the origin.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rot(α) {
    const matrix = new Matrix2([
      this.x, 0, 
      this.y, 0
    ])
    matrix.rot(α)
    console.log(matrix)
    this.x = matrix.items[0]
    this.y = matrix.items[2]
  }
}