export default class Matrix4
{
  constructor(items){
    this.items = items || [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
    ]
  }

  /**
   * Add matrices
   * 
   * @param {Matrix4} secondMatrix
   */
  add(secondMatrix)
  {
    const firstMatrix = this.items
    this.items = [
      firstMatrix[0] + secondMatrix[0], firstMatrix[1] + secondMatrix[1], firstMatrix[2] + secondMatrix[2], firstMatrix[3] + secondMatrix[3],
      firstMatrix[4] + secondMatrix[4], firstMatrix[5] + secondMatrix[5], firstMatrix[6] + secondMatrix[6], firstMatrix[7] + secondMatrix[7],
      firstMatrix[8] + secondMatrix[8], firstMatrix[9] + secondMatrix[9], firstMatrix[10] + secondMatrix[10], firstMatrix[11] + secondMatrix[11],
      firstMatrix[12] + secondMatrix[12], firstMatrix[13] + secondMatrix[13], firstMatrix[14] + secondMatrix[14], firstMatrix[15] + secondMatrix[15],
    ]
  }

  /**
   * Subtract matrices
   * 
   * @param {Matrix4} secondMatrix
   */
  sub(secondMatrix)
  {
    const firstMatrix = this.items
    this.items = [
      firstMatrix[0] - secondMatrix[0], firstMatrix[1] - secondMatrix[1], firstMatrix[2] - secondMatrix[2], firstMatrix[3] - secondMatrix[3],
      firstMatrix[4] - secondMatrix[4], firstMatrix[5] - secondMatrix[5], firstMatrix[6] - secondMatrix[6], firstMatrix[7] - secondMatrix[7],
      firstMatrix[8] - secondMatrix[8], firstMatrix[9] - secondMatrix[9], firstMatrix[10] - secondMatrix[10], firstMatrix[11] - secondMatrix[11],
      firstMatrix[12] - secondMatrix[12], firstMatrix[13] - secondMatrix[13], firstMatrix[14] - secondMatrix[14], firstMatrix[15] - secondMatrix[15],
    ]
  }
  /**
   * Multiply matrices
   * 
   * @param {Matrix4} secondMatrix
   */
  mul(secondMatrix)
  {
    const firstMatrix = this.items
    const resultMatrix = []
    resultMatrix[0] = firstMatrix[0] * secondMatrix[0] + firstMatrix[1] * secondMatrix[4] + firstMatrix[2] * secondMatrix[8] + firstMatrix[3] * secondMatrix[12]
    resultMatrix[1] = firstMatrix[0] * secondMatrix[1] + firstMatrix[1] * secondMatrix[5] + firstMatrix[2] * secondMatrix[9] + firstMatrix[3] * secondMatrix[13]
    resultMatrix[2] = firstMatrix[0] * secondMatrix[2] + firstMatrix[1] * secondMatrix[6] + firstMatrix[2] * secondMatrix[10] + firstMatrix[3] * secondMatrix[14]
    resultMatrix[3] = firstMatrix[0] * secondMatrix[3] + firstMatrix[1] * secondMatrix[7] + firstMatrix[2] * secondMatrix[11] + firstMatrix[3] * secondMatrix[15]
    resultMatrix[4] = firstMatrix[4] * secondMatrix[0] + firstMatrix[5] * secondMatrix[4] + firstMatrix[6] * secondMatrix[8] + firstMatrix[7] * secondMatrix[12]
    resultMatrix[5] = firstMatrix[4] * secondMatrix[1] + firstMatrix[5] * secondMatrix[5] + firstMatrix[6] * secondMatrix[9] + firstMatrix[7] * secondMatrix[13]
    resultMatrix[6] = firstMatrix[4] * secondMatrix[2] + firstMatrix[5] * secondMatrix[6] + firstMatrix[6] * secondMatrix[10] + firstMatrix[7] * secondMatrix[14]
    resultMatrix[7] = firstMatrix[4] * secondMatrix[3] + firstMatrix[5] * secondMatrix[7] + firstMatrix[6] * secondMatrix[11] + firstMatrix[7] * secondMatrix[15]
    resultMatrix[8] = firstMatrix[8] * secondMatrix[0] + firstMatrix[9] * secondMatrix[4] + firstMatrix[10] * secondMatrix[8] + firstMatrix[11] * secondMatrix[12]
    resultMatrix[9] = firstMatrix[8] * secondMatrix[1] + firstMatrix[9] * secondMatrix[5] + firstMatrix[10] * secondMatrix[9] + firstMatrix[11] * secondMatrix[13]
    resultMatrix[10] = firstMatrix[8] * secondMatrix[2] + firstMatrix[9] * secondMatrix[6] + firstMatrix[10] * secondMatrix[10] + firstMatrix[11] * secondMatrix[14]
    resultMatrix[11] = firstMatrix[8] * secondMatrix[3] + firstMatrix[9] * secondMatrix[7] + firstMatrix[10] * secondMatrix[11] + firstMatrix[11] * secondMatrix[15]
    resultMatrix[12] = firstMatrix[12] * secondMatrix[0] + firstMatrix[13] * secondMatrix[4] + firstMatrix[14] * secondMatrix[8] + firstMatrix[15] * secondMatrix[12]
    resultMatrix[13] = firstMatrix[12] * secondMatrix[1] + firstMatrix[13] * secondMatrix[5] + firstMatrix[14] * secondMatrix[9] + firstMatrix[15] * secondMatrix[13]
    resultMatrix[14] = firstMatrix[12] * secondMatrix[2] + firstMatrix[13] * secondMatrix[6] + firstMatrix[14] * secondMatrix[10] + firstMatrix[15] * secondMatrix[14]
    resultMatrix[15] = firstMatrix[12] * secondMatrix[3] + firstMatrix[13] * secondMatrix[7] + firstMatrix[14] * secondMatrix[11] + firstMatrix[15] * secondMatrix[15]
    
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
    const rotationMatirx = [
      1, 0, 0, 0,
      0, cos, -sin, 0,
      0, sin, cos, 0,
      0, 0, 0, 1
    ]
    this.items = rotationMatrix
    this.mul(firstMatrix);
  }
}