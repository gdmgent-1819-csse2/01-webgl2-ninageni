/** Class representing a 2×2 matrix. */
export default class Matrix2
{
  /**
   * Create a 2x2 matrix
   * 
   * @param {Array} items - The matrix items 
   */
  constructor(items){
    this.items = items || [
      0, 0,
      0, 0,
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
      firstMatrix[0] + secondMatrix[0], firstMatrix[1] + secondMatrix[1],
      firstMatrix[2] + secondMatrix[2], firstMatrix[3] + secondMatrix[3]
    ]
  }

  /**
   * Subtraction of the second matrix from the current matrix
   * 
   * @param {Array} secondMatrix - Second matrix
   */
  sub(secondMatrix)
  {
    const firstMatrix = this.items
    this.items = [
      firstMatrix[0] - secondMatrix[0], firstMatrix[1] - secondMatrix[1],
      firstMatrix[2] - secondMatrix[2], firstMatrix[3] - secondMatrix[3]
    ]
  }
  /**
   * Multiplication of the current matrix by the second matrix
   * 
   * @param {Array} secondMatrix - Second matrix
   */
  mul(secondMatrix)
  {
    const firstMatrix = this.items
    const resultMatrix = []
    resutlMatrix[0] = firstMatrix[0] * secondMatrix[0] + firstMatrix[1] * secondMatrix[2]
    resultMatrix[1] = firstMatrix[0] * secondMatrix[1] + firstMatrix[1] * secondMatrix[3]
    resultMatrix[2] = firstMatrix[2] * secondMatrix[0] + firstMatrix[3] * secondMatrix[2]
    resultMatrix[3] = firstMatrix[2] * secondMatrix[1] + firstMatrix[3] * secondMatrix[3]

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
        cos, -sin,
        sin, cos,
    ]
    this.items = rotationMatrix
    this.mul(firstMatrix);
  }
}