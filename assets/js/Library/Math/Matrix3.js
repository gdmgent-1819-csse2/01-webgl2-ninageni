/** Class representing a 3×3 matrix. */
export default class Matrix3
{
  /**
   * Create a 3x3 matrix
   * 
   * @param {Array} secondMatrix - The matrix items 
   */
  constructor(items){
    this.items = items || [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ]
  }

  /**
   * Addition of the second matrix to the current matrix
   * 
   * @param {Array} secondMatrix - Second matrix
   */
  add(secondMatrix)
  {
    const firstMatrix = this.items
    this.items = [
      firstMatrix[0] + secondMatrix[0], firstMatrix[1] + secondMatrix[1], firstMatrix[2] + secondMatrix[2],
      firstMatrix[3] + secondMatrix[3], firstMatrix[4] + secondMatrix[4], firstMatrix[5] + secondMatrix[5],
      firstMatrix[6] + secondMatrix[6], firstMatrix[7] + secondMatrix[7], firstMatrix[8] + secondMatrix[8],
    ]
  }

  /**
   * Subtract matrices
   * 
   * @param {Matrix3} secondMatrix
   */
  sub(secondMatrix)
  {
    const firstMatrix = this.items
    this.items = [
      firstMatrix[0] - secondMatrix[0], firstMatrix[1] - secondMatrix[1], firstMatrix[2] - secondMatrix[2],
      firstMatrix[3] - secondMatrix[3], firstMatrix[4] - secondMatrix[4], firstMatrix[5] - secondMatrix[5],
      firstMatrix[6] - secondMatrix[6], firstMatrix[7] - secondMatrix[7], firstMatrix[8] - secondMatrix[8],
    ]
  }
  /**
   * Multiply matrices
   * 
   * @param {Matrix3} secondMatrix
   */
  mul(secondMatrix)
  {
    const firstMatrix = this.items
    const resultMatrix = []
    resultMatrix[0] = firstMatrix[0] * secondMatrix[0] + firstMatrix[1] * secondMatrix[3] + firstMatrix[2] * secondMatrix[6]
    resultMatrix[1] = firstMatrix[0] * secondMatrix[1] + firstMatrix[1] * secondMatrix[4] + firstMatrix[2] * secondMatrix[7]
    resultMatrix[2] = firstMatrix[0] * secondMatrix[2] + firstMatrix[1] * secondMatrix[5] + firstMatrix[2] * secondMatrix[8]
    resultMatrix[3] = firstMatrix[3] * secondMatrix[0] + firstMatrix[4] * secondMatrix[3] + firstMatrix[5] * secondMatrix[6]
    resultMatrix[4] = firstMatrix[3] * secondMatrix[1] + firstMatrix[4] * secondMatrix[4] + firstMatrix[5] * secondMatrix[7]
    resultMatrix[5] = firstMatrix[3] * secondMatrix[2] + firstMatrix[4] * secondMatrix[5] + firstMatrix[5] * secondMatrix[8]
    resultMatrix[6] = firstMatrix[6] * secondMatrix[0] + firstMatrix[7] * secondMatrix[3] + firstMatrix[8] * secondMatrix[6]
    resultMatrix[7] = firstMatrix[6] * secondMatrix[1] + firstMatrix[7] * secondMatrix[4] + firstMatrix[8] * secondMatrix[7]
    resultMatrix[8] = firstMatrix[6] * secondMatrix[2] + firstMatrix[7] * secondMatrix[5] + firstMatrix[8] * secondMatrix[8]

    this.items = resultMatrix
  }

  /**
   * Rotate the matrix around the origin.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rot(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const firstMatrix = this.items
    const rotationMatrix = [
        cos, -sin, 0,
        sin, cos, 0,
        0, 0, 1
    ]
    this.items = rotationMatrix
    this.mul(firstMatrix);
  }
}