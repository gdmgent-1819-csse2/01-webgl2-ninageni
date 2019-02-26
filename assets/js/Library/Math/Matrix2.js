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
   * @param {Array} b - Second matrix
   */
  add(b)
  {
    const a = this.items
    this.items = [
      a[0] + b[0], a[1] + b[1],
      a[2] + b[2], a[3] + b[3]
    ]
  }

  /**
   * Subtraction of the second matrix from the current matrix
   * 
   * @param {Array} b - Second matrix
   */
  sub(b)
  {
    const a = this.items
    this.items = [
      a[0] - b[0], a[1] - b[1],
      a[2] - b[2], a[3] - b[3]
    ]
  }
  /**
   * Multiplication of the current matrix by the second matrix
   * 
   * @param {Array} b - Second matrix
   */
  mul(b)
  {
    const a = this.items
    const c = []
    c[0] = a[0] * b[0] + a[1] * b[2]
    c[1] = a[0] * b[1] + a[1] * b[3]
    c[2] = a[2] * b[0] + a[3] * b[2]
    c[3] = a[2] * b[1] + a[3] * b[3]

    this.items = c
  }
  /**
   * Rotate the matrix around the origin.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rot(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const a = this.items
    const r = [
        cos, -sin,
        sin, cos,
    ]
    this.items = r
    this.mul(a);
  }
}